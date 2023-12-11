import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './registerpartner.css';

const RegisterPartner = () => {
  const navigate = useNavigate();
  const [name,] = useState('');
  const [ceoname, setceoname] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
 
  const [State, setState] = useState('');
  const [Sreet, setStreet] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  

  const handleRegister = () => {
    if (!name||!ceoname||  !city ||   !username  ||  !acceptTerms) {
      return;
    }
    navigate('/login');
  };

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
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Library Bussiness name"
                name="name"
                autoFocus
                value={name}
                error={usernameError}
                helperText={usernameError ? 'Library name is required.' : ''}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                }}
              />
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="ceoname"
                label="Library's Ceo Name"
                name="ceoname"
                value={ceoname}
                onChange={(e) => setceoname(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                value={State}
                onChange={(e) => setState(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="street"
                label="Street"
                name="street"
                value={Sreet}
                onChange={(e) => setStreet(e.target.value)}
              />
              
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="zipcode"
                label="Zip Code"
                name="zipcode"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              
              
              
              <FormControlLabel
                control={<Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />}
                label="I accept the terms and conditions"
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
