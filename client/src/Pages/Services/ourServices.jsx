import React from 'react'
import '../OurPartners/OurPartners'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const OurServices = () => {
  return (
    <div className="page-container">
         <Navbar/>
        <h1 className="title2">OUR SERVICES</h1>

        <ul className="book-list">
          <li className="list-item">READ BOOKS ONLINE</li>
          <span className='whiteline'></span>
          <li className="list-item">LEARN ONLINE</li>
          <span className='whiteline'></span>
        </ul>
        <Footer/>
      </div>
  )
}

export default OurServices