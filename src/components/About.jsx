import React from 'react';
import '../styles/about.css';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGithub, FaCloud, FaJs, FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiRedux, SiTailwindcss 
} from 'react-icons/si';

// About section component
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Title */}
        <h2 className="about-title font-audiowide">
          About Me
        </h2>

        {/* Introduction Paragraph */}
        <p className="about-intro font-inter">
          Hi, I'm <strong>Niranjan Kumar Singh</strong>, a dedicated <strong>Software Development Engineer</strong> specializing in the <strong>MERN Stack</strong>.
          With expertise in crafting seamless and scalable web applications, I thrive on solving real-world problems through technology.
          My goal is to build innovative, efficient, and user-centric solutions that make an impact.
        </p>

        {/* Technical Skills Section */}
        <div className="aboout-skills">
          <h3 className="skills-title font-audiowide">Technical Skills</h3>

          <div className="skills-grid">
            {/* Skill Cards */}
            <div className="about-skill-card">
              <FaReact className="about-skill-icon" style={{ color: '#61DBFB' }} />
              <span className="font-inter">React.js</span>
            </div>

            <div className="about-skill-card">
              <FaNodeJs className="about-skill-icon" style={{ color: '#3C873A' }} />
              <span className="font-inter">Node.js</span>
            </div>

            <div className="about-skill-card">
              <SiExpress className="about-skill-icon" style={{ color: '#ffffff' }} />
              <span className="font-inter">Express.js</span>
            </div>

            <div className="about-skill-card">
              <SiMongodb className="about-skill-icon" style={{ color: '#47A248' }} />
              <span className="font-inter">MongoDB</span>
            </div>

            <div className="about-skill-card">
              <FaJs className="about-skill-icon" style={{ color: '#F0DB4F' }} />
              <span className="font-inter">JavaScript</span>
            </div>

            <div className="about-skill-card">
              <SiRedux className="about-skill-icon" style={{ color: '#764ABC' }} />
              <span className="font-inter">Redux</span>
            </div>

            <div className="about-skill-card">
              <FaGithub className="about-skill-icon" style={{ color: '#ffffff' }} />
              <span className="font-inter">Git & GitHub</span>
            </div>

            <div className="about-skill-card">
              <SiTailwindcss className="about-skill-icon" style={{ color: '#38B2AC' }} />
              <span className="font-inter">Tailwind CSS</span>
            </div>

            <div className="about-skill-card">
              <FaCss3Alt className="about-skill-icon" style={{ color: '#264de4' }} />
              <span className="font-inter">CSS3</span>
            </div>

            <div className="about-skill-card">
              <FaDatabase className="about-skill-icon" style={{ color: '#f29111' }} />
              <span className="font-inter">SQL</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
