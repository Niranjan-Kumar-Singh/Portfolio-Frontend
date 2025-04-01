/* src/components/About.jsx */

import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="intro">
          I am Niranjan Kumar Singh, a passionate Software Development Engineer (SDE) skilled in MERN Stack. 
          I specialize in building scalable full-stack applications, REST API development, and cloud-based deployment. 
          Proficient in React.js, Node.js, MongoDB, and state management (Redux), I strive to craft innovative solutions.
        </p>

        <div className="skills">
          <h3 className="skills-title">Skills</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>REST API Development</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Resume Button */}
        <a href="path_to_resume.pdf" className="resume-btn">Download Resume</a>
      </div>
    </section>
  );
};

export default About;