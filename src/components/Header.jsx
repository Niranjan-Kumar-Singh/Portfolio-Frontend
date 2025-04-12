import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/header.css';

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
          <p className="tagline font-cursive">
            <Typewriter
              words={[
                'Building the Future, One Line of Code at a Time',
                'Passionate Full Stack Developer',
                'React & Java Enthusiast',
                'Dreaming in JavaScript and Coffee☕',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={10000}
            />
          </p>
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
