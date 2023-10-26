import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/logo.png';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='elements'>
            <ul>
                <li><Link to='/login'>LOG IN</Link></li>
                <li>ICON</li>
                <div className='menubox'>
                    <li><Link to='/menu'>MENU</Link></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar