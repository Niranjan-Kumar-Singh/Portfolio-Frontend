import React, { useEffect } from 'react';
import '../styles/About.css';
import Typed from 'typed.js';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaCloud, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss } from 'react-icons/si';

const About = () => {
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: ["About Me"],
      typeSpeed: 80, // Slow speed a little bit
      backSpeed: 40,
      showCursor: true,
      cursorChar: "|", // Custom cursor character
      loop: false,
      onComplete: (self) => {
        setTimeout(() => {
          self.cursor.style.display = "none"; // Remove cursor after text is fully typed
        }, 500);
      }
    });
  
    return () => typed.destroy();
  }, []);    

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="about" id="about">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0d0d0d" },
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { enable: true, speed: 2 }
          }
        }}
      />
      <div className="container">
        <h2 className="section-title typed-text"></h2>
        <p className="intro">
          Hi, I'm <strong>Niranjan Kumar Singh</strong>, a dedicated <strong>Software Development Engineer</strong> specializing in the <strong>MERN Stack</strong>. 
          With expertise in crafting seamless and scalable web applications, I thrive on solving real-world problems through technology. 
          My goal is to build innovative, efficient, and user-centric solutions that make an impact.
        </p>

        <div className="skills">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-list">
            <div className="skill-item"><FaReact className="skill-icon" /><span>React.js</span></div>
            <div className="skill-item"><FaNodeJs className="skill-icon" /><span>Node.js</span></div>
            <div className="skill-item"><SiMongodb className="skill-icon" /><span>MongoDB</span></div>
            <div className="skill-item"><SiExpress className="skill-icon" /><span>Express.js</span></div>
            <div className="skill-item"><FaJs className="skill-icon" /><span>JavaScript (ES6+)</span></div>
            <div className="skill-item"><SiRedux className="skill-icon" /><span>Redux</span></div>
            <div className="skill-item"><FaGithub className="skill-icon" /><span>Git & GitHub</span></div>
            <div className="skill-item"><FaCloud className="skill-icon" /><span>Cloud Deployment</span></div>
            <div className="skill-item"><SiTailwindcss className="skill-icon" /><span>Tailwind CSS</span></div>
            <div className="skill-item"><FaCss3Alt className="skill-icon" /><span>CSS3</span></div>
          </div>
        </div>

        <a href="path_to_resume.pdf" className="resume-btn">Download Resume</a>
      </div>
    </section>
  );
};

export default About;