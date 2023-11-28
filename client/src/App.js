import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OurPartners from './Components/OurPartners/OurPartners';
import Menu from './Components/Menu/Menu'
import Login from './Pages/Login/Login';
import RegisterReader from './Pages/JoinAsAReader/RegisterReader';
import Books from './Pages/Books/ourBooks';
import Partners from './Pages/OurPartners/OurPartners';
import Services from './Pages/Services/ourServices';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinasereader" element={<RegisterReader />} />
          <Route path="/ourBooks" element={<Books />} />
          <Route path="/ourPartners" element={<Partners />} />
          <Route path="/ourServices" element={<Services />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
