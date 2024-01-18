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

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image!');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed!');
          setImageUploadProgress(null);
        },
        async () => {
          try {
            // Get download URL after successful upload
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          } catch (urlError) {
            console.error('Error getting download URL:', urlError);
            setImageUploadError('Image upload failed!');
            setImageUploadProgress(null);
          }
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed!');
      setImageUploadProgress(null);
      console.error(error);
    }
  };

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
