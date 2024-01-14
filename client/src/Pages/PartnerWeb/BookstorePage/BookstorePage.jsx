import React from 'react'
import PartnerHeader from '../../../Components/PartnerWebHeader/PartnerHeader'
import PartnerSidebar from '../../../Components/PartnerSidebar/PartnerSidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
const BookstorePage = () => {
  const [dataform, setdataform] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
  
    axios.post("http://localhost:5000/partner/partnerdata", { token })
      .then((response) => {
        const data = response.data;
        console.log(data, "PartnerData");
        setdataform(data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        window.localStorage.clear();
        navigate('/login');
        if (error.response && error.response.status === 401) {
          window.localStorage.clear();
          navigate('/login'); 
        }
      });
  }, [navigate]);
  return (
    <>
    <PartnerHeader/>
    <PartnerSidebar/>
    <div className="useracc">
        <div className="acccontainer">
          <div className='userdata'>
            <div className='usericon'>
            <LocalLibraryIcon style={{ color: "black", height: "auto", fontSize:"100" }}  />
            </div>
            <div className='data'>
              <div className="usersdata">
                <p>{dataform.username}</p>
                <p>*********</p> 
                <p>{dataform.name} </p>
                <p>{dataform.ceo}  </p>
                <p>{dataform.city}  </p>
                <p>{dataform.state} </p>
                <p>{dataform.street} </p>
                <p>{dataform.zipcode} </p>
              </div>
              <div className="editicon">
                <Link to={`/updateusername/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updatepassword/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updatename/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updateceo/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updatestate/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updatestreet/${dataform._id}`}><EditIcon className='icon' /></Link>
                <Link to={`/updatezipcode/${dataform._id}`}><EditIcon className='icon' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookstorePage