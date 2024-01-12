// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditBook = ({ match }) => {
  const navigate = useNavigate();


  const [book, setBook] = useState({
    imageUrl: '',
    title: '',
    description: '',
    category: '',
    isFree: false,
    isbn: '',
    author: '',
    contentAttribute: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${match.params.id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.checked,
    });
  };

  const handleEditBook = () => {
    axios.put(`http://localhost:5000/api/books/${match.params.id}`, book)
      .then(response => {
        console.log('Book edited:', response.data);
        navigate('/book-list');
      })
      .catch(error => console.error(error));
  };
  
  return (
    <div>
      <h1>Edit Book</h1>
      <label>Image URL: <input type="text" name="imageUrl" value={book.imageUrl} onChange={handleInputChange} /></label><br />
      <label>Title: <input type="text" name="title" value={book.title} onChange={handleInputChange} /></label><br />
      <label>Description: <input type="text" name="description" value={book.description} onChange={handleInputChange} /></label><br />
      <label>Category: <input type="text" name="category" value={book.category} onChange={handleInputChange} /></label><br />
      <label>Is Free: <input type="checkbox" name="isFree" checked={book.isFree} onChange={handleCheckboxChange} /></label><br />
      <label>ISBN: <input type="text" name="isbn" value={book.isbn} onChange={handleInputChange} /></label><br />
      <label>Author: <input type="text" name="author" value={book.author} onChange={handleInputChange} /></label><br />
      <label>Content Attribute: <input type="text" name="contentAttribute" value={book.contentAttribute} onChange={handleInputChange} /></label><br />
      <button onClick={handleEditBook}>Save Changes</button>
    </div>
  );
};

export default EditBook;
