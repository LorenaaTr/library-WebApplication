import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
import { Link } from 'react-router-dom'
import Card from '../../Components/Bookcard/Card.jsx'
import OurPartners from '../../Components/OurPartners/OurPartners'
import BestSellers from '../../Components/Bestsellers/BestSellers'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='moto'>
            <p className='lateststories'>LATEST  STORIES</p>
            <p><Link to='/register'>Register</Link> for full access to read stories from Shelf Share.</p>
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
          <Link to='/ourbooks' className='seemore'>SEE MORE</Link>
          <span className='redline2'></span>
        </div>
        <OurPartners/>
        <BestSellers/>
    </div>
  )
}

export default Home