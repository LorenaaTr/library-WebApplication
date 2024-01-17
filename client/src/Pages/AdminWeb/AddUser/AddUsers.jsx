import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddUserForm = () => {
    const navigate = useNavigate();
    const [dataform, setdataform] = useState({
      name:"",
      surname:"",
      email:"",
      city:"",
      birthday:"",
      username:"",
      password:""
    });
  
    const [confirmpassword, setconfirmpassword] = useState("");
    
    const notify = (message) => {
        toast.success(message, {
          autoClose: 2000, 
          position: toast.POSITION.TOP_CENTER,
        });
      };
  
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
  
    const handleRegister = (e) => {
      e.preventDefault(); 
  
      if (dataform.password !== confirmpassword) {
        alert("Passwords do not match");
        return;
      }
  
      axios.post("http://localhost:5000/authentification/register", dataform)
      .then((res) => {
        notify("User added successfully!");
        console.log('Response:', res.data);
        navigate('/admin-users');
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
  
    };
  
    const changes = (e) => {
      setdataform({ ...dataform, [e.target.name]: e.target.value });
    }

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer'>
          <Box id='box'>
            <Paper style={{ marginBottom: '16px', padding: '16px' }}>
              <Typography variant='h6'>Add User</Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                autoFocus
                value={dataform.name}
                // error={usernameError}
                // helperText={usernameError ? 'Username is required.' : ''}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Surname"
                name="surname"
                value={dataform.surname}
                // error={emailError}
                // helperText={emailError ? 'Invalid email address.' : ''}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={dataform.email}
                // error={emailError}
                // helperText={emailError ? 'Invalid email address.' : ''}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="City"
                name="city"
                value={dataform.city}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Birthday"
                name="birthday"
                type="date"
                value={dataform.birthday}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                value={dataform.username}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={dataform.password}
                onChange={(e) => changes(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                value={confirmpassword}
                onChange={e => setconfirmpassword(e.target.value)}
              />
              <Button
                variant='contained'
                color='primary'
                onClick={handleRegister}
                style={{ marginTop: '16px', backgroundColor: 'darkblue' }}
              >
                Add User
              </Button>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
