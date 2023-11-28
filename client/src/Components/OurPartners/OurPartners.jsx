import React, { useState } from 'react';
import './ourpartners.css';
import PartnersCard from './PartnersCard';
import { Link } from 'react-router-dom';

const OurPartners = () => {
  
  return (
    <div className='ourpartners'>
      <div className='overlay-content'>
        <h1>OUR PARTNERS</h1>
        <div className='card-slider'>
          <div className='card-wrapper' >
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
        </div>
        <Link to='/ourPartners'>SEE MORE</Link>
        <span></span>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
