import React, { useEffect, useState } from 'react'

export default function ResponsiveTemplate({ component, mobileComponent }) {
  const [screenWith, setScreenWith] = useState(window.innerWidth)
  let Component = component
  if (screenWith < 768) {
    Component = mobileComponent
  }
  console.log('render')
  useEffect(() => {
    const breakPoint = window.matchMedia('(max-width: 768px)')
    function resize() {
      if (breakPoint.matches) {
        setScreenWith(window.innerWidth)
        console.log(breakPoint)
      } else {
        console.log(breakPoint)
        setScreenWith(window.innerWidth)
      }
    }
    breakPoint.addEventListener('change', resize)
    return () => breakPoint.removeEventListener('change', resize)
  }, [])
  return <Component />
}
