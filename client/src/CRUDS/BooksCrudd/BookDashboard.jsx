import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BookDashboard.css'; // Import the CSS file

const BookDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from the server
    axios.get('http://localhost:5000/book/addBook')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="book-dashboard-container">
      <h1 className="dashboard-header">Book Dashboard</h1>

      {/* Add Book button */}
      <Link to="/add-book" className="add-book-button">Add Book</Link>

      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Price</th>
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
                <img
                  src={book.imageUrl}
                  alt={`Cover of ${book.title}`}
                  className="book-image"
                />
              </td>
              <td>
                <Link to={`/edit/${book._id}`} className="edit-link">Edit</Link> |{' '}
                <Link to={`/delete/${book._id}`} className="delete-link">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookDashboard;
