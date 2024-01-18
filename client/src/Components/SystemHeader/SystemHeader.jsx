import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './systemheader.css'

const SystemHeader = () => {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [bookMenuAnchorEl, setBookMenuAnchorEl] = useState(null);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books from the API 
    axios.get('http://localhost:5000/book/getbooks')
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleBookMenuOpen = (event) => {
    setBookMenuAnchorEl(event.currentTarget);
  };

  const handleBookMenuClose = () => {
    setBookMenuAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  
    // Open the book menu when there is a search query
    if (event.target.value) {
      handleBookMenuOpen(event);
    } else {
      handleBookMenuClose();
    }
  };
  
  const filteredBooks = books.filter((book) =>
    book.user && book.user.name && book.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category && book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.isbn && book.isbn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='systemheader'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div id='searchitem'>
        <div className="search">
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
          onChange={handleSearchChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Menu
          anchorEl={bookMenuAnchorEl}
          open={Boolean(bookMenuAnchorEl)}
          onClose={handleBookMenuClose}
        >
          {filteredBooks.map(book => (
            <MenuItem key={book._id} onClick={handleBookMenuClose} style={{width:600}}>

              <Link to={`/books/${book.slug}`} style={{ textDecoration: "none", color: "black" }}>
                <img src={book.image} alt={book.title} style={{ maxWidth: '150px', maxHeight: '150px' }} /><p style={{marginTop:-100, marginBottom:80, marginLeft:150}}>{book.title}</p>
              </Link>
            </MenuItem>
          ))}
        </Menu>
        </div>
      </div>
      <Button id='useraccount' onClick={handleUserMenuOpen}>
        <div className="user-icon">
          <FontAwesomeIcon style={{ color: "black" }} icon={faUser} />
        </div>
      </Button>
      <Menu
        anchorEl={userMenuAnchorEl}
        open={Boolean(userMenuAnchorEl)}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={handleUserMenuClose}>
          <Link to='/useraccount' style={{ textDecoration: "none", color: "black" }}>User Account</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Log Out</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SystemHeader;
