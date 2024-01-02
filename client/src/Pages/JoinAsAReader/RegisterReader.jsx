import React, { useState } from 'react';
import { Grid, TextField, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './registerreader.css';
import axios from 'axios';

const RegisterReader = () => {
  const navigate = useNavigate();
  const [dataform, setdataform] = useState({
    name:"",
    surname:"",
    email:"",
    city:"",
    birthday:"",
    password:""
  });

  const [confirmpassword, setconfirmpassword] = useState("");
  

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
            <Typography component="h1" variant="h5" className="login-text">
              REGISTER
            </Typography>
            <form className="login-form">
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
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit-button"
                style={{backgroundColor:"#D32F2F"}}
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
