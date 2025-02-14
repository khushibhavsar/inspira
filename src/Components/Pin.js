import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaComment, FaBookmark, FaShare } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';


function Pin({pinSize, imgSrc, name, link }) {
  const [showTools, setShowTools] = useState(false);
  const navigate = useNavigate();

  const handleViewTools = () => {
    console.log("Navigating to Tools page...");
    navigate(`/tools`); 
  };

  return (
    <div 
      className={`pin ${pinSize}`}
      onMouseEnter={() => setShowTools(true)}
      onMouseLeave={() => setShowTools(false)}
    >
        <img className="mainPic" 
            src={imgSrc}
            alt="" 
        />
        {showTools && (
          <div className="tools-container">
            <div className="top-tools">
              <button className="view-button" onClick={handleViewTools}>View tools</button>
            </div>
            <div className="interaction-tools">
              <div className="action-buttons">
                <button><FaHeart /></button>
                <button><FaComment /></button>
                <button><FaBookmark /></button>
                <button><FaShare /></button>
              </div>
              <button className="more-button"><FiMoreHorizontal /></button>
            </div>
          </div>
        )}
        <div className="content">
            <h3>{name}</h3>
            <div className="search">
              <a href={link}>    
                <img 
                  src={'/forwardarrow.png'}  
                  alt="" 
                />
              </a>
            </div>
        </div>
    </div>
  );
}

export default Pin;