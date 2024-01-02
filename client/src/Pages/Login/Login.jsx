import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    username:"",
    password:""
  })
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/authentification/login",  dataform)
      .then((res) => {
        console.log('Response:', res.data);
        if (res.data.status === 'ok') {
          navigate('/system-home-page');
        } else {
          console.error('Login failed:', res.data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
  };

  const changes = (e) => {
    setdataform({ ...dataform, [e.target.name]: e.target.value });
  }

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
                <Button
                  type="submit"
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
