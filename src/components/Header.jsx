// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="name">Niranjan Kumar Singh</h1>
        <p className="tagline">Building the Future, One Line of Code at a Time</p>
        <a href="/path-to-your-resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
      {/* Navbar placed below the resume button */}
      <Navbar />
    </header>
  );
};

export default Header;
