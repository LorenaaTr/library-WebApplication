import React from 'react'
import './login.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
        <div className='login'>
            <Navbar/>
            <div className='loginwrapper'>
                <h1>LOG IN</h1>
                <form className='inputs'>
                    <input type="text" placeholder='Enter username' />
                    <p className='error'>Error</p>
                    <input type="password" placeholder='Enter password' />
                    <p className='error'>Error</p>
                    <button type='submit'>LOG IN</button>
                    <p className='acccheck'>Don’t have an account?<span><Link to='/joinasereader'>Register.</Link></span></p>
                </form>
            </div>
            <Footer/>
        </div>
  )
}

export default Login