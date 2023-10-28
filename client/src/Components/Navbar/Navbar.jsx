import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Navbar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

//   const toggleSearch = () => {
//     setSearchVisible(!isSearchVisible);
//   };
  
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <div className='elements'>
            <ul>
                <li><Link to='/login'>LOG IN</Link></li>
                {/* <li className={`search-icon ${isSearchVisible ? 'active' : ''}`}>
                    <div className='icon-search' onClick={toggleSearch}>
                    <FontAwesomeIcon className='icon' icon={faSearch} />
                    </div>
                    <input
                    type="text"
                    id="searchInput"
                    placeholder="Search"
                    className={isSearchVisible ? 'active' : ''}
                    />
                </li> */}
                <div className='menubox'>
                    <li><Link to='/menu'>MENU</Link></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar