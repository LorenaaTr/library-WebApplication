// BookDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookDashboard.css';
import ErrorIcon from '@mui/icons-material/Error';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

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
      <SystemHeader />
      <SystemSidebar />
      <div className="home">
        <div className="components comp">
          <div className="book-dashboard-container">
            <h1 className="dashboard-header">Book Dashboard</h1>

            <Link to="/create-book" className="add-book-button">
              <Button className='link1'>Add New Book</Button>
            </Link>

            <table className="book-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>ISBN</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book._id}>
                     <td>
                      <Link to={`/book/${book.slug}`}>
                        <img
                          src={book.image}
                          alt={book.title}
                          className="book-image"
                        />
                      </Link>
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.description}</td>
                    <td>{book.category}</td>
                    <td>{book.price} </td>
                    <td>{book.isbn}</td>
                    <td>
                      <Link to={`/edit-book/${book._id}`} className="edit-link">Edit</Link> |{' '}
                      <Link to="#" className="delete-link">
                        <span onClick={() => handleDeleteClick(book)}>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
      <Dialog open={isDeleteModalOpen} onClose={handleCancelDelete}>
        <DialogTitle className='title-del'>Confirm Deletion</DialogTitle>
        <ErrorIcon className='error-icon' style={{ fontSize: '60px' }} />
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>No, Cancel</Button>
          <Button onClick={handleConfirmDelete}  style={{ color: 'red' }} autoFocus>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookDashboard;
