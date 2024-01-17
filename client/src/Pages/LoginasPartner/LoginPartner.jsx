import React, { useState,  useContext  } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './loginpartner.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { useUsersContext } from '../../Redux/Products/Products';

const LoginPartner = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    username:"",
    password:""
  })
 

  const { state, dispatch } = useUsersContext();

  const handleLogin = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/partner/loginpartner", dataform)
    .then((res) => {
      console.log('Response:', res.data);
      if (res.data.status === 'ok') {
        dispatch({
          type: "TOKEN",
          payload: { token: res.data.data }
        });

        dispatch({
          type: "USER",
          payload: { username: dataform.username }
        });

        dispatch({
          type: "ROLE",
          payload: { role: res.data.role },
        });

        localStorage.setItem("token", res.data.data);
        localStorage.setItem("user", dataform.username);
        localStorage.setItem("role", res.data.role);
        
        navigate('/partner-home-page');
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
                label="Library's Username"
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
                  You're a User?
                  <Link to="/login">Log in here</Link>
                </p>
                <p className='joinus'>
                  Not a partner yet?
                  <Link to="/joinasapartner">Sign up here</Link>
                </p>
              </form>
            </div>
          </div>
        </Grid>
    </div>
  );
};

export default LoginPartner;
