import React from "react";
import coverImage from "../assets/images/cover1.jpg"; // Adjust the path based on your folder structure
import '../styles/HomePage.css';


const HomePage = () => {
  return (
    <div className="homepage-container">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h1>Welcome to Our Bookstore</h1>
        <p>Your one-stop destination for all kinds of books!</p>
      </div>
    </div>
  );
};

export default HomePage;
