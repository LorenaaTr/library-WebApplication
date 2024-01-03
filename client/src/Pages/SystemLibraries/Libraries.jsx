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
       <div className="home">
            <div className="components comp">
              <h1>EXPLORE THE LIBRARIES</h1>
              <LibPartners/>
            </div>
        </div>
    </>
  )
}

export default Libraries