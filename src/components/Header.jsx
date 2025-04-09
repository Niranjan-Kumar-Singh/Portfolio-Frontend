import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/header.css';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <motion.div
          className="header-content"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="name glow-text">Niranjan Kumar Singh</h1>
          <p className="tagline">Building the Future, One Line of Code at a Time</p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn clean"
          >
            <FiFileText className="resume-icon" />
            Resume
          </a>
        </motion.div>

        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </header>
  );
};

export default Header;
