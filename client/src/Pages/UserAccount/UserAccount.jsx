import React from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader'
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar'
import './useracc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const UserAccount = () => {
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className="useracc">
      <div className="acccontainer">
        <div className='userdata'>
          <div className='usericon'>
          <FontAwesomeIcon style={{ color: "black" }} icon={faUser} />
          </div>
          <div>
            <tr>User's Username</tr>
            <tr>User's Password</tr>
            <tr>User's Name</tr>
            <tr>User's Surname</tr>
            <tr>User's Birthday</tr>
            <tr>User's Email</tr>
            <tr>User's City</tr>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserAccount