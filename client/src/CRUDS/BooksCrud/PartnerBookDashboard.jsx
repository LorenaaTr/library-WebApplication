import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PartnerWebHeader from '../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../Components/PartnerSidebar/PartnerSidebar';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useParams } from 'react-router-dom';

const PartnerBookDashboard = () => {
  const {user} = useParams();
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/book/getbooksbyuser/${user}`)
    .then(response => {
      console.log('API Response:', response.data);
      setBooks(response.data);
    })
    .catch(error => console.error('Error fetching books:', error));
  }, [user]);

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
      axios.get('http://localhost:5000/book/getbooks')
        .then(response => setBooks(response.data.books))
        .catch(error => console.error('Error fetching books:', error));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books && books.filter((book) =>
    book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category && book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.isbn && book.isbn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PartnerWebHeader />
      <PartnerSidebar />
      <div className='complaintspage'>
        <div className='complaintcontainer'>
          <TextField
            className='searcher'
            label="Search by title, author, category, ISBN, or description"
            variant="outlined"
            fullWidth
            margin="normal"
            style={{ marginTop: 100, marginLeft: -130 }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button
            id='buttonadd'
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to={`/add-book/${user}`}
            style={{ marginTop: 20, marginLeft: -130 }}
          ></Button>
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
              {filteredBooks && filteredBooks.map((book) => (
                  <TableRow key={book._id}>
                    <TableCell> {book.user && book.user.name ? book.user.name : 'N/A'}</TableCell>
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
        </div>
      </div>
    </>
  );
}

export default PartnerBookDashboard;
