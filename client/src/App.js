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
import LibrariesSystem from './Pages/SystemLibraries/Libraries';
import BookCategories from './Pages/BookCategories/BookCategories';
import DisplayBooks from './Pages/DisplayBooks/book';
import BookCRUD from '../src/CRUDS/BooksCrud/BookDashboard';
import CreateBook from '../src/CRUDS/BooksCrud/CreateBook';
import EditBook from '../src/CRUDS/BooksCrud/EditBook';
import Cart from './Pages/ShoppingCart/Cart';
import { UsersProvider } from './Redux/Products/Products';
import UserAccount from './Pages/UserAccount/UserAccount';
import Myshelf from './Pages/Myshelf/Myshelf';
import FictionBooks from './Pages/FictionBooks/FictionBooks';
import ChangeUsername from './CRUDS/UsersCrud/UpdateUsername/ChangeUsername';
import ChangePassword from './CRUDS/UsersCrud/UpdatePassword/ChangePassword';
import ChangeName from './CRUDS/UsersCrud/UpdateName/ChangeName';
import ChangeSurname from './CRUDS/UsersCrud/UpdateSurname/ChangeSurname';
import ChangeBirthday from './CRUDS/UsersCrud/UpdateBirthday/ChangeBirthday';
import ChangeEmail from './CRUDS/UsersCrud/UpdateEmail/ChangeEmail';
import ChangeCity from './CRUDS/UsersCrud/UpdateCity/ChangeCity';


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
          <Route path="/allBooks" element={<DisplayBooks />} />
          <Route path="/:allBooksID" element={<DisplayBooks />} />
          <Route path="/book-categories" element={<BookCategories />} />
          <Route path="/create-book" element={<CreateBook/>} />
          <Route path="/dashboard-books" element={<BookCRUD/>} />
          <Route path='/useraccount' element={<UserAccount/>}/>
          <Route path='/updateusername/:id' element={<ChangeUsername/>}/>
          <Route path='/updatepassword/:id' element={<ChangePassword/>}/>
          <Route path='/updatename/:id' element={<ChangeName/>}/>
          <Route path='/updatesurname/:id' element={<ChangeSurname/>}/>
          <Route path='/updatebirthday/:id' element={<ChangeBirthday/>}/>
          <Route path='/updateemail/:id' element={<ChangeEmail/>}/>
          <Route path='/updatecity/:id' element={<ChangeCity/>}/>
          <Route path="/edit-book/:id" element={<EditBook/>} /> 
          <Route path='/updateusername' element={<ChangeUsername/>}/>
          <Route path='/updatepassword' element={<ChangePassword/>}/>
          <Route path='/updatename' element={<ChangeName/>}/>
          <Route path='/updatesurname' element={<ChangeSurname/>}/>
          <Route path='/updatebirthday' element={<ChangeBirthday/>}/>
          <Route path='/updateemail' element={<ChangeEmail/>}/>
          <Route path='/updatecity' element={<ChangeCity/>}/>
          <Route path='/useraccount' element={<UserAccount/>}/>
        </Routes>
        </BrowserRouter>
        </UsersProvider>
  )
};

export default App;
