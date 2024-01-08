import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu'
import Login from './Pages/Login/Login';
import RegisterReader from './Pages/JoinAsAReader/RegisterReader';
import RegisterPartner from './Pages/JoinAsPartner/RegisterPartner';
import OurBooks from './Pages/OurBooks/OurBooks';
import Partners from './Pages/OurPartners/OurPartners';
import Services from './Pages/Services/ourServices';
import SystemHomePage from './Pages/SystemHomePage/HomePage';
import SystemHeader from './Components/SystemHeader/SystemHeader';
import SystemSidebar from './Components/SystemSidebar/SystemSidebar';
import LibrariesSystem from './Pages/SystemLibraries/Libraries';
import BookCategories from './Pages/BookCategories/BookCategories';
import { UsersProvider } from './Redux/Products/Products';
import UserAccount from './Pages/UserAccount/UserAccount';
import Myshelf from './Pages/Myshelf/Myshelf';
import FictionBooks from './Pages/FictionBooks/FictionBooks';

const App = () => {
  return (
    <UsersProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/joinasereader" element={<RegisterReader />} />
            <Route path="/joinasapartner" element={<RegisterPartner />} />
            <Route path="/ourBooks" element={<OurBooks />} />
            <Route path="/ourPartners" element={<Partners />} />
            <Route path="/ourServices" element={<Services />} />
            <Route path="/system-home-page" element={<SystemHomePage />} />
            <Route path="/system-libraries" element={<LibrariesSystem />} />
            <Route path="/book-categories" element={<BookCategories />} />
            <Route path='/useraccount' element={<UserAccount/>}/>
            <Route path='/system-myshelf' element={<Myshelf/>}/>
            <Route path='/fictionbooks' element={<FictionBooks/>}/>
          </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
