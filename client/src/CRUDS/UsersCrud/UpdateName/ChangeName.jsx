import React from 'react'
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changename.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router';
const ChangeName = () => {
  const { id } = useParams();

  const [dataForm, setDataForm] = useState({
    newName: '',
  });

  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    console.log('Request Payload:', dataForm); 
    axios.put(`http://localhost:5000/user/updateName/${id}`, dataForm) 
      .then((res) => {
        console.log('res', res);
        alert("Name changed succesfully")
        navigate('/useraccount'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const changes = (e) => {
    setDataForm({ ...dataForm, newName: e.target.value });
  };
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
                  type="text"
                  placeholder="New Name"
                  value={dataForm.newName}
                  name="newName"
                  onChange={(e) => changes(e)}
                />
              </div>
              <div className="editbutton">
                <button type='submit'>Change Name</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangeName