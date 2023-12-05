import React from 'react'
import './ourBooks.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


const ourBooks = () => {
    return (
     <div className='books-container'>
       <Navbar/>
         <div className="page-container">
        <h1 className="title">OUR BOOKS</h1>
        <p className="description">EXPLORE ALL TYPES OF BOOKS</p>

        <ul className="book-list">
          <li className="list-item">FICTION</li>
          <span className='whiteline'></span>
          <li className="list-item">NON-FICTION</li>
          <span className='whiteline'></span>
          <li className="list-item">CLASSICS</li>
          <span className='whiteline'></span>
          <li className="list-item">CHILDREN'S BOOK</li>
          <span className='whiteline'></span>
          <li className="list-item">POETRY</li>
          <span className='whiteline'></span>
          <li className="list-item">COOKBOOKS</li>
          <span className='whiteline'></span>
          <li className="list-item">TRAVEL GUIDES</li>
          <span className='whiteline'></span>
          <li className="list-item">RELIGIOUS AND SPIRITUAL BOOKS</li>
          <span className='whiteline'></span>
          <li className="list-item">GRAPHIC NOVELS AND COMICS</li>
          <span className='whiteline'></span>
          <li className="list-item">REFERENCE BOOKS</li>
          <span className='whiteline'></span>
          <li className="list-item">ACADEMIC AND TEXTBOOKS</li>
          <span className='whiteline'></span>
          <li className="list-item">TRUE CRIME</li>
          <span className='whiteline'></span>
          <li className="list-item">FANTASY</li>
          <span className='whiteline'></span>
          <li className="list-item">ENTERTAINMENT BOOKS</li>
          <span className='whiteline'></span>
          <li className="list-item">PHILOSOPHY</li>
          <span className='whiteline'></span>
          <li className="list-item">FINANCE</li>
          <span className='whiteline'></span>
          <li className="list-item">MANGA</li>
          <span className='whiteline'></span>
        </ul>
      </div>
      <Footer/>
     </div>
    );
  };
  

  export default ourBooks