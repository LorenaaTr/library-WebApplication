import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './displaybooks.css';
import { Grid, Card, CardContent, CardMedia, Typography, Link, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayBooks = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/book/getBooks')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error(error));
  }, []);

  console.log(books);

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return {};
    }
  }

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000, 
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSaveClick = (book) => {
    const token = localStorage.getItem('token');
  
    if (token) {
      const decodedToken = decodeToken(token);
      const requestData = {
        username: decodedToken.username,  
        book: {
          user: book.user,
          title: book.title,
          author: book.author,
          description: book.description,
          category: book.category,
          isbn: book.isbn,
          price: book.price,
          image: book.image,
        },
      };
  
      axios.post(`http://localhost:5000/user/userbook`, requestData)
        .then(response => {
          console.log(response.data);
          notify("Book saved successfully")
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  
  
  


  return (
    <>
      <SystemHeader />
      <SystemSidebar />
      <div className="home">
        <div className="components comp">
          <h1>EXPLORE BOOKS</h1>
          <div className='grid'>
            <Grid container spacing={2} justifyContent="center">
              {books.map((book) => (
                <Grid item key={book._id} xs={12} sm={6} md={4}>
                    <Card style={{ width: '200px', height: '530px', margin: '0 10px' }}>
                      <CardMedia
                        component="img"
                        alt={book.title}
                        height="300"
                        image={book.image}
                        style={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {book.title}
                        </Typography>
                        <Typography color="textSecondary">{book.author}</Typography>
                        <Typography color="textSecondary">{book.price}$</Typography>
                        <Typography color="textSecondary">{book.category}</Typography>
                        <Typography color="textSecondary">{book.user.name}</Typography>
                        <Button onClick={() => handleSaveClick(book)} variant="contained" color="primary" style={{marginTop:"30px"}}>
                          Save
                        </Button>
                      </CardContent>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayBooks;
