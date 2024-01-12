import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ onBookAdded }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    isbn: '',
    price: '',
    imageUrl: null,
  });

  // const [category, setcategory] = useState('');

  const navigate = useNavigate();

  const categoryOptions = [
    'Fiction',
    'Non-Fiction',
    'Classics',
    'Children\'s Books',
    'Cook',
    'Crime',
    'Romance',
    'Philosophy',
    'Religious and Spiritual',
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setNewBook((prevState) => ({
        ...prevState,
        [name]: e.target.files[0], 
      }));
    } else {
      setNewBook((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/book/addbook", newBook)
    .then((res) => {
      console.log('Response:', res.data);
      navigate('/home-dashboard');
    })
    .catch((error) => {
      console.error('Error:', error.response.data);
    });
  };


  return (
    <div className="add-book-container">
      <h1 className="add-book-header">Add New Book</h1>

      <Link to="/book-dashboard" className="back-to-dashboard-link">Back to Dashboard</Link>

      <form method="post" className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={newBook.title} onChange={handleChange} />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value={newBook.author} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={newBook.description} onChange={handleChange} required />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={newBook.category} onChange={handleChange} required>
          <option value="" disabled>Select a Category</option>
          {categoryOptions.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label htmlFor="isbn">ISBN:</label>
        <input type="text" id="isbn" name="isbn" value={newBook.isbn} onChange={handleChange} />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={newBook.price} onChange={handleChange} required />

        <label htmlFor="imageUrl">Image Upload:</label>
        <input type="file" id="imageUrl" name="imageUrl" onChange={handleChange} accept="image/*" required />

        <button type="submit" onChange={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
