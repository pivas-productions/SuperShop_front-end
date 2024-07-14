'use client'
import React from 'react'
import 'blaze-slider/dist/blaze.css'
import { useBlazeSlider } from '@/hooks/use-blaze-slider'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const CarouselBlaze = React.forwardRef(({ children, className, slidesToShow, loop, slideGap, ...props }, ref) => {
  const carouselRef = useBlazeSlider({
    all: {
      slidesToShow: slidesToShow,
      loop: loop,
      slideGap: slideGap ? slideGap : '20px',
    }
  })
  return (
    <>
      <div className={"blaze-slider h-full flex-grow flex gap-2 px-2 " + (className ? className : '')} ref={carouselRef}  {...props}>
        <button className="blaze-prev"><FaLongArrowAltLeft className='w-6 h-6'/></button>

        <div className="blaze-container h-full flex-grow">
          <div className="blaze-track-container h-full">
            <div className="blaze-track h-full">
              {children}
            </div>
          </div>
        </div>
        <button className="blaze-next"><FaLongArrowAltRight className='w-6 h-6'/></button>
      </div>

    </>
  );
});
CarouselBlaze.displayName = "CarouselBlaze";

export { CarouselBlaze };
