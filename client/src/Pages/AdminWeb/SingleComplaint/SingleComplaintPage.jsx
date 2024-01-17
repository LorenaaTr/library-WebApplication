import React, { useEffect, useState } from 'react';
import AdminHeader from '../../../Components/AdminHeader/AdminHeader';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import './singlepage.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const SingleComplaintPage = () => {
  const { id } = useParams();
  const [complaintdata, setcomplaintdata] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/complaint/getcomplaintbyid/${id}`)
      .then((response) => {
        setcomplaintdata(response.data);
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

  const handleDelete = async (complaintId) => {
    try {
      await axios.delete(`http://localhost:5000/complaint/deletecomplaint/${complaintId}`);
      notify('Complaint deleted successfully');
      navigate('/admin-complaints')
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer'>
          <Box id='box'>
            <Paper style={{ marginBottom: '70px', padding: '70px' }}>
              {complaintdata && complaintdata.data && (
                <>
                  <Typography variant="h6">User: {complaintdata.data.user?.name}</Typography>
                  <Typography variant="subtitle1">Title: {complaintdata.data.title} </Typography>
                  <Typography variant="body1">Message: {complaintdata.data.message} </Typography>
                  <Typography variant="body2" style={{padding:50,display:"flex", justifyContent:"center"}}>
                    <Button color="primary"><Link to={`/updatecomplaint/${id}`} style={{textDecoration:"none"}}>Edit</Link></Button>
                    <Button color="error" onClick={() => handleDelete(id)}>Delete</Button>
                  </Typography>
                </>
              )}
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SingleComplaintPage;
