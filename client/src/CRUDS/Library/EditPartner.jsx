import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPartner = () => {
  const { id } = useParams();
  const [partnerData, setPartnerData] = useState({
    username: '',
    name: '',
    ceo: '',
    city: '',
    state: '',
    street: '',
    zipcode: '',
    password: '',
    image: '',
  });

  const navigate = useNavigate();

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    // Fetch partner data by ID and populate the state
    axios.get(`http://localhost:5000/partner/allpartners/${id}`)
      .then(response => setPartnerData(response.data.data))
      .catch(error => console.error('Error fetching partner data:', error));
  }, [id]);



  const handleUpdatePartner = () => {
    axios.put(`http://localhost:5000/partner/updatepartner/${id}`, partnerData)
      .then(response => {
        console.log('Partner updated successfully:', response.data);
        notify('Partner updated successfully');
        navigate('/admin-partners');
      })
      .catch(error => {
        console.error('Error updating partner:', error);
      });
  };

  const handleInputChange = (e) => {
    setPartnerData({
      ...partnerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer'>
          <Box id='box'>
            <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
              <Typography variant="h6" gutterBottom>
                Update Partner
              </Typography>
              <TextField
                label="Username"
                name="username"
                value={partnerData.username}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                name="name"
                value={partnerData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="CEO"
                name="ceo"
                value={partnerData.ceo}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="City"
                name="city"
                value={partnerData.city}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="State"
                name="state"
                value={partnerData.state}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Street"
                name="street"
                value={partnerData.street}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Zipcode"
                name="zipcode"
                value={partnerData.zipcode}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={partnerData.password}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              {/* Add additional fields as needed based on your partner model */}
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdatePartner}
                style={{ marginTop: '20px' }}
              >
                Update Partner
              </Button>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default EditPartner;
