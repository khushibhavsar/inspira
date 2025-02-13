import React from "react";
import { Link } from 'react-router-dom'; // Import Link component for navigation
import "./Welcome.css"; // Import the CSS file

const Welcome = () => {
  return (
    <div className="welcome-container">
        <div className="stars"></div>
      <div className="content">
      <h1 className="bubble-title">Welcome to Inspira</h1>
      <p className="bubble-title animated">Your chance to reach for the stars</p>
      {/* Link component navigates to the Profile page when clicked */}
      <Link to="/profile">
        <button className="navigate-btn">Go to Profile</button>
      </Link>
      </div>
    </div>
  );
};

export default Welcome;
