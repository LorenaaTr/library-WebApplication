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
import DisplayBooks from './Pages/DisplayBooks/book';
import BookCRUD from '../src/CRUDS/BooksCrudd/BookDashboard';
import AddBook from '../src/CRUDS/BooksCrudd/AddBook';
import EditBook from '../src/CRUDS/BooksCrudd/EditBook';
import Cart from './Pages/ShoppingCart/Cart';

const App = () => {
  return (
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
          <Route path="/allBooks" element={<DisplayBooks />} />
            <Route path=":allBooksID" element={<DisplayBooks />} />
          
          <Route path="/book-categories" element={<BookCategories />} />
          <Route path="/fiction" element={<BookCategories category="fiction" />} />
          <Route path="/non-fiction" element={<BookCategories category="non-fiction" />} />
          <Route path="/classics" element={<BookCategories category="classics" />} />
          <Route path="/children-books" element={<BookCategories category="children-books" />} />
          <Route path="/cook-books" element={<BookCategories category="cook-books" />} />
          <Route path="/travel-guides" element={<BookCategories category="travel-guides" />} />
          <Route path="/religous-spirtual-books" element={<BookCategories category="religous" />} />
          <Route path="/comics" element={<BookCategories category="comics" />} />
          <Route path="/philosophy" element={<BookCategories category="philosophy" />} />
          <Route path="/academic-books" element={<BookCategories category="academic" />} />
          <Route path="/crime" element={<BookCategories category="crime" />} />
          <Route path="/entertainment" element={<BookCategories category="entertainment" />} />

          <Route path="/book-dashboard" element={<BookCRUD />} />
          <Route path="/add-book" element={<AddBook/>} />
           <Route path="/edit-book/:id" element={<EditBook/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
