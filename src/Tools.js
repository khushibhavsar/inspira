import React from 'react';
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Tools.css';

function Tools() {
    const navigate = useNavigate();
    useEffect(() => {
        const allIcon = document.querySelectorAll(".iconContainer");
    
        function setMenuActive() {
          allIcon.forEach(n => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        allIcon.forEach(n => n.addEventListener("click", setMenuActive));
      }, []);
    
  return (
    <div className="tools-page">
           {/* Sidebar Menu */}
      <div className="menuContainer">
        <img 
            src={"/inspira_logo.png"} 
            alt="" 
            className="logo" 
            style={{ cursor: "pointer" }} // Change cursor on hover
            onClick={() => navigate("/Profile")} // Navigate on click
        />

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>
      <div className="post-container">
        {/* Header */}
        <div className="post-header">
          <div className="profile-section">
            <img 
              src="/profile_pic.png" 
              alt="Profile" 
              className="profile-pic"
              style={{ cursor: "pointer" }} // Change cursor on hover
              onClick={() => navigate("/Professional")} // Navigate on click
            />
            <span className="username">Anna Martin</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="main-image-container">
          <img 
            src="https://cdn.pixabay.com/photo/2017/10/16/18/52/bird-2858118_1280.jpg" 
            alt="Colorful bird"
            className="main-image"
          />
        </div>

        {/* Tools Section */}
        <div className="tools-section">
          <div className="color-pencils">
            <div className="pencil pencil-1"></div>
            <div className="pencil pencil-2"></div>
            <div className="pencil pencil-3"></div>
            <div className="pencil pencil-4"></div>
            <div className="pencil pencil-5"></div>
            <div className="pencil pencil-6"></div>
          </div>
          <div className="paint-tube">
            <div className="tube-body"></div>
          </div>
          <div className="brush">
            <div className="brush-head"></div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="comments-section">
          <div className="comment">
            <img 
              src="/profile_pic.png" 
              alt="Commenter" 
              className="commenter-pic"
            />
            <div className="comment-content">
              <span className="commenter-name">Stephanie</span>
              <p className="comment-text">Love this so much!</p>
              <div className="comment-actions">
                <button className="reply-button">Reply</button>
                <button className="like-button">❤️</button>
              </div>
            </div>
          </div>

          <div className="comment-input">
            <input 
              type="text" 
              placeholder="Add a comment to the chat!"
              className="comment-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;