import React from 'react'
import styles from './LandingPage.module.css'
import { LandingPageProps } from './LandingPage.types'

export const LandingPage: React.FC<LandingPageProps> = ({ animation, onClick, disabled }) => {
  if (!disabled) {
    return (
      <div className={styles.landingPage} onClick={onClick}>
        {animation}
      </div>
    )
  }
}
