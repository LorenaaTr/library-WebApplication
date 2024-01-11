import React from 'react'
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changepassword.css'
const ChangePassword = () => {
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className="userchangeusername">
        <div className="changeusernamecontainer">
          <div className='usernamedata'>
            <div className='usericon'>
            <FontAwesomeIcon style={{ color: "black", height: "auto", maxWidth: "80px" }} icon={faUser} />
            </div>
            <div className='datas'>
              <div className="username">
                <input type="text" placeholder='Current Password'/>
                <input type="text" placeholder='New Password' />
              </div>
              <div className="editbutton">
                <button type='submit'>Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword