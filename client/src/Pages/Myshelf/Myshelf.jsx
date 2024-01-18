import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MyShelf = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [order, setorder] = useState('');

  const user = localStorage.getItem('user');
  console.log('User:', user);

  useEffect(() => {

    if (!user) {
      console.error('User not found in localStorage');
      return;
    }

    axios.get(`http://localhost:5000/user/getuserbooks/${user}`)
    .then(response => {
      console.log('API Response:', response.data);
      setBooks(response.data);
    })
    .catch(error => console.error('Error fetching books:', error));
  }, []);

  const notify = (message) => {
    toast.success(message, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/user/deleteuserbook/${bookId}`);
      notify('Book deleted successfully');
      axios.get(`http://localhost:5000/book/getuserbooks/${user}`)
        .then(response => setBooks(response.data))
        .catch(error => console.error('Error fetching books:', error));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const fetchUserBooks = () => {
    axios.get(`http://localhost:5000/user/getuserbooks/${user}`)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const handleOrderClick = async () => {
    try {
      console.log('Fetching user books...');
      const response = await axios.get(`http://localhost:5000/user/getuserbooks/${user}`);
      console.log('User books:', response.data);
  
      const userBooks = response.data;
  
      const orderData = {
        user: localStorage.getItem('user'),
        books: userBooks.map(book => ({
          book: book._id,
          quantity: 1,
        })),
        totalAmount: 0,
        shippingAddress: {
          address: '123 Street',
          city: 'City',
          houseNumber: '1',
        },
      };
  
      axios.post('http://localhost:5000/orders/addorder', orderData)
        .then((res) => {
          console.log('Order response:', res);
          if (res ) {
            notify("Order placed successfully!");
            console.log('Response:', res.data);
          } else {
            console.error('Invalid response structure:', res);
            notify("Error placing order. Please try again.");
          }
        })
        .catch((error) => {
          console.error('Error placing order:', error);
          notify("Error placing order. Please try again.");
        });
    } catch (error) {
      console.error('Error fetching user books:', error);
    }
  };
  
  
  
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <>
      <SystemHeader/>
      <SystemSidebar/>
      <div className='complaintspage'>
        <div className='complaintcontainer'>
          <TableContainer component={Paper} id='tablecontainer'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Library</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>ISBN</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {books && books.map((book) => (
                  <TableRow key={book._id}>
                    <TableCell> {book && book.user ? book.user.name : 'N/A'}</TableCell>
                    <TableCell>{book.image && <img src={book.image} alt={book.title} style={{ maxWidth: '150px', maxHeight: '150px' }} />}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.category}</TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.description}</TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteIcon onClick={() => handleDelete(book._id)} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />} 
            onClick={handleOrderClick}
            style={{marginBottom:100, marginLeft:-600, maxWidth:200}}
          >
            Order
          </Button>
        </div>
      </div>
    </>
  );
}

export default MyShelf;
