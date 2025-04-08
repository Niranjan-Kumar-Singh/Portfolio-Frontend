import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/header.css';
import { motion } from 'framer-motion';

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

          <div style={{ perspective: '800px' }}>
            <motion.div
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              style={{
                display: 'inline-block',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                zIndex: 10,
                position: 'relative',
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <Footer />
      </div>
    </header>
  );
};

export default Header;
