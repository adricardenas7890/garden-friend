import React, { useEffect, useState, useRef } from 'react'
import styles from './LandingPage.module.css'
import { LandingPageProps } from './LandingPage.types'

const LandingPage: React.FC<LandingPageProps> = ({ animationAddress, onClick, animationTime, disabled }) => {
  const [isVisible, setIsVisible] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // User click will skip animation
  const handleClick = () => {
    if (onClick) {
      onClick()
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsVisible(false)
  }

  // Fade out animation after "animationTime" has elapsed
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsVisible(false)
    }, animationTime)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [animationTime])

  if (!disabled) {
    return (
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${animationTime}ms ease-out`,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        onClick={handleClick}
      >
        <div className="animation-container" style={styles}>
          {animationAddress}
        </div>
      </div>
    )
  }

  return <div></div>
}

export default LandingPage
