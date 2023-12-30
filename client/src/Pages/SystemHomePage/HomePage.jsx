import React from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './homepage.css'
import InfiniteSlider from '../../Components/InfiniteSlider/InfiniteSlider';
import ContactUs from '../../Components/ContactUs/ContactUs';
import OurOffices from '../../Components/OurOffices/OurOffices';

const SystemHomePage = () => {
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className="home">
      <div className="components">
        <h1>New Books</h1>
        <h1>New Partners</h1>
        <h1>New Book Events</h1>
        <h1>Try Our Quizes</h1>
        <h1>Contact Us</h1>
        <ContactUs/>
        <h1>Our Offices</h1>
        <OurOffices/>
      </div>
    </div>
    </>
  )
}

export default SystemHomePage;