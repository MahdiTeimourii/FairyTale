import React, { useState } from "react";
import "../styles/DayMode.scss";

const DayMode = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleDayMode = () => {
    let body = document.querySelector("body");
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
    setIsLightMode(!isLightMode); // toggle the mode
  };

  return (
    <div>
      <button
        className={isLightMode ? "light-mode-toggle" : "dark-mode-toggle"}
        onClick={toggleDayMode}
      >
        {isLightMode ? "Day Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DayMode;
