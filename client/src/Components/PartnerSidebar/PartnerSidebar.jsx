import React, { useState } from 'react';
import './partnersidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook, MdFolderOpen, MdThumbUp } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const PartnerSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

  const menuItem = [
    {
      path: "/yourbookstore-page",
      name: "Your Bookstore",
      icon: <MdNewReleases />,
    },
    {
      path: "/dashboard-books",
      name: "Books",
      icon: <MdLibraryBooks />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <MdBook />,
    }
  ];

  return (
    <div className="container">
      <div className={`sidebar ${isopen ? 'open' : 'notopen'}`}>
        <div className="links">
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
