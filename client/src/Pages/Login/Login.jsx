import React, { useState,  useContext , useEffect } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { useUsersContext } from '../../Redux/Products/Products';


const Login = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    username: "",
    password: "",
  });

  const { state, dispatch } = useUsersContext();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/authentification/login", dataform)
      .then((response) => {
        const data = response.data;
        console.log('Response:', data);
        if (data.status === 'ok') {
          dispatch({
            type: "TOKEN",
            payload: { token: data.data.token },
          });

          dispatch({
            type: "USER",
            payload: { username: dataform.username },
          });

          dispatch({
            type: "ROLE",
            payload: { role: data.data.role },
          });

          localStorage.setItem("token", data.data);
          localStorage.setItem("user", dataform.username);
          localStorage.setItem("role", data.role);

          const role = localStorage.getItem("role");

          if (role === "Admin") {
            navigate('/admin-panel');
          } else if (role === "User") {
            navigate('/system-home-page');
          } else {
            console.error('Invalid user role:', role);
      }
        } else {
          console.error('Login failed:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error.response.data);
      });
  };

  const changes = (e) => {
    setdataform({ ...dataform, [e.target.name]: e.target.value });
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
                  You're a Partner?
                  <Link to="/loginpartner">Log in here</Link>
                </p>
                <p className='joinus'>
                  Don't have an account yet?
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