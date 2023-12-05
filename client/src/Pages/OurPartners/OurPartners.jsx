import React from 'react'
import './ourPartners.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const OurPartners = () => {
  return (
    <div className="partnersContainer">
       <Navbar/>
      <div className="page-container">
        <h1 className="title">OUR PARTNERS</h1>
        <p className="description">LOYAL SHELF SHARE PARTNERS</p>

       <div className="unordered-list">
        <ul className="book-list">
            <li className="list-item">DUKAGJINI BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">EDUCATIONAL CENTER BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">KADA BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">BUZUKU BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">SIRA BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">PEJA BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">DIJA BOOKSTORE</li>
            <span className='whiteline'></span>
            <li className="list-item">THE NATIONAL “PJETER BOGDANI”  LIBRARY</li>
            <span className='whiteline'></span>
            <li className="list-item">“HIVZI SYLEJMANI” LIBRARY</li>
            <span className='whiteline'></span>
            <li className="list-item">HOUSE OF BOOKS</li>
            <span className='whiteline'></span>
          </ul>
       </div>
       <Footer/>
      </div>
      
    </div>
  )
}

export default OurPartners