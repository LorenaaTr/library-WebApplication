import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FictionBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        // Make request to your server to get books by type
        axios.get('http://localhost:5000/book/getbook/horror')
            .then(response => {
                const fetchedBooks = response.data.data;
                setBooks(fetchedBooks);
            })
            .catch(error => {
                console.error('Fetch Books Error:', error);
            });
    }, []); // Run once on component mount

    return (
        <div>
        <h2>Fiction Books</h2>
        {/* Display your books */}
        {books.map(book => (
            <div key={book._id}>
                <h3 style={{color:"black"}}>{book.title}</h3>
            </div>
        ))}
    </div>
    );
}

export default FictionBooks;
