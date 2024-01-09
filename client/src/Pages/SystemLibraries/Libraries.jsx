import React from 'react'
import SystemHeader from '../../Components/SystemHeader/SystemHeader';
import SystemSidebar from '../../Components/SystemSidebar/SystemSidebar';
import './libraries.css'
import LibPartners from '../../Components/LibraryPartners/LibPartners';

const Libraries = () => {
  return (
    <>
     <SystemHeader/>
     <SystemSidebar/>
     <div className='main-container'>
     <h1 className='header'>EXPLORE THE LIBRARIES</h1>
      <div className="libraries-wrapper">
       <LibPartners/>
      </div>
     </div>
    </>
  )
}

export default Libraries