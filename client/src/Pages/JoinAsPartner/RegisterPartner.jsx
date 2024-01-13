import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import './registerpartner.css';

const RegisterPartner = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    name:"",
    ceo:"",
    city:"",
    state:"",
    street:"",
    zipcode:"",
    password:""
  });

  const [confirmpassword, setconfirmpassword] = useState("");
  

  const [nameError, setnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault(); 

    if (dataform.password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post("http://localhost:5000/partner/registerpartner", dataform)
    .then((res) => {
      console.log('Response:', res.data);
      navigate('/login');
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
    <Navbar />
    <div className="register">
      <Grid container component="main" className="registercontent">
        <div className="form">
        
          <div className="form-container">
          <Typography component="h1" variant="h3" className="login-text" style={{fontWeight : 'bold' ,fontSize : '25px' ,}} >
  BECOME A SHELF SHARE PARTNER
</Typography>

            <Typography component="h3" variant="h1" className="login-text" >
              JOIN AS A PARTNER
            </Typography>
            <form className="login-form">
              <TextField
                ariant="outlined"
                margin="normal"
                required
                fullWidth
                label="Library's Bussiness Name"
                name="name"
                autoFocus
                value={dataform.name}
                // error={usernameError}
                // helperText={usernameError ? 'Username is required.' : ''}
                onChange={(e) => changes(e)}
              />
               <TextField
                 ariant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 label="Library's CEO Name"
                 name="ceo"
                 autoFocus
                 value={dataform.ceo}
                 // error={usernameError}
                 // helperText={usernameError ? 'Username is required.' : ''}
                 onChange={(e) => changes(e)}
              />
              <TextField
                 ariant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 label="City"
                 name="city"
                 autoFocus
                 value={dataform.city}
                 // error={usernameError}
                 // helperText={usernameError ? 'Username is required.' : ''}
                 onChange={(e) => changes(e)}
              />
              <TextField
                 ariant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 label="State"
                 name="state"
                 autoFocus
                 value={dataform.state}
                 // error={usernameError}
                 // helperText={usernameError ? 'Username is required.' : ''}
                 onChange={(e) => changes(e)}
              />
              <TextField
                 ariant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 label="Street"
                 name="street"
                 autoFocus
                 value={dataform.street}
                 // error={usernameError}
                 // helperText={usernameError ? 'Username is required.' : ''}
                 onChange={(e) => changes(e)}
              />
              
               <TextField
                 ariant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 label="Zip Code"
                 name="zipcode"
                 autoFocus
                 value={dataform.zipcode}
                 // error={usernameError}
                 // helperText={usernameError ? 'Username is required.' : ''}
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
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className="submit-button"
                onClick={handleRegister}
              >
               JOIN
              </Button>
              
            </form>
          </div>
        </div>
      </Grid>
    </div>
    <Footer/>
    </>
  );
};

export default RegisterPartner;
