// BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './bookcomponent.css'; 

const BookComponent = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.slug}`}>
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-details">
          <h3 className='books-title'>{book.title}</h3>
          <p className='books-authors'>{book.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookComponent;
