import React from 'react';
import './myshelfbookcard.css'


function Myshelfbookcard({ book }) {
    return (
        <div className="book">
            <img src={book.image} alt={book.name} />
            <div>
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p>{book.type}</p>
            </div>
        </div>
    );
}

export default Myshelfbookcard;
