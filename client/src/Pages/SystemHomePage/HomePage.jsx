import React from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './homepage.css'
import ContactUs from '../../Components/ContactUs/ContactUs';
import OurOffices from '../../Components/OurOffices/OurOffices';
import Slider from '../../Components/SmallSlider/SmallSlider'
import PartnersSlider from '../../Components/PartnersSlider/PartnersSlider';

const SystemHomePage = () => {
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className="home">
      <div className="components">
        <h1>New Books</h1>
        <Slider/>
        <h1>New Partners</h1>
        <PartnersSlider/>
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