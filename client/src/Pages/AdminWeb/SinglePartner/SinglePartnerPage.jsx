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

const SinglePartnerPage = () => {
  const { id } = useParams();
  const [partnerdata, setpartnerdata] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/partner/allpartners/${id}`)
      .then((response) => {
        setpartnerdata(response.data);
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

  const handleDelete = async (partnerId) => {
    try {
      await axios.delete(`http://localhost:5000/partner/deletepartner/${partnerId}`);
      notify('Partner deleted successfully');
      navigate('/admin-partners')
    } catch (error) {
      console.error('Error deleting book:', error);
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
              {partnerdata && partnerdata.data && (
                <>
                  <Typography variant="h6">
                        <img src={partnerdata.data.image} alt="Book Cover" />
                  </Typography>
                  <Typography variant="h6">Library: {partnerdata?.data.name || 'N/A'}</Typography>
                  <Typography variant="subtitle1">CEO:{partnerdata?.data.ceo || 'N/A'} </Typography>
                  <Typography variant="body1">City:  {partnerdata?.data.city || 'N/A'}  </Typography>
                  <Typography variant="subtitle1">State:{partnerdata?.data.state || 'N/A'} </Typography>
                  <Typography variant="body1">Street:  {partnerdata?.data.street || 'N/A'}  </Typography>
                  <Typography variant="body2" style={{padding:50,display:"flex", justifyContent:"center"}}>
                    <Button color="primary"><Link to={`/updatebook/${id}`} style={{textDecoration:"none"}}>Edit</Link></Button>
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

export default SinglePartnerPage;
