import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='moto'>
            <p className='lateststories'>LATEST  STORIES</p>
            <p>Register for full access to read stories from Shelf Share.</p>
            <span className='redline'></span>
        </div>
    </div>

  )
}

export default Home