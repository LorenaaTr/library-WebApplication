// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} - <a href={`/edit/${book._id}`}>Edit</a> | <a href={`/delete/${book._id}`}>Delete</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
