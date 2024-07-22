import React, { useEffect, useState, useTransition } from 'react';

import { useIsClient } from "@/hooks/use-is-client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, ZoomControl } from 'react-leaflet';
import Control from "react-leaflet-custom-control";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

import '../pickup-maps.css';
import { CiSearch } from 'react-icons/ci';
import Loading from '../Loading';
import { FaLocationArrow } from 'react-icons/fa';

// Fix for default icon path issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  iconUrl: '/images/leaflet/marker-icon.png',
  shadowUrl: '/images/leaflet/marker-shadow.png',
});

const defaultIcon = new L.Icon({
  iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
  iconUrl: '/images/leaflet/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: '/images/leaflet/marker-shadow.png',
  shadowSize: [41, 41],
});

const activeIcon = new L.Icon({
  iconUrl: '/images/leaflet/marker-icon-active.png', // Путь к иконке активного состояния
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: '/images/leaflet/marker-shadow.png',
  shadowSize: [41, 41],
});

const NewAddressForm = ({fetch_route}) => {
  const isClient = useIsClient();

  const [markers, setMarkers] = useState();

  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null); // Состояние для активного маркера
  const [map, setMapRef] = useState(null)
  const [isPending, startTransition] = useTransition();

  const AddMarkerOnClick = () => {
    useMapEvents({
      async click(event) {
        setCurrentLocation(null)
        setActiveMarker(null)
        const { lat, lng } = event.latlng;
        const newMarker = {
          position: [lat, lng],
          id: Date.now(),
          address: await getAddressFromLatLng(lat, lng),
        };
        setMarkers(newMarker);
      },
    });
  };

  const getAddressFromLatLng = async (lat, lng) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          lat,
          lon: lng,
          format: 'json',
          addressdetails: 1
        }
      });
      return response.data.display_name || 'Адрес не найден';
    } catch (error) {
      console.error('Ошибка при обратном геокодировании:', error);
      return 'Ошибка при получении адреса';
    }
  };

  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });

        if (map) {
          map.flyTo([latitude, longitude], 15);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };



  const handleSearch = useDebouncedCallback(async (event) => {

    if (event.target.value.trim() !== '') {
      console.log(event.target.value, 'event.target.value search')
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(event.target.value)}&format=json&limit=1`;
      try {
        const response = await axios.get(geocodeUrl);
        if (response.data.length > 0) {
          const result = response.data[0];
          const latitude = parseFloat(result.lat);
          const longitude = parseFloat(result.lon);
          console.log('result', result)
          setSearchResult({ latitude: latitude, longitude: longitude, address: result.display_name });
          if (map && result) {
            map.flyTo([latitude, longitude], 18); // Переместить на найденную точку с увеличением масштаба
          }
        } else {
          setSearchResult(null);
        }
      } catch (error) {
        console.error('Ошибка при геокодировании:', error);
        setSearchResult(null);
      }
    } else {
      setSearchResult(null);
    }
  }, 300);


  const handleChoiceMarker = (location) => {
    console.log(location)
    setActiveMarker(location);
  }

  const handleSubmit = () => {
    console.log('markers', markers)
    startTransition(async () => {
      try {
        const send_data = {
          address: markers.address,
          lat: markers.position[0],
          lon: markers.position[1],
          default_state: false,
        }
        let response = await fetch(`${fetch_route}/api/address/`, {
          method: "POST",
          body: JSON.stringify(send_data),
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'
        })

        if (response.status === 500) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('response', response)
        console.log('response.headers', response.headers.get('Set-Cookie'))
        location.reload();
        
      } catch (error) {
        console.error('Error:', error);
      }
    });
    console.log('submited')
  }

  if (!isClient)
    return <Loading />;
  return (
    <div className='w-full h-full space-y-4'>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={'Введите адрес'}
          onChange={handleSearch}
        />
        <CiSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <MapContainer
        center={[47.222109, 39.718813]}
        zoom={13}
        style={{ height: '300px', width: '100%' }}
        ref={setMapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Control position="bottomright" prepend>
          <a
            className=" flex justify-center items-center border-b border-b-[#0003] w-[30px] h-[30px] leading-[26px] text-center text-black text-[22px] rounded shadow-[0_1px_5px_#000000a6] bg-clip-padding border-2 leflet-control-zoom-in bg-white" href="#" title="Find Current location" role="button" aria-label="Find Current location" aria-disabled="false"
            onClick={() => handleLocateClick()}
          >
            <FaLocationArrow className='text-black w-[20px] h-[20px]' />
          </a>
        </Control>
        <AddMarkerOnClick />
        {markers &&
          <Marker
            key={markers.id}
            position={markers.position}
            icon={activeMarker === location ? activeIcon : L.icon({
              iconUrl: '/images/leaflet/marker-icon.png',
              shadowUrl: '/images/leaflet/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
            eventHandlers={{
              click: () => handleChoiceMarker(location)
            }}
          >
            <Popup>
              {`Адрес: ${markers.address}`}
            </Popup>
          </Marker>
        }
        {currentLocation && (
          <Marker
            position={[currentLocation.lat, currentLocation.lng]}
            icon={L.icon({
              iconUrl: '/images/leaflet/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: '/images/leaflet/marker-shadow.png',
              shadowSize: [41, 41]
            })}
          >
          </Marker>
        )}
        {searchResult && (
          <Marker
            position={[searchResult.latitude, searchResult.longitude]}
            icon={activeMarker === location ? activeIcon : L.icon({
              iconUrl: '/images/leaflet/marker-icon.png',
              shadowUrl: '/images/leaflet/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
            eventHandlers={{
              click: () => handleChoiceMarker(location)
            }}
          >
            <Popup>
              {`Адрес: ${searchResult.address}`}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      {activeMarker && <button
        onClick={handleSubmit}
        className={
          "Button relative appearance-none transition-all overflow-hidden p-3 w-full h-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
          "gap-2 inline-flex text-neutral-100 leading-none " +
          "hover:text-black group/buttonbuy "
        }
      >
        <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
        <span className="relative z-10">Доставить сюда</span>
        <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
      </button>}
    </div>

  );
};

export default NewAddressForm;
