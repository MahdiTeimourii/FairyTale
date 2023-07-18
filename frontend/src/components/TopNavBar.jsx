import React from "react";
import "../styles/TopNavBar.scss";
import logo from "../images/logo.png";
import DayMode from "./DayMode";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-title"></div>
      <div className="navbar-button">
        <DayMode /> {/* Use DayMode component */}
      </div>
    </nav>
  );
};

export default TopNavBar;
