import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddComplaintForm = () => {
  const [dataform, setdataform] = useState({
    title:"",
    message:""
  });

  const navigate = useNavigate();

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return {};
    }
  };

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000, 
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('token');
  
    if (token) {
      const decodedToken = decodeToken(token);
      const requestData = {
        user: {
          _id: decodedToken.userId,
          name: decodedToken.username,
        },
        title: dataform.title,
        message: dataform.message,
      };
  
      axios.post("http://localhost:5000/complaint/addComplaint", requestData)
        .then((res) => {
          console.log('res', res);
          notify("Complaint sent successfully!");
          setdataform({ title: "", message: "" });
          navigate('/admin-complaints')
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    else {
      console.error('Token not available');
    }
  };

  const handleTitleChange = (e) => {
    setdataform({ ...dataform, title: e.target.value });
  };

  const handleMessageChange = (e) => {
    setdataform({ ...dataform, message: e.target.value });
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer'>
          <Box id='box'>
            <Paper style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant='h6'>Add Complaint</Typography>
              <TextField
                label='Title'
                name='title'
                value={dataform.title}
                fullWidth
                onChange={handleTitleChange}
                margin='normal'
              />
              <TextField
                label='Message'
                name='message'
                value={dataform.message}
                fullWidth
                onChange={handleMessageChange}
                margin='normal'
              />
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
                style={{ marginTop: '16px', backgroundColor: 'darkblue' }}
              >
                Add Complaint
              </Button>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddComplaintForm;
