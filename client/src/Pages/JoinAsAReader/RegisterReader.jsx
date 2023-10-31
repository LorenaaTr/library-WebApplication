import React from 'react'
import './registerreader.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const RegisterReader = () => {
  return (
    <div className='register'>
        <Navbar/>
        <form className='registerwrapper'>
            <h1>REGISTER</h1>
            <div className='fisrtpart'>
                <input type="text" name="name" placeholder='Name'  />
                <input type="text" name="surname" placeholder='Surname'/>
                <input type="text" name="email" placeholder='Email'/>
                <input type="text" name="city" placeholder='City'/>
            </div>
            <div className='secondpart'>
              <input type="text" name="name" placeholder='Name'  />
              <input type="text" name="surname" placeholder='Surname'/>
              <input type="text" name="email" placeholder='Email'/>
              <input type="text" name="city" placeholder='City'/>
            </div>
        </form>
        <Footer/>
    </div>
  )
}

export default RegisterReader