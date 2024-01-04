import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './systemheader.css';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const SystemHeader = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
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
              color: 'black',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black', 
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
      <Button id='useracc' onClick={handleUserMenuOpen}>
        <div className="user-icon">
        <FontAwesomeIcon style={{ color: "black" }} icon={faUser} />
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={handleUserMenuClose}>
          <Link to='/useraccount' style={{textDecoration:"none"}}>User Account</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Link to='/login' style={{textDecoration:"none"}}>Log Out</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SystemHeader;
