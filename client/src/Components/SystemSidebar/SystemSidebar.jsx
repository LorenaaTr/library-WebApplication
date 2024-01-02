import React, { useState } from 'react';
import './systemsidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook, MdFolderOpen, MdThumbUp } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SystemSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

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
      path: "/system-books",
      name: "Books",
      icon: <MdBook />,
    },
    {
      path: "/system-myshelf",
      name: "My Shelf",
      icon: <MdFolderOpen />,
    },
    {
      path: "/system-recommendations",
      name: "Recommendations",
      icon: <MdThumbUp />,
    },
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

export default SystemSidebar;
