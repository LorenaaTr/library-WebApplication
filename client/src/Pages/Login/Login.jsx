import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      if (!username) setUsernameError(true);
      if (!password) setPasswordError(true);
      return;
    }
  };

  return (
    <div className="login">
    <Navbar/>
      <Grid container component="main" className="login">
          <div className="form">
            <div className="form-container">
              <Typography component="h1" variant="h5" className="login-text">
                LOG IN
              </Typography>
              <form className="login-form">
                <TextField
                  className='input'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  value={username}
                  error={usernameError}
                  helperText={usernameError ? <Typography
                    variant="body2"
                    color="error"
                    className="error-message"
                    style={{textAlign:'left', margin:'-15px auto', fontSize:'15px'}}
                  >
                    Username is required.
                  </Typography> : ''}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError(false);
                    setErrorMessage('');
                  }}
                />
                <TextField
                style={{color:"white"}}
                  className='input'
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  error={passwordError}
                  helperText={passwordError ? <Typography
                    variant="body2"
                    color="error"
                    className="error-message"
                    style={{textAlign:'left', margin:'-15px auto', fontSize:'15px'}}
                  >
                    Password is required.
                  </Typography> : ''}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                    setErrorMessage('');
                  }}
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="error"
                  className="submit-button"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <p className='joinus'>
                  Don't have an account yet?{' '}
                  <Link to="/joinasereader">Sign up here</Link>
                </p>
              </form>
            </div>
          </div>
        </Grid>
    </div>
  );
};

export default Login;
