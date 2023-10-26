import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='moto'>
            <p className='lateststories'>LATEST  STORIES</p>
            <p><Link to='/register'>Register</Link> for full access to read stories from Shelf Share.</p>
            <span className='redline'></span>
        </div>
    </div>

  )
}

export default Home