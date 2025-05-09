import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      {/* header, sidebar, or navigation can go here */}
      <Outlet /> {/* renders child route component */}
    </div>
  )
}

export default MainLayout
