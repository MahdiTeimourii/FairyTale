import React from 'react';
import "../styles/TopNavBar.scss";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-title">Fairly Tale</div>
      <div className="navbar-button">
        <button>Day Mode</button>
      </div>
    </nav>
  );
};

export default TopNavBar;
