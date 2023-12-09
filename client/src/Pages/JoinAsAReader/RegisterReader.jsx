import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, RadioGroup,Radio, FormControlLabel, Checkbox } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './registerreader.css';

const RegisterReader = () => {
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
            <Typography component="h1" variant="h5" className="login-text">
              REGISTER
            </Typography>
            <form className="login-form">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
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
                label="Surname"
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
                id="email"
                label="E-mail"
                name="email"
                type="email"
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
                id="birthday"
                label="Birthday"
                name="birthday"
                type="date"
                value={birthday}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Typography variant="body1" color="textPrimary" style={{textAlign: 'left'}}>
                Are you a student?
              </Typography>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="yes"
                value={isStudent}
                onChange={(e) => setIsStudent(e.target.value)}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
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
                Register
              </Button>
              <p className="joinus">
                Have an account yet? <Link to="/login">Log in here</Link>
              </p>
            </form>
          </div>
        </div>
      </Grid>
    </div>
    <Footer/>
    </>
  );
};

export default RegisterReader;
