import React, { useState } from 'react';
import './partnersidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook,  } from 'react-icons/md';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const PartnerSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

  const menuItem = [
    {
      path: "/partner-home-page",
      name: "Your Bookstore",
      icon: <LocalLibraryIcon />,
    },
    {
      path: "/dashboard-books",
      name: "Books",
      icon: <AutoStoriesIcon />,
    },
    {
      path: "/bookstore-order-page",
      name: "Orders",
      icon: <ShoppingBasketIcon />,
    }
  ];

  return (
    <div className="container">
      <div className={`sidebar ${isopen ? 'open' : 'notopen'}`}>
        <div className="linkss">
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

export default PartnerSidebar;
