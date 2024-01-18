import React from 'react'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './booksinglepage.css'

const BookSinglePage = () => {
    const { id } = useParams();
    const [bookdata, setbookdata] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/book/getbook/${id}`)
        .then((response) => {
          console.log(response.data.book); 
          setbookdata(response.data.book);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  
    return (
      <>
        <SystemHeader />
        <SystemSidebar />
        <div className="home">
          <div className="components comp">
            <div className='card'>
              {bookdata && (
                <Card style={{ width: '200px', height: '435px', marginLeft: 1000 }}>
                  <CardMedia
                    component="img"
                    alt={bookdata.title}
                    height="300"
                    image={bookdata.image}  
                    style={{ objectFit: 'cover'}}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {bookdata.title}
                    </Typography>
                    <Typography color="textSecondary">{bookdata.author}</Typography>
                    <Typography color="textSecondary">{bookdata.price}</Typography>
                    <Typography color="textSecondary">{bookdata.category}</Typography>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default BookSinglePage;
  