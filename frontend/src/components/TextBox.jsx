import React, { useState } from "react";
import "../styles/TextBox.scss";

const TextBox = ({ onStoryGenerated }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the values
    console.log("Name:", name);
    console.log("Category:", category);
    console.log("Age:", age);
    console.log("Duration:", duration);

    fetch("http://localhost:3001/api/generate-story", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, age, category, availableTime: duration }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        onStoryGenerated(res);
      })
      .catch(function (res) {
        console.log(res);
      });
    // You can perform further actions here, such as making an API call
    // or updating the state of your parent component
  };

  return (
    <div className="textbox-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name..."
          className="textbox"
          value={name}
          onChange={handleNameChange}
        />

        <select
          className="dropdown"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>

        <select className="dropdown" value={age} onChange={handleAgeChange}>
          <option value="">Select age</option>
          <option value="Age 1">Age 1</option>
          <option value="Age 2">Age 2</option>
          <option value="Age 3">Age 3</option>
        </select>

        <select
          className="dropdown"
          value={duration}
          onChange={handleDurationChange}
        >
          <option value="">Select duration</option>
          <option value="Duration 1">Duration 1</option>
          <option value="Duration 2">Duration 2</option>
          <option value="Duration 3">Duration 3</option>
        </select>

        <button type="submit" className="button">
          Generate
        </button>
      </form>
    </div>
  );
};

export default TextBox;
