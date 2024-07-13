'use client'
import React from 'react'
import 'blaze-slider/dist/blaze.css'
import { useBlazeSlider } from '@/hooks/use-blaze-slider'

const CarouselBlaze = React.forwardRef(({ children, className, ...props }, ref) => {
    const carouselRef = useBlazeSlider({
        all:{
            slidesToShow: 3,
        }
    })
    return (
            <div className={"blaze-slider  min-h-24" + (className ? className : '')} ref={carouselRef}  {...props}>
            <div className="blaze-container">
              <div className="blaze-track-container">
                <div className="blaze-track">
                  {children}
                </div>
              </div>
            </div>
          </div>
    );
});
CarouselBlaze.displayName = "CarouselBlaze";

export { CarouselBlaze };
