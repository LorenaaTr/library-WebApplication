import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SystemHeader from '../../Components/SystemHeader/SystemHeader'
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar'
import './displaybooks.css';
import BookComponent from '../../Components/BookComponent/BookComponent';

const DisplayBooks = () => {
    const [books, setBooks] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:5000/book/getBooks')
          .then(response => setBooks(response.data.books))
          .catch(error => console.error(error));
      }, []);

      console.log(books);
  return (
    <>
     <SystemHeader/>
     <SystemSidebar/>
      <div className="home">
        <div className="components comp">
        <h1>EXPLORE BOOKS</h1>

        <div className="book-list">
        {books.map((book) => (
            <BookComponent key={book._id} book={book}  />
        ))}
        </div>
        </div>   
     </div>
    </>
  )
}

export default DisplayBooks
