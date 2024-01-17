import React, { useEffect, useState } from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import { useParams } from 'react-router';
import './bookpage.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BookPage = () => {
    const { bookSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [book, setBook] = useState(null);
    console.log('Books:', book);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:5000/book/getbooks?slug=${bookSlug}`);
                const data = await res.json();
                if(!res.ok){
                    setError(true);
                    setLoading(false);
                    return;
                }
                if(res.ok){
                    setBook(data.books[0]);
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchPost();
    }, [bookSlug]);

    if (loading) return (
        <>
        <div className='color'>Loading...</div>
        </>
    );


  return (
    <>
    <SystemHeader />
    <SystemSidebar />
    <div className="home">
      <div className="components comp">
      <h1 className='title-book'>{book && book.title}</h1>
        <div className="book-page">
          <div className="header-container">
           <div className="category-con">
           <Link to="#">
              <Button className="category-btn">{book && book.category}</Button>
            </Link>
           </div>
          </div>
          <div className="book-card-container">
            <img src={book && book.image} alt={book && book.title} className="cover-book" />
            <div className="description-container">
              <h3 className='libraryName'>{book && book.libraryName}</h3>
              <br />
              <p className='author'>{book && book.author}</p>
              <br />
              <span>ISBN:</span>{book && book.isbn}
              <br />
              <p className='description-con'>{book && book.description}</p>
              <br />
              {book && (
                <>
                  <div className="price-container">
                    <span className="price-label">Price: </span>
                    <span className="price-value">${book.price}</span>
                  </div> 
                  <br />
                  <Link to='#'>
                  <Button variant="contained" color="primary" className="buy-button">
                    Buy
                  </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BookPage
