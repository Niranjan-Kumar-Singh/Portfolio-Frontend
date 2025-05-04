// src/components/Header.jsx
import React, { memo, useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FiFileText } from 'react-icons/fi';
import '../styles/header.css';

const LazyTypewriter = lazy(() =>
  import('react-simple-typewriter').then(mod => ({ default: mod.Typewriter }))
);

// Hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Niranjan_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResumeButton = memo(({ label = "Download Resume" }) => (
  <button className="resume-btn font-inter clean" onClick={handleDownload}>
    <FiFileText className="resume-icon" />
    {label}
  </button>
));

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-content">
          <h1 className="name font-orbitron glow-text">Niranjan Kumar Singh</h1>

          {/* Optimized tagline for mobile */}
          <p className="tagline font-cursive">
            {isMobile ? (
              'React & Java Enthusiast'
            ) : (
              <Suspense fallback={<span>React & Java Enthusiast</span>}>
                <LazyTypewriter
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
              </Suspense>
            )}
          </p>

          {/* Memoized Resume Button */}
          <ResumeButton />
        </div>

        {/* Navbar and Footer Components */}
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
