import React from 'react'
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './books.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import Categories from '../../Components/Categories/Categories';


const BookCategories = () =>{
  return (
    <>
     <SystemHeader/>
     <SystemSidebar/>
      <div className="home">
        <div className="components comp">
          <h1>EXPLORE THE BOOKS</h1>
          <Categories/>
        </div>
      </div>
   </>
  )
}

export default BookCategories