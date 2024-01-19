import React, { useState, useEffect } from 'react';
import './ourpartners.css';
import PartnersCard from './PartnersCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OurPartners = () => {
  const [partnersData, setpartnerdata] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/partner/allpartners')
      .then((response) => {
        setpartnerdata(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('partnersData:', partnersData);


  return (
    <div className='ourpartners'>
      <div className='overlay-content'>
        <h1 className='titlep'>OUR PARTNERS</h1>
        <div className='card-slider'>
          <div className='card-wrapper'>
            {partnersData?.map((item) => (
              <PartnersCard 
                key={item._id}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
          <Link to='/ourPartners'>SEE MORE</Link>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
