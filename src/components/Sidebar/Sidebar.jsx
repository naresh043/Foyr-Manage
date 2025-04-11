/* Sidebar/Sidebar.jsx */
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Foyr®</h2>
      <nav className="menu">
        <ul>
          <li className="active">All Tasks</li>
          <li>Templates</li>
          <li>Documents</li>
        </ul>
      </nav>
      <div className="user">
        <div className="avatar">N</div>
        <p>naresh732003@gmail.com</p>
      </div>
    </div>
  );
};

export default Sidebar;