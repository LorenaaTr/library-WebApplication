import React, { useEffect, useState } from 'react';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import './singleuser.css'
const SingleUser = () => {
  
  const { id } = useParams();
  const [userdata, setuserdata] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/getUserByid/${id}`)
      .then((response) => {
        console.log(response.data); 
        setuserdata(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000, 
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/user/deleteuser/${userId}`);
      notify('User deleted successfully');
      navigate('/admin-users')
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='singlepage'>
        <div className='singlepagecontainer'>
        <Box id='box'>
        <Paper style={{ marginBottom: '70px', padding: '70px', backgroundColor: '#f0f0f0' }}>
            {userdata && userdata.data && (
                <>
                <Typography variant="h6">Username: {userdata.data.username}</Typography>
                <Typography variant="subtitle1">Password: {userdata.data.password} </Typography>
                <Typography variant="body1">Name: {userdata.data.name} </Typography>
                <Typography variant="body1">Surname: {userdata.data.surname} </Typography>
                <Typography variant="body1">E-mail: {userdata.data.email} </Typography>
                <Typography variant="body1">City: {userdata.data.city} </Typography>
                <Typography variant="body1">Birthday: {userdata.data.birthday} </Typography>
                <Typography variant="body2" style={{ padding: 50, display: "flex", justifyContent: "center" }}>
                    <Button color="primary"><Link to={`/updateuser/${id}`} style={{ textDecoration: "none" }}>Edit</Link></Button>
                    <Button color="error" onClick={() => handleDelete(id)}>Delete</Button>
                </Typography>
                </>
            )}
            </Paper>
          </Box>
        </div>
    </div>
    </>
  )
}

export default SingleUser