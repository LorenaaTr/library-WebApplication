import React from 'react'
import './registerreader.css'
import Navbar from '../../Components/Navbar/Navbar'

const RegisterReader = () => {
  return (
    <div className='register'>
        <Navbar/>
        <form className='registerwrapper'>
            <h1>REGISTER</h1>
            <div className='fisrtpart'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="date" />
            </div>
            <div className='secondpart'>

            </div>
            
        </form>
    </div>
  )
}

export default RegisterReader