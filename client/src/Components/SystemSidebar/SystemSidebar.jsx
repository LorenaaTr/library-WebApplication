import React, { useState } from 'react';
import './systemsidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook, MdFolderOpen, MdThumbUp, MdMenuBook } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SystemSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

  const user = localStorage.getItem('user');

  const menuItem = [
    {
      path: "/system-home-page",
      name: "What's new in ShelfShare",
      icon: <MdNewReleases />,
    },
    {
      path: "/system-libraries",
      name: "Libraries",
      icon: <MdLibraryBooks />,
    },
    {
      path: "/all-books",
      name: "Books",
      icon: < MdMenuBook/>,
    },
    {
      path: `/system-myshelf/${user}`,
      name: "My Shelf",
      icon: <MdFolderOpen />,
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

export default SystemSidebar;
