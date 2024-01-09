import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    imageUrl: '', // Store the selected file as a base64-encoded string
    title: '',
    description: '',
    category: '',
    isFree: true,
    isbn: '',
    author: '',
    contentAttribute: '',
  });

  const handleInputChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected file and convert it to a base64-encoded string
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook({
          ...newBook,
          imageUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBook = () => {
    axios.post('http://localhost:5000/api/books', newBook)
      .then(response => {
        console.log('Book added:', response.data);
        navigate('/book-list');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>

      <label>Title: <input type="text" name="title" value={newBook.title} onChange={handleInputChange} /></label><br />
      <label>Description: <input type="text" name="description" value={newBook.description} onChange={handleInputChange} /></label><br />
      <label>Category: <input type="text" name="category" value={newBook.category} onChange={handleInputChange} /></label><br />
      <label>Status:
        <select name="isFree" value={newBook.isFree ? 'Free' : 'Buy'} onChange={handleInputChange}>
          <option value="true">Free</option>
          <option value="false">Buy</option>
        </select>
      </label><br />
      <label>ISBN: <input type="text" name="isbn" value={newBook.isbn} onChange={handleInputChange} /></label><br />
      <label>Author: <input type="text" name="author" value={newBook.author} onChange={handleInputChange} /></label><br />
      <label>Content Attribute: <input type="text" name="contentAttribute" value={newBook.contentAttribute} onChange={handleInputChange} /></label><br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label><br />
      <button onClick={handleAddBook}>Add Book</button>
      <br />
      <Link to="/book-dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default AddBook;