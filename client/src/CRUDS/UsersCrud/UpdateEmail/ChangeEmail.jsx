import React from 'react'
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changeemail.css'

const ChangeEmail = () => {
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
                <input type="text" placeholder='E-mail' disabled={true}/>
                <input type="text" placeholder='New E-mail' />
              </div>
              <div className="editbutton">
                <button type='submit'>Change E-mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeEmail