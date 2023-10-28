import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OurPartners from './Components/OurPartners/OurPartners';

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes here */}
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
