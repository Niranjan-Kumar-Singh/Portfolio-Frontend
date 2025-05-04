import React from 'react';
import '../styles/about.css';

import {
  FaReact, FaNodeJs, FaDatabase, FaGithub, FaJs, FaCss3Alt
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiRedux, SiTailwindcss
} from 'react-icons/si';

const About = () => {
  const skills = [
    { Icon: FaReact, color: '#61DBFB', name: 'React.js' },
    { Icon: FaNodeJs, color: '#3C873A', name: 'Node.js' },
    { Icon: SiExpress, color: '#ffffff', name: 'Express.js' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: FaJs, color: '#F0DB4F', name: 'JavaScript' },
    { Icon: SiRedux, color: '#764ABC', name: 'Redux' },
    { Icon: FaGithub, color: '#ffffff', name: 'Git & GitHub' },
    { Icon: SiTailwindcss, color: '#38B2AC', name: 'Tailwind CSS' },
    { Icon: FaCss3Alt, color: '#264de4', name: 'CSS3' },
    { Icon: FaDatabase, color: '#f29111', name: 'SQL' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title font-audiowide">About Me</h2>

        <p className="about-intro font-inter">
          Hi, I'm <strong>Niranjan Kumar Singh</strong>, a passionate final-year Computer Science student and aspiring <strong>Software Development Engineer</strong> specializing in the <strong>MERN Stack</strong>. With a strong foundation in full-stack development and a drive to solve real-world problems, I aim to build efficient, user-centric web applications that create meaningful impact.
        </p>

        <div className="about-skills">
          <h3 className="skills-title font-audiowide">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map(({ Icon, color, name }, index) => (
              <div className="about-skill-card" key={index}>
                <Icon className="about-skill-icon" style={{ color }} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
