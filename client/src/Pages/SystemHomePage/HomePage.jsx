import React from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './homepage.css'

const SystemHomePage = () => {
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className='home'>
      HomePage
    </div>
    </>
  )
}

export default SystemHomePage;