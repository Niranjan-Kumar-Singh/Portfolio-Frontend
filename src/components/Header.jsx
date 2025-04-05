import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/header.css';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';

const Header = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <header className="header">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: { value: 'transparent' },
          },
          particles: {
            number: {
              value: 60,
              density: { enable: true, value_area: 800 },
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.1,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              outModes: { default: 'out' },
            },
          },
        }}
      />

      <div className="header-inner">
        <motion.div
          className="header-content"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="name glow-text">Niranjan Kumar Singh</h1>
          <p className="tagline">Building the Future, One Line of Code at a Time</p>
          <motion.a
            href="/path-to-your-resume.pdf"
            className="resume-btn tilt-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotateX: 5, rotateY: 5 }}
          >
            Resume
          </motion.a>
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
