import React from 'react';
import './RecommandedBook.css';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import book4 from '../../assets/images/bestseller4.jpg';
import Book from '../../Components/RecommandedBookCard/recommandedbookcard';


function RecommandedBook() {
    const books = [
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE', image: book4, rate:'BOOKS RATE'},
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE', image: book4, rate:'BOOKS RATE'},
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE', image: book4, rate:'BOOKS RATE'},
         { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE', image: book4, rate:'BOOKS RATE'},
    ];

    return (
        <>
        <SystemHeader/>
     <SystemSidebar/>
        <div className="RecommandedBookcontainer">
            <header className="RecommandedBook-header">
                {books.map((book, index) => (
                    <Book key={index} book={book} />
                ))}
            </header>
        </div>
    </>
    )
}

export default RecommandedBook;
