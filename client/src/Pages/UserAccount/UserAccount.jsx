import React, { useState, useEffect } from 'react';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './useracc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const [dataform, setdataform] = useState({});
  const [isadmin, setisadmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
  
    axios.post("http://localhost:5000/user/userdata", { token })
      .then((response) => {
        const data = response.data;
        console.log(data, "userData");
        if (data.data.role === "Admin") {
          setisadmin(true);
        }
        setdataform(data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          window.localStorage.clear();
          navigate('/login'); 
        }
      });
  }, [navigate]);
  
  return (
    <>
      <SystemHeader />
      <SystemSidebar />
      <div className="useracc">
        <div className="acccontainer">
          <div className='userdata'>
            <div className='usericon'>
            {isadmin ? (
            <>
            <FontAwesomeIcon style={{ color: "black", height: "auto", maxWidth: "80px" }} icon={faUser} />
            <h3>{dataform.role}</h3> 
            </>
             ) : (
            <FontAwesomeIcon style={{ color: "black", height: "auto", maxWidth: "80px" }} icon={faUser} />
            )}
            </div>
            <div className='data'>
              <div className="usersdata">
                <p>{dataform.username}</p>
                <p>*********</p> 
                <p>{dataform.name} </p>
                <p>{dataform.surname}  </p>
                <p>{dataform.birthday}  </p>
                <p>{dataform.email} </p>
                <p>{dataform.city} </p>
              </div>
              <div className="editicon">
                <Link to='/updateusername'><EditIcon className='icon' /></Link>
                <Link to='/updatepassword'><EditIcon className='icon' /></Link>
                <Link to='/updatename'><EditIcon className='icon' /></Link>
                <Link to='/updatesurname'><EditIcon className='icon' /></Link>
                <Link to='/updatebirthday'><EditIcon className='icon' /></Link>
                <Link to='/updateemail'><EditIcon className='icon' /></Link>
                <Link to='/updatecity'><EditIcon className='icon' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
