import { useEffect, useState } from 'react'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'


const  MOBILE_MAX_WIDTH = 640
  const TABLET_MAX_WIDTH = 768

export const useDevice = (): DeviceType => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (width < MOBILE_MAX_WIDTH) {
    return 'mobile'
  } else if (width >= MOBILE_MAX_WIDTH && width < TABLET_MAX_WIDTH) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}




