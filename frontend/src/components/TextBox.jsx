import React from 'react';
import '../styles/TextBox.scss';

const TextBox = () => {
  return (
    <div className="textbox-container">
      <input type="text" placeholder="Enter text..." className="textbox" />
      <button className="button">Generate</button>
    </div>
  );
};

export default TextBox;
