import React, { useState } from 'react';
import './adminsidebar.css';
import { MdNewReleases, MdLibraryBooks, MdBook, MdFolderOpen, MdThumbUp } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const AdminSidebar = ({ children }) => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);

  const menuItem = [
    {
      path: "/system-home-page",
      name: "Admin Page",
      icon: <MdNewReleases />,
    },
    {
      path: "/system-libraries",
      name: "Partners",
      icon: <MdLibraryBooks />,
    },
    {
      path: "/book-categories",
      name: "Books",
      icon: <MdBook />,
    },
    {
      path: "/system-myshelf",
      name: "Users",
      icon: <MdFolderOpen />,
    },
    {
      path: "/system-recommendations",
      name: "Orders",
      icon: <MdThumbUp />,
    },
    {
      path: "/system-recommendations",
      name: "Complaints",
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

export default AdminSidebar;
