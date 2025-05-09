import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage.js'
import MainLayout from '../layout/MainLayout'

const AppRouter: React.FC = () => {
  const showLanding = true // conditionally determine this based on app state
  const animationTime = 2000
  const animationAddress = ''

  // add useEffect for determining how long this is shown
  // move logic from LandingPage to Here

  return (
    <BrowserRouter>
      {showLanding ? (
        <LandingPage animationAddress={animationAddress} animationTime={animationTime} disabled={false} />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<AnotherView />} />
            <Route path="select" element={<AnotherView />} /> */}
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default AppRouter
