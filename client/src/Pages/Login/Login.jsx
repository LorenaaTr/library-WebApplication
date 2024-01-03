import React, { useState,  useContext  } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { useUsersContext } from '../../Redux/Products/Products';

const Login = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    username:"",
    password:""
  })
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { state, dispatch } = useUsersContext();

  const handleLogin = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/authentification/login", dataform)
      .then((res) => {
        console.log('Response:', res.data);
        if (res.data.status === 'ok') {
          dispatch({
            type: "USER",
            payload: { username: dataform.username } // Use payload key
          });
          localStorage.setItem("user", dataform.username);
          navigate('/system-home-page');
        } else {
          console.error('Login failed:', res.data.error);
          // Handle login failure (e.g., show an error message)
        }
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
        // Handle network or server errors
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
