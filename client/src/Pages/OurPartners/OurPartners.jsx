import React from 'react';
import './ourPartners.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useState, useEffect } from 'react';
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
    <>
      <Navbar />
      <div className="our-partners-container">
        <h1 className="title">OUR PARTNERS</h1>
        <p className="description">LOYAL SHELF SHARE PARTNERS</p>
        <div className="partners-list">
          {partnersData?.map((item) => (
            <div className="partner-item" key={item._id}>
              <span className="partner-name">{item.name.toUpperCase()} BOOKSTORE</span>
              <div className="whiteline"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurPartners;
