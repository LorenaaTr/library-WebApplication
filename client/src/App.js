import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OurPartners from './Components/OurPartners/OurPartners';
import Menu from './Components/Menu/Menu'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
