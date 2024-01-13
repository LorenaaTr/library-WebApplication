import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './BookDashboard.css'; 
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import { Button } from '@mui/material';

const BookDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/book/getBooks')
      .then(response => setBooks(response.data.books))  // Assuming the data is an object with a books property
      .catch(error => console.error(error));
  }, []);

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
                  <th>Title</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>ISBN</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.category}</td>
              <td>{book.price} </td>
              <td>{book.isbn}</td>
              <td>
                <Link to={`/book/${book.slug}`}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/edit-book/${book._id}`} className="edit-link">Edit</Link> |{' '}
                <Link to={`/delete-book/${book._id}`} className="delete-link">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
    </div>
  
  </>
  );
};

export default BookDashboard;