import React from 'react'
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changeemail.css'
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import axios from 'axios';
const ChangeEmail = () => {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    newEmail: ""
  });

  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    console.log('Request Payload:', dataForm); 
    axios.put(`http://localhost:5000/user/updateEmail/${id}`, dataForm) // Use the id from useParams
      .then((res) => {
        console.log('res', res);
        alert("E-mail changed succesfully")
        navigate('/useraccount'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('dataForm', dataForm);

  const changes = (e) => {
    setDataForm({ ...dataForm, newEmail: e.target.value });
    console.log('Data Form Changes:', dataForm);
  }
  return (
    <>
    <SystemHeader/>
    <SystemSidebar/>
    <div className="userchangeusername">
        <div className="changeusernamecontainer">
          <form className='usernamedata' onSubmit={handleButtonClick}>
            <div className='usericon'>
            <FontAwesomeIcon style={{ color: "black", height: "auto", maxWidth: "80px" }} icon={faUser} />
            </div>
            <div className='datas'>
              <div className="username">
              <input
                  className="new-password"
                  type="text"
                  placeholder="New Email"
                  value={dataForm.newEmail}
                  name="newEmail"
                  onChange={(e) => changes(e)}
                />
              </div>
              <div className="editbutton">
                <button type='submit'>Change E-mail</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangeEmail