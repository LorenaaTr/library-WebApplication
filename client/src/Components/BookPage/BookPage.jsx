import React, { useEffect, useState } from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import { useParams } from 'react-router';
import './bookpage.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                const res = await axios.get(`http://localhost:5000/book/getbooks?slug=${bookSlug}`);
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
    <SystemHeader/>
     <SystemSidebar/>
      <div className="home">
        <div className="components comp">
            <div className="book-page">
            <h1>{book && book.title}</h1>
            <Link to='#'>
            <Button>{book && book.category}</Button>
            </Link>
            <img src={book && book.image} alt={book && book.title}/>
                <div className="description-container">
                    {book && book.author}
                    <br />
                    {book && book.isbn}
                    <br />
                    {book && book.description}
                    
                </div>
            </div>
           
        </div>
      </div>
    </>
  )
}

export default BookPage
