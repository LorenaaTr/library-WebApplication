import React from 'react'
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changebirthday.css'

const ChangeBirthday = () => {
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
                <input type="text" placeholder='Birthday' disabled={true}/>
                <input type="text" placeholder='New Birthday' />
              </div>
              <div className="editbutton">
                <button type='submit'>Change Birthday</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeBirthday