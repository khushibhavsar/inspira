import React from 'react';
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import './Professional.css';
import MenuContainer from './Components/MenuContainer';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Pin from './Components/Pin';
import { FaSearch } from "react-icons/fa";

function Professional() {
  const navigate = useNavigate();
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive))
  }, []);

  return (
    <div className="professional">
      <div className="menuContainer">
        <img 
          src={'/inspira_logo.png'} 
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

      <main>
        <div className="profile-header">
          <div className="profile-image">
            <img 
              src='/profile_pic.png' 
              alt="Profile" 
              className="avatar"
            />
          </div>
          <h1 className="profile-name">Anna Martin</h1>
          <p className="profile-username">@anna_martin</p>
          
          <nav className="profile-nav">
            <button className="nav-link active">My Posts</button>
            <button className="nav-link">Saved Posts</button>
          </nav>
        </div>

        <div className="posts-grid">
          <div className="post-card">
            <img 
              src="https://cdn.pixabay.com/photo/2017/10/16/18/52/bird-2858118_640.jpg" 
              alt="Post 1" 
              className="post-image"
            />
            <div className="post-info">
              <span className="view-count">1.2k views</span>
            </div>
          </div>

          <div className="post-card">
            <img 
              src="https://cdn.pixabay.com/photo/2015/03/26/15/20/art-692876_640.jpg" 
              alt="Post 2" 
              className="post-image"
            />
            <div className="post-info">
              <span className="view-count">5.3k views</span>
            </div>
          </div>

          <div className="post-card">
            <img 
              src="https://cdn.pixabay.com/photo/2019/10/15/17/37/sunflowers-4552426_640.jpg" 
              alt="Post 3" 
              className="post-image"
            />
            <div className="post-info">
              <span className="view-count">1k views</span>
            </div>
          </div>

          <div className="post-card">
            <img 
              src="https://cdn.pixabay.com/photo/2013/02/24/18/32/lionel-walden-85788_640.jpg" 
              alt="Post 4" 
              className="post-image"
            />
            <div className="post-info">
              <span className="view-count">200 views</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Professional;