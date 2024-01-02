import React from 'react'
import './contactus.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const ContactUs = () => {
    const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Message:', message);
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
          value={title}
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
          value={message}
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