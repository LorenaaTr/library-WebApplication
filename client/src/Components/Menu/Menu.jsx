import React from 'react'
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
        <div className='contextt' style={{marginTop:'150px', marginLeft:'230px',display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize:'30px' }}>HOME</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/privacyplocy' style={{ textDecoration: 'none', color: 'white', fontSize:'30px'  }}>PRIVACY POLICY</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/ourbooks' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>OUR BOOKS</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/cookiepolicy' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>COOKIE POLICY</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/ourpartners' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>OUR PARTNERS</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/joinasereader' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>JOIN AS A READER</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/ourservices' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>OUR SERVICES</Link>
                </Grid>
                <Grid item xs={8} style={{marginTop:'20px'}}>
                    <Link to='/joinasapartner' style={{ textDecoration: 'none', color: 'white',fontSize:'30px'  }}>JOIN AS A PARTNER</Link>
                </Grid>
            </Grid>
        </Box>
        <p>Copyright © 2023 Shelf Share Society | Copyright © 2023 Shelf Share Partners , LLC. All rights reserved</p>
        </div>
    </div>
  )
}

export default Menu