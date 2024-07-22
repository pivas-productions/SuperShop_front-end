import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

import './pickup-maps.css';
import { CiSearch } from 'react-icons/ci';

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


const MapPickup = () => {
    const [locations, setLocations] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null); // Состояние для активного маркера
    const [map, setMapRef] = useState(null)

    useEffect(() => {
        axios.get('/api/stores')
            .then(response => {
                setLocations(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных магазинов:', error);
            });
    }, []);

    const handleSearch = useDebouncedCallback(async (event) => {

        if (event.target.value.trim() !== '') {
            const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(event.target.value)}&format=json&limit=1`;
            try {
                const response = await axios.get(geocodeUrl);
                if (response.data.length > 0) {
                    const result = response.data[0];
                    const latitude = parseFloat(result.lat);
                    const longitude = parseFloat(result.lon);
                    const nearestLocation = findNearestLocation(latitude, longitude, locations);
                    setSearchResult(nearestLocation);
                    if (map) {
                        map.flyTo([nearestLocation.latitude, nearestLocation.longitude], 15); // Переместить на найденную точку с увеличением масштаба
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

    const findNearestLocation = (latitude, longitude, locations) => {
        let minDistance = Infinity;
        let nearestLocation = null;

        locations.forEach(location => {
            const distance = getDistanceFromLatLonInKm(latitude, longitude, location.latitude, location.longitude);
            if (distance < minDistance) {
                minDistance = distance;
                nearestLocation = location;
            }
        });

        return nearestLocation;
    };

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Радиус Земли в км
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Расстояние в км
        return distance;
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const handleChoiceMarker = (location) => {
        console.log(location)
        setActiveMarker(location);
    }

    const handleSubmit = () => {
        console.log('submited')
    }

    return (
        <div className='w-full h-full space-y-4 overflow-y-auto'>
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
                className='asdfasfd h-64 w-full'
                center={[47.222109, 39.718813]}
                zoom={13}
                // style={{ height: '300px', width: '100%' }}

                ref={setMapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {!searchResult && locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.latitude, location.longitude]}
                        eventHandlers={{
                            click: () => handleChoiceMarker(location)
                        }}
                        icon={activeMarker === location ? activeIcon : defaultIcon}
                    >
                        <Popup>
                            {location.name}<br />{location.address}
                        </Popup>
                    </Marker>
                ))}
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
                            {searchResult.name}<br />{searchResult.address}
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
                <span className="relative z-10">Забрать отсюда</span>
                <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
            </button>}
        </div>
    );
};

export default MapPickup;
