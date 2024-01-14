import React from 'react';
import './recommandedbookcard.css'


function RecommandedBookCard({ book }) {
    return (
        <div className="book">
            <img src={book.image} alt={book.name} />
            <div>
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p>{book.type}</p>
                <p>{book.rate}</p>
            </div>
        </div>
    );
}

export default RecommandedBookCard;
