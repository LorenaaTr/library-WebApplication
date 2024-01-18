import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import './updateuser.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateUserForm = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    city: '',
    birthday: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000, 
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    // Fetch user data 
    axios.get(`http://localhost:5000/user/getUserByid/${id}`)
      .then(response => setUserData(response.data.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/user/updateuser/${id}`, userData)
      .then(response => {
        console.log('User updated successfully:', response.data);
        notify('User updated successfully')
        navigate('/admin-users'); 
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='singlepage'>
        <div className='singlepagecontainer'>
        <Box id='box'>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Update User
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Surname"
          name="surname"
          value={userData.surname}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="city"
          value={userData.city}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          style={{ marginTop: '20px' }}
        >
          Update User
        </Button>
      </Paper>
    </Box>
        </div>
        </div>
    </>
    
  );
};

export default UpdateUserForm;
