'use client';
import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();
const SwiperContainer = React.forwardRef(({ className, children, ...props }, ref) => {
  const SwiperRef = useRef(null)
  useEffect(() => {
    if (SwiperRef?.current) {
      const swiperCont = SwiperRef?.current;

      const params = {
        navigation: true,
        direction: 'horizontal',
        loop: true,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 128,
          },
        },
        navigation: true,
        grabCursor: true,
        pagination: {
          clickable: true
        }
      };

      Object.assign(swiperCont, params);

      swiperCont.initialize();
    }
  }, [SwiperRef])
  return (
    <swiper-container
      className={"SwiperContainer " + (className ? className : "")}
      ref={SwiperRef}
      {...props}
    >
      {children}
    </swiper-container>
  );
});
SwiperContainer.displayName = "SwiperContainer";

const SwiperSlider = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <swiper-slide
      className={"SwiperSlide " + (className ? className : "")}
      ref={ref}
      {...props}
    >
      {children}
    </swiper-slide>
  );
});
SwiperSlider.displayName = "SwiperSlider";

export { SwiperContainer, SwiperSlider };
