import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookDashboard.css'
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import PartnerWebHeader from '../../Components/PartnerWebHeader/PartnerHeader';
import PartnerSidebar from '../../Components/PartnerSidebar/PartnerSidebar';


const BookDashboard = () => {
  const [books, setBooks] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/book/getBooks')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteClick = (book) => {
    setSelectedBook(book);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      // Make an API request to delete the book
      await axios.delete(`http://localhost:5000/book/deletebook/${selectedBook._id}`);

      // Update the books list after deletion
      setBooks(prevBooks => prevBooks.filter(b => b._id !== selectedBook._id));

      console.log('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting book:', error);
    } finally {
      // Close the delete modal
      setDeleteModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    // Close the delete modal without deleting the book
    setDeleteModalOpen(false);
  };

  return (
    <>
      <PartnerWebHeader />
      <PartnerSidebar />
      <div className="home">
        <div className="components comp">
          <div className="book-dashboard-container">
            <h1 className="dashboard-header">Book Dashboard</h1>

            <Link to="/create-book" className="add-book-button">
              <Button className="link1">Add New Book</Button>
            </Link>

          <div className="book-table-container">
          <Table className=' book-table'>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>ISBN</TableCell>
                  <TableCell>Library</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map(book => (
                  <TableRow key={book._id}>
                    <TableCell>
                      <Link to={`/book/${book.slug}`}>
                        <img src={book.image} alt={book.title} className="book-image" />
                      </Link>
                    </TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.description}</TableCell>
                    <TableCell>{book.category}</TableCell>
                    <TableCell>{book.price}</TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.libraryName}</TableCell>
                    <TableCell>
                      <Link to="#" className="edit-link">
                        <span>Edit</span>
                      </Link>{' '}
                      |{' '}
                      <Link to="#" className="delete-link">
                        <span onClick={() => handleDeleteClick(book)}>Delete</span>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          </div>
        </div>
      </div>

      <Dialog open={isDeleteModalOpen} onClose={handleCancelDelete}>
        <DialogTitle className="title-del">Confirm Deletion</DialogTitle>
        <ErrorIcon className="error-icon" style={{ fontSize: '60px' }} />
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>No, Cancel</Button>
          <Button onClick={handleConfirmDelete} style={{ color: 'red' }} autoFocus>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookDashboard;
