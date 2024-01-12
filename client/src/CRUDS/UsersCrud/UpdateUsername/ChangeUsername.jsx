import React from 'react';
import SystemHeader from '../../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../../Components/SystemSidebar/SystemSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './changeusername.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


const ChangeUsername = () => {
  const { id } = useParams();
  console.log('ID:', id);
  const [dataForm, setDataForm] = useState({
    newUsername: ""
  });

  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    console.log('Request Payload:', dataForm); 
    axios.put(`http://localhost:5000/user/updateUsername/${id}`, dataForm) // Use the id from useParams
      .then((res) => {
        console.log('res', res);
        alert("Username changed succesfully")
        navigate('/useraccount'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('dataForm', dataForm);

  const changes = (e) => {
    setDataForm({ ...dataForm, newUsername: e.target.value });
    console.log('Data Form Changes:', dataForm);
  }

  return (
    <>
      <SystemHeader />
      <SystemSidebar />
      <div className="userchangeusername">
        <div className="changeusernamecontainer">
          <form className="usernamedata" onSubmit={handleButtonClick}>
            <div className="usericon">
              <FontAwesomeIcon style={{ color: 'black', height: 'auto', maxWidth: '80px' }} icon={faUser} />
            </div>
            <div className="datas">
              <div className="username">
              <input
                  className="new-password"
                  type="text"
                  placeholder="New Username"
                  value={dataForm.newUsername}
                  name="newUsername"
                  onChange={(e) => changes(e)}
                />
              </div>
              <div className="editbutton">
                <button type="button" onClick={handleButtonClick}>
                  Change Username
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeUsername;
