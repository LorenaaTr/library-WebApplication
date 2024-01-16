import React, { useState } from 'react';
import './adminsidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

  const menuItem = [
    {
      path: "/admin-panel",
      name: "Admin Page",
      icon: <AdminPanelSettingsIcon />,
    },
    {
      path: "/admin-partners",
      name: "Partners",
      icon: <HandshakeIcon />,
    },
    {
      path: "/admin-books",
      name: "Books",
      icon: <LocalLibraryIcon />,
    },
    {
      path: "/admin-users",
      name: "Users",
      icon: <PeopleIcon />,
    },
    {
      path: "/admin-orders",
      name: "Orders",
      icon: <ShoppingBasketIcon />,
    },
    {
      path: "/admin-complaints",
      name: "Complaints",
      icon: <ContactMailIcon />,
    },
  ];

  return (
    <div className="container">
      <div className={`sidebar ${isopen ? 'open' : 'notopen'}`}>
        <div id="links">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminSidebar;
