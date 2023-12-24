import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './systemheader.css';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SystemHeader = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className='systemheader'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`search ${isSearchVisible ? 'active' : ''}`}>
      <TextField
        sx={{
            '& label.Mui-focused': {
              color: 'red',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red',
            },
          }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      </div>
      <div className='useracc'>
        <Link to='/useraccount'>
          <div className="user-icon">
            <FontAwesomeIcon style={{color:"black"}} icon={faUser} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SystemHeader;
