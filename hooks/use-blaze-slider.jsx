
import React from 'react'
import BlazeSlider from 'blaze-slider'

export function useBlazeSlider(config) {
  const sliderRef = React.useRef()
  const elRef = React.useRef()

  React.useEffect(() => {
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config)
      console.log(config, 'config useBlazeSlider')
    }
  }, [config])

  return elRef
}