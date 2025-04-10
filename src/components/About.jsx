// File: src/components/About.jsx
import React, { useEffect } from 'react';
import '../styles/about.css';
import Typed from 'typed.js';
import {
  FaReact, FaNodeJs, FaDatabase, FaGithub, FaCloud, FaJs, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiRedux, SiTailwindcss,
} from 'react-icons/si';

const About = () => {
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: ["About Me"],
      typeSpeed: 80,
      backSpeed: 40,
      showCursor: false,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title typed-text"></h2>
        <p className="intro">
          Hi, I'm <strong>Niranjan Kumar Singh</strong>, a dedicated <strong>Software Development Engineer</strong> specializing in the <strong>MERN Stack</strong>.
          With expertise in crafting seamless and scalable web applications, I thrive on solving real-world problems through technology.
          My goal is to build innovative, efficient, and user-centric solutions that make an impact.
        </p>

        <div className="skills">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <FaReact className="skill-icon" style={{ color: '#61DBFB' }} />
              <span>React.js</span>
            </div>
            <div className="skill-card">
              <FaNodeJs className="skill-icon" style={{ color: '#3C873A' }} />
              <span>Node.js</span>
            </div>
            <div className="skill-card">
              <SiExpress className="skill-icon" style={{ color: '#ffffff' }} />
              <span>Express.js</span>
            </div>
            <div className="skill-card">
              <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />
              <span>MongoDB</span>
            </div>
            <div className="skill-card">
              <FaJs className="skill-icon" style={{ color: '#F0DB4F' }} />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <SiRedux className="skill-icon" style={{ color: '#764ABC' }} />
              <span>Redux</span>
            </div>
            <div className="skill-card">
              <FaGithub className="skill-icon" style={{ color: '#ffffff' }} />
              <span>Git & GitHub</span>
            </div>
            <div className="skill-card">
              <SiTailwindcss className="skill-icon" style={{ color: '#38B2AC' }} />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon" style={{ color: '#264de4' }} />
              <span>CSS3</span>
            </div>
            <div className="skill-card">
              <FaDatabase className="skill-icon" style={{ color: '#f29111' }} />
              <span>SQL</span>
            </div>
          </div>
        </div>

        <a href="path_to_resume.pdf" className="resume-btn clean">Download Resume</a>
      </div>
    </section>
  );
};

export default About;
