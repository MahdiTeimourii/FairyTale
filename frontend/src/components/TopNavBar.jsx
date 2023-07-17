import React from 'react';
import "../styles/TopNavBar.scss";
import logo from "../images/logo.png";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />

      </div>
      <div className="navbar-title"></div>
      <div className="navbar-button">
        <button>Day Mode</button>
      </div>
    </nav>
  );
};

export default TopNavBar;
