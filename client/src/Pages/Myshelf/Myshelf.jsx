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
      await axios.delete(`http://localhost:5000/book/deletebook/${bookId}`);
      notify('Book deleted successfully');
      axios.get(`http://localhost:5000/book/getbooks/${user}`)
        .then(response => setBooks(response.data.data))
        .catch(error => console.error('Error fetching books:', error));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleOrderClick = () => {
    // Add your order logic here
    // This function will be called when the "Order" button is clicked
    console.log('Order button clicked!');
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
                        <Link to={`/edit-book/${book._id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <DeleteIcon onClick={() => handleDelete(book._id)} />
                      </IconButton>
                      <IconButton>
                        <Link to={`/singlebook/${book._id}`}>
                          <ArrowForwardIcon />
                        </Link>
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
