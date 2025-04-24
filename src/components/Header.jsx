import React, { memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FiFileText } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/header.css';

// ✅ Memoized ResumeButton to prevent re-renders
const ResumeButton = memo(() => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Niranjan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="resume-btn font-inter clean" onClick={handleDownload}>
      <FiFileText className="resume-icon" />
      Download Resume
    </button>
  );
});

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-content">
          <h1 className="name font-orbitron glow-text">Niranjan Kumar Singh</h1>
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

          {/* ✅ Using Memoized Component */}
          <ResumeButton />
        </div>

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
