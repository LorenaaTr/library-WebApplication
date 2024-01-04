import React from 'react';
import './Myshelf.css';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import book4 from '../../assets/images/bestseller4.jpg';
import Book from '../../Components/Myshelfbookcard/myshelfbookcard';


function Myshelf() {
    const books = [
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE', image: book4 },
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE' },
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE' },
        { name: 'BOOK NAME', author: 'AUTHOR’S NAME', type: 'BOOK TYPE' }
    ];

    return (
        <>
        <SystemHeader/>
     <SystemSidebar/>
        <div className="Myshelfcontainer">
            <header className="Myshelfcontainer-header">
                {books.map((book, index) => (
                    <Book key={index} book={book} />
                ))}
            </header>
        </div>
    </>
    )
}

export default Myshelf;
