import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark, Search } from '@mui/icons-material';
import './Beginner.css';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import Pin from './Components/Pin';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Data from "./Components/Data";


function Beginner() {
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
    <div className="Beginner">
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
        <div className="searchBox">
        <Search className="search-icon" />
          <input type="text" />
          <div className="search">
            <img 
              src={'/profile_pic.png'}  
              alt="" 
              style={{ cursor: "pointer" }} // Change cursor on hover
              onClick={() => navigate("/Professional")} // Navigate on click
            />
          </div>
        </div>
        <div className="mainContainer">
          {Data && 
            Data.map((data) => (
              <Pin 
                key={data.id} 
                pinSize = {data.size} 
                imgSrc={data.imgSrc} 
                name = {data.name}
                link = {data.link}
                />
              ))}
          <Pin pinSize = {'small'} />
        </div>
      </main>

    </div>
  );
}


export default Beginner;
