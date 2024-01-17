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
import LoginPartner from './Pages/LoginasPartner/LoginPartner';
import BookstorePage from './Pages/PartnerWeb/BookstorePage/BookstorePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from './Pages/AdminWeb/AdminHome/AdminHome';
import RecommandedBook from './Pages/RecommandedBook/RecommandedBook';
import BookstoreOrdersPage from './Pages/PartnerWeb/OrdersPage/BookstoreOrdersPage';
import Complaints from './Pages/AdminWeb/Complaints/Complaints';
import DisplayBooks from './Pages/DisplayBooks/DisplayBooks';
import BookPage from './Components/BookPage/BookPage';
import PartnerDashboard from './CRUDS/PartnerBooks/PartnerBookDashboard';
import SingleComplaintPage from './Pages/AdminWeb/SingleComplaint/SingleComplaintPage';
import UpdateComplaintForm from './Pages/AdminWeb/UpdateComplaint/UpdateComplaint';
import Userspage from './Pages/AdminWeb/Users/Userspage';
import SingleUser from './Pages/AdminWeb/SingleUser/SingleUser';
import UpdateUserForm from './Pages/AdminWeb/UpdateUser/UpdateUser';
import AddComplaintForm from './Pages/AdminWeb/AddComplaint/AddComplaint';
import AddUserForm from './Pages/AdminWeb/AddUser/AddUsers';
import AddBook from './CRUDS/PartnerBooks/AddBook'


const App = () => {
  return (
    <UsersProvider>
    <BrowserRouter>
      <ToastContainer/>
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
          <Route path="/create-book" element={<CreateBook/>} />
          <Route path="/dashboard-books" element={<BookCRUD/>} />
          <Route path="/edit-book/:bookId" element={<EditBook/>} /> 
          <Route path='/useraccount' element={<UserAccount/>}/>
          <Route path='/updateusername/:id' element={<ChangeUsername/>}/>
          <Route path='/updatepassword/:id' element={<ChangePassword/>}/>
          <Route path='/updatename/:id' element={<ChangeName/>}/>
          <Route path='/updatesurname/:id' element={<ChangeSurname/>}/>
          <Route path='/updatebirthday/:id' element={<ChangeBirthday/>}/>
          <Route path='/updateemail/:id' element={<ChangeEmail/>}/>
          <Route path='/updatecity/:id' element={<ChangeCity/>}/>
          <Route path='/updateusername' element={<ChangeUsername/>}/>
          <Route path='/updatepassword' element={<ChangePassword/>}/>
          <Route path='/updatename' element={<ChangeName/>}/>
          <Route path='/updatesurname' element={<ChangeSurname/>}/>
          <Route path='/updatebirthday' element={<ChangeBirthday/>}/>
          <Route path='/updateemail' element={<ChangeEmail/>}/>
          <Route path='/updatecity' element={<ChangeCity/>}/>
          <Route path='/useraccount' element={<UserAccount/>}/>
          <Route path='/loginpartner' element={<LoginPartner/>}/>
          <Route path='/partner-home-page' element={<BookstorePage/>}/>
          <Route path='/bookstore-order-page' element={<BookstoreOrdersPage/>}/>
          <Route path='/system-myshelf' element={<Myshelf/>}/>
          <Route path='/admin-home' element={<AdminHome/>}/>
          <Route path='/system-recommendations' element={<RecommandedBook/>}/>
          <Route path='/admin-complaints' element={<Complaints/>}/>
          <Route path='/all-books' element={<DisplayBooks/>}/>
          <Route path='/book/:bookSlug' element={<BookPage/>}/>
          <Route path="/partner-dashboard/:user" element={<PartnerDashboard/>} />
          <Route path='/singlecomplaint/:id' element={<SingleComplaintPage/>}/>
          <Route path='/updatecomplaint/:id' element={<UpdateComplaintForm/>}/>
          <Route path='/admin-users' element={<Userspage/>}/>
          <Route path='/singleuser/:id' element={<SingleUser/>}/>
          <Route path='/updateuser/:id' element={<UpdateUserForm/>}/>
          <Route path='/addcomplaint' element={<AddComplaintForm/>}/>
          <Route path='/adduser' element={<AddUserForm/>}/>
          <Route path="/add-book" element={<AddBook/>} />
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  )
};

export default App;
