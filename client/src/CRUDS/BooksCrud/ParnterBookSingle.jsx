import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Paper, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import PartnerHeader from '../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../Components/PartnerSidebar/PartnerSidebar';

const PartnerBookSingle = () => {
  const { id } = useParams();
  const [bookdata, setbookdata] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/getbook/${id}`)
      .then((response) => {
        setbookdata(response.data);
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

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/book/deletebook/${bookId}`);
      notify('Book deleted successfully');
      navigate('/admin-books')
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <PartnerHeader />
      <PartnerSidebar />
      <div className='singlepage'>
        <div className='singlepagecontainer'>
          <Box id='box'>
            <Paper style={{ marginBottom: '70px', padding: '70px' }}>
              {bookdata && bookdata.book && (
                <>
                  <Typography variant="h6">
                        <img src={bookdata.book.image} alt="Book Cover" />
                  </Typography>
                  <Typography variant="h6">User: {bookdata?.book?.user?.name || 'N/A'}</Typography>
                  <Typography variant="subtitle1">Title:{bookdata?.book?.title || 'N/A'} </Typography>
                  <Typography variant="body1">Description:  {bookdata?.book?.description || 'N/A'}  </Typography>
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

export default PartnerBookSingle;
