import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './libPartners.css';
import styled from '@emotion/styled';

const LibPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch partner data
    axios.get('http://localhost:5000/partner/allpartners')
      .then(response => setPartners(response.data.data))
      .catch(error => console.error('Error fetching partner data:', error));
  }, []);

  return (
    <div className='partners-container'>
      <div>
        {partners.map((partner, index) => (
          <div key={index} className="library-partner">
            <img src={partner.image} alt={partner.name} className="library-image" />
            <div className="library-details">
              <h3 className="library-name">{partner.name}</h3>
              <button className="have-a-look-button">
              <Link to={`/partner-details/${partner._id}`}
              style={{ textDecoration: 'none', color: 'white' }}
                >
                  HAVE A LOOK
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibPartners;
