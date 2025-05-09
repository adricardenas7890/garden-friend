import { useEffect, useState, useRef } from 'react'
import styles from './LandingPage.module.css'
import { LandingPageProps } from './LandingPage.types'

const LandingPage: React.FC<LandingPageProps> = ({ animationAddress, animationTime, disabled }) => {
  const [isVisible, setIsVisible] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // User click will skip animation
  const handleClick = () => {
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

  return (
    <>
      {!disabled && (
        <div
          className={styles['animation-wrapper-container']}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity ${animationTime}ms ease-out`,
            pointerEvents: isVisible ? 'auto' : 'none',
          }}
          onClick={handleClick}
        >
          <div className={styles['animation-container']}>
            {animationAddress}
            This is a test
          </div>
        </div>
      )}
    </>
  )
}

export default LandingPage
