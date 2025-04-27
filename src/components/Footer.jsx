// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="left-footer">
      <div className="footer-horizontal">
        {/* GitHub Icon */}
        <a
          href="https://github.com/Niranjan-Kumar-Singh"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon github"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/niranjan-kumar-singh/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/niranjan._23/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon instagram"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
