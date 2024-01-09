import React from 'react'
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
//import './books.css'
//import '@fortawesome/fontawesome-free/css/all.min.css';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';

const book = () => {
  return (
    <>
     <SystemHeader/>
     <SystemSidebar/>
      <div className="home">
        <div className="components comp">
          <h1>EXPLORE THE BOOKS</h1>

        </div>
      </div>
    </>
  )
}

export default book