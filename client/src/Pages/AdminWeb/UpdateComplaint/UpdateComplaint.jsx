import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useNavigate } from 'react-router';

const UpdateComplaintForm = () => {
  const { id } = useParams();
  const [complaintData, setComplaintData] = useState({
    title: '',
    message: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/complaint/getcomplaintbyid/${id}`)
      .then((response) => {
        setComplaintData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return {};
    }
  };

  const handleUpdate = () => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = decodeToken(token);
      const requestData = {
        user: {
          _id: decodedToken.userId,
          name: decodedToken.username,
        },
        title: complaintData.title,
        message: complaintData.message,
      };
      axios
        .put(`http://localhost:5000/complaint/updatecomplaint/${id}`, requestData)
        .then(() => {
          alert('Updated successfully');
          setComplaintData({ title: '', message: '' });
          navigate('/admin-complaints');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleInputChange = (e) => {
    setComplaintData({
      ...complaintData,
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
            <Paper style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant='h6'>Update Complaint</Typography>
              <TextField
                label='Title'
                name='title'
                value={complaintData.title}
                fullWidth
                onChange={handleInputChange}
                margin='normal'
              />
              <TextField
                label='Message'
                name='message'
                value={complaintData.message}
                fullWidth
                onChange={handleInputChange}
                margin='normal'
              />
              <Button
                variant='contained'
                color='primary'
                onClick={handleUpdate}
                style={{ marginTop: '16px', backgroundColor: 'darkblue' }}
              >
                Update Complaint
              </Button>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UpdateComplaintForm;
