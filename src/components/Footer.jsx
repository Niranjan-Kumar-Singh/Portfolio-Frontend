// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="left-footer">
      <div className="footer-horizontal">
        <a
          href="https://github.com/Niranjan-Kumar-Singh"
          target="_self"  // Use _self instead of _blank
          rel="noopener noreferrer"
          className="footer-icon github"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/niranjan-kumar-singh/"
          target="_self"  // Use _self instead of _blank
          rel="noopener noreferrer"
          className="footer-icon linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/niranjan._23/"
          target="_self"  // Use _self instead of _blank
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
