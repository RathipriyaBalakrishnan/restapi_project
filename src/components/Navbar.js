import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {  Link } from "react-router-dom";
import EventIcon from '@mui/icons-material/Event';
import './NavbarStyle.css';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  // const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  // const handleJoinClick = () => {
  //   console.log('Join button clicked');
  //   if (navigate) {
  //     navigate('/login');
  //   } else {
  //     console.error('navigate function is undefined');
  //   }
  // };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header2 header-bg2 creative-header2" : "header"}>
      <div className="header-container2">
        <Link to="/">
          <div className="logo-container2">
            <EventIcon fontSize="large" style={{ color: "black" }} />
            <h1 className="logo2">EventBreeze</h1>
          </div>
        </Link>
        <div className={click ? "menu-icon2 active" : "menu-icon2"} onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">
              <button > 
                Hi User</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
