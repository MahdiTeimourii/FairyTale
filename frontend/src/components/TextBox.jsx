import React, { useState } from "react";
import "../styles/TextBox.scss";
import CircleLoader from "./CircleLoader";

const TextBox = ({ onStoryGenerated }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
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
        setLoading(false);
      })
      .catch(function (res) {
        console.log(res);
        setLoading(false);
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
          <option value="Category 1">Dragons</option>
          <option value="Category 2">Princess</option>
          <option value="Category 3">Animals</option>
          <option value="Category 4">Magic</option>
          <option value="Category 5">science</option>
          <option value="Category 6">Angel</option>
          <option value="Category 7">Knight</option>
          <option value="Category 8">Family</option>
          <option value="Category 9">Nature</option>
        </select>
        <select className="dropdown" value={age} onChange={handleAgeChange}>
          <option value="">Select age</option>
          <option value="Age 1">1-5 Years Old</option>
          <option value="Age 2">5-10 Years Old</option>
          <option value="Age 3">10-15 Years Old</option>
        </select>
        <select
          className="dropdown"
          value={duration}
          onChange={handleDurationChange}
        >
          <option value="">Select duration</option>
          <option value="Duration 1">2 Minutes</option>
          <option value="Duration 2">5 Minutes</option>
          <option value="Duration 3">7 Minutes</option>
          <option value="Duration 4">12 Minutes</option>
          <option value="Duration 5">15 Minutes</option>
        </select>
        <button type="submit" className="button">
          Generate
        </button>
        {loading && <CircleLoader />}{" "}
        {/* loading spinner is shown only if we're loading */}
      </form>
    </div>
  );
};

export default TextBox;
