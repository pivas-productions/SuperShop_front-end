'use client'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const SwiperSlider = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
    }, []);

  

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      pagination-clickable='true'
      loop="true"
      autoplay-delay='5000'
      space-between='10'
    >
      <swiper-slide lazy="true"><img src="/435x366.png" alt="" loading="lazy"/></swiper-slide>
      <swiper-slide lazy="true"><img src="/435x366.png" alt="" loading="lazy"/></swiper-slide>
      <swiper-slide lazy="true"><img src="/435x366.png" alt="" loading="lazy"/></swiper-slide>
    </swiper-container>
  );
};