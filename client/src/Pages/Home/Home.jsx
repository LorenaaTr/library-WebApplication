import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Card from '../../Components/Bookcard/Card.jsx'
import OurPartners from '../../Components/OurPartners/OurPartners'
import BestSellers from '../../Components/Bestsellers/BestSellers'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className='homewrapper'>
          <div className='moto'>
              <p className='lateststories'>LATEST  STORIES</p>
              <p><Link to='/joinasereader'>Register</Link> for full access to read stories from Shelf Share.</p>
              <span className='redline'></span>
          </div>
          <div className='cards-wrapper'>
            <div className='cards'>
              <Card/>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            <div className='cards-reverse'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
          <div className='cmore'>
            <Link to='/ourBooks' className='seemore'>SEE MORE</Link>
            <span className='redline2'></span>
          </div>
          <OurPartners/>
          <BestSellers/>
          <div className='ourServices'>
            <h1>OUR SERVICES</h1>
              <div className='readonline'>
                <div className='circle'>
                  1
                </div>
                <h3>READ ONLINE</h3>
                <p>GET 30% DISCOUNT IN BOOK PRICES USING OUR SERVICE </p>
              </div>
              <div className='learnonline'>
                <div className='circle'>
                  2
                </div>
                <h3>LEARN ONLINE</h3>
                <p>WIN A FREE NEW BOOK EVERYTIME YOU WIN A QUIZ</p>
              </div>
          </div>
          <div className='signup'>
            <div className='overlayedcontext'>
              <p className='first'>THE BEST OF SHELF SHARE DELIVERED TO YOU</p>
              <p className='second'>SIGN UP FOR MORE INSPIRING BOOKS</p>
              <Link to='/joinasereader'><button>SIGN UP</button></Link>
            </div>
          </div>
          </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home