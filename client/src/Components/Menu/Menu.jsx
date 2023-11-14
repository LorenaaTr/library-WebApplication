import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Menu = () => {
  return (
    <div className='menu'>
      <div className='button'>
        <button><Link to='/'>MENU</Link></button>
      </div>
      <div className='menucontext'>
      <div className='contextt'>
        <Box sx={{ flexGrow: 1 }}>
          <div className='rootdiv' >
            <div className='firstdiv' >
              <Grid container spacing={2} columns={16}>
                <Grid item xs={16} >
                  <Link to="/">HOME</Link>
                  <Link to='/ourbooks'>OUR BOOKS</Link>
                  <Link to='/ourpartners'>OUR PARTNERS</Link>
                  <Link to='/ourservices'>OUR SERVICES</Link>
                </Grid>
              </Grid>
            </div>
            <div className='seconddiv' >
              <Grid container spacing={2} columns={16}>
                <Grid item xs={16}>
                  <Link to='/privacypolicy'>PRIVACY POLICY</Link>
                  <Link to='/cookiepolicy'>COOKIE POLICY</Link>
                  <Link to='/joinasereader'>JOIN AS A READER</Link>
                  <Link to='/joinasapartner'>JOIN AS A PARTNER</Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Box>
      </div>
      <div className='menufooter'>
        <p>Copyright © 2023 Shelf Share Society | Copyright © 2023 Shelf Share Partners, LLC. All rights reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Menu;
