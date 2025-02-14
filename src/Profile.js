import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Profile() {
  return (
    <div className="profile-container">
      <h2 className="bubble-title">Choose your Profile!</h2>
      <div className="options">
        {/* Professional Option */}
        <div className="option">
        <Link to="/Professional">
          <img 
            src="/professional_profile.png" 
            alt="Professional" 
            className="profile-option"
          />
        </Link>
          <p className="option-text">Professional</p> {/* Text below image */}
        </div>

        {/* Beginner Option */}
        <div className="option">
        <Link to="/Beginner">
          <img 
            src="/beginner_profile.png" 
            alt="Beginner" 
            className="profile-option"
          />
        </Link>
        <p className="option-text">Beginner</p> {/* Text below image */}
        </div>
        </div>
    </div>
  );
}

export default Profile;
