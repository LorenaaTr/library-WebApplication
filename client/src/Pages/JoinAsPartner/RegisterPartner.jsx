import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, RadioGroup,Radio, FormControlLabel, Checkbox } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './registerpartner.css';

const RegisterPartner = () => {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [surname, setsurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isStudent, setIsStudent] = useState('yes');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleRegister = () => {
    if (!name||!surname || !email || !city || !birthday || !username || !password || !confirmPassword || !isStudent|| !acceptTerms) {
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
            <Typography component="h1" variant="h5" className="login-text" >
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
                helperText={usernameError ? 'Username is required.' : ''}
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
                id="surname"
                label="Library's CEO name"
                name="surname"
                value={email}
                error={emailError}
                helperText={emailError ? 'Invalid email address.' : ''}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
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
                id="city"
                label="State"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="city"
                label="Street"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="city"
                label="Zip Code"
                name="city"
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
