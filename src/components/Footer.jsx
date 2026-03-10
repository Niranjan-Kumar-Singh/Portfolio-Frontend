// src/components/Footer.jsx
import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex flex-col items-center md:items-start text-textMuted text-sm font-mono">
          <p className="flex items-center gap-2">
            Built with <FiHeart className="text-secondary animate-pulse" /> by
            <span className="text-textMain font-medium hover:text-primary transition-colors cursor-pointer">Niranjan Kumar Singh</span>
          </p>
          <p className="opacity-60 text-xs mt-1">© {currentYear} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Niranjan-Kumar-Singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/niranjan-kumar-singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/niranjan.ks.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="Instagram"
          >
            <FiInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
