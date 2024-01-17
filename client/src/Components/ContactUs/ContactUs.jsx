import React from 'react'
import './contactus.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [dataform, setdataform] = useState({
    title:"",
    message:""
  });

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
    <div className='contactus'>
        <div className='text'>
            <p>If you are having trouble with any of our services,
             please do not hesitate to reach out to our customer support team for prompt assistance.
            </p>
        </div>
        <div className='form'>
        <TextField
          className='title'
          label='Title'
          variant='outlined'
          fullWidth
          margin='normal'
          value={dataform.title}
          onChange={handleTitleChange}
          style={{backgroundColor:"grey"}}
        />
        <TextField
          className='message'
          label='Message'
          variant='outlined'
          fullWidth
          multiline
          rows={6}
          margin='normal'
          value={dataform.message}
          onChange={handleMessageChange}
          style={{backgroundColor:"grey"}}
        />
        <Button variant='contained' color='primary' className='button' onClick={handleSubmit} style={{backgroundColor:"red", marginTop:"20px"}}>
          Send Complaint
        </Button>
      </div>
    </div>
  )
}

export default ContactUs