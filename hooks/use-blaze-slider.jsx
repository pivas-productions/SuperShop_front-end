
import React from 'react'
import BlazeSlider from 'blaze-slider'

export function useBlazeSlider(config) {
  const sliderRef = React.useRef()
  const elRef = React.useRef()

  React.useEffect(() => {
    // if not already initialized
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config)
    }
  }, [])

  return elRef
}