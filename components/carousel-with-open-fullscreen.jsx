'use client'
import React, { useState } from 'react'
import { CarouselBlaze } from './ui/carousel-blaze'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

const CarouselWithOpenFullscreen = ({ slidesToShow, loop, items }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  return (
    <>
      <CarouselBlaze loop={loop} slidesToShow={slidesToShow}>
        {items.map((item, index) => (
          <div key={index} className="blaze-slide h-4/5 lg:h-full relative w-14" onClick={() => openLightbox(index)}>
            <Image
              className=" blaze-item"
              fill
              alt={item.alt}
              src={item.src}
              loading="eager"
              draggable={false}
              placeholder={undefined}
              style={{
                objectFit: "cover",
                offsetPosition: 'center',
                cursor: "pointer",
              }}
              sizes={`100%`}
            />
          </div>
        ))}
      </CarouselBlaze>
      <Lightbox
        open={isLightboxOpen}
        
        close={() => setLightboxOpen(false)}
        slides={items.map((item) => ({ src: item.src, alt: item.alt }))}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" }, thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, .8' } }}
        index={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
        carousel={{
          finite: !loop,
        }}
      />
    </>
  )
}

export default CarouselWithOpenFullscreen