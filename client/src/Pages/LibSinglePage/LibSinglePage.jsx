// LibSinglePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Divider } from '@mui/material';
//import './libsinglepage.css';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';

export default function LibSinglePage() {
  const { id } = useParams();
  const [partnerDetails, setPartnerDetails] = useState(null);

  useEffect(() => {
    // Fetch partner details by ID
    axios.get(`http://localhost:5000/partner/allpartners/${id}`)
      .then(response => setPartnerDetails(response.data.data))
      .catch(error => console.error('Error fetching partner details:', error));
  }, [id]);

  if (!partnerDetails) {
    return <p className="loading">Loading...</p>; 
  }

  return (
    <>
      <SystemHeader />
      <SystemSidebar />
      <div className="home">
        <div className="components comp">
          <Card style={{maxWidth:700, marginTop:200, marginLeft:480, marginBottom:180, textAlign:'center'}}>
            <CardContent>
              <div className="partner-image-container">
                <img src={partnerDetails.image} alt={partnerDetails.name} className="partner-image" />
              </div>
              <Typography variant="h4" gutterBottom>
                {partnerDetails.name} Details
              </Typography>
              <Divider />
              <Typography variant="subtitle1" color="textSecondary">
                Ceo: {partnerDetails.ceo}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Street: {partnerDetails.street}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                City: {partnerDetails.city}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                State: {partnerDetails.state}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Zipcode: {partnerDetails.zipcode}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
