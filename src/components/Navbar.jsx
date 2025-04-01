// src/components/Navbar.jsx
import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-item">
          <div className="nav-indicator"></div>
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <div className="nav-indicator"></div>
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <div className="nav-indicator"></div>
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <div className="nav-indicator"></div>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;