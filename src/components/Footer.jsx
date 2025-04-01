/* src/components/Footer.jsx */

import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Niranjan Kumar Singh. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/niranjan-kumar-singh/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/niranjankumarsingh" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
