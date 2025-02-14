import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import './Beginner.css';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import Pin from './Components/Pin';
import { FaSearch } from "react-icons/fa";
import Data from "./Components/Data";

function Beginner() {
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
          <input type="text" placeholder="Search.." />
          <div className="search">
            <img 
              src={'/forwardarrow.png'}  
              alt="" />
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
