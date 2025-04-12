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
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/niranjan-kumar-singh/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/niranjan._23/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
