import React from 'react';
import '../styles/projects.css';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa';

const projectData = [
  {
    title: 'Spicyy Food',
    description: 'A comprehensive food ordering web application featuring user authentication and real-time order tracking. The frontend is built with React, while the backend utilizes Node.js, Express, and MongoDB.',
    technologies: [FaReact, FaNodeJs, SiExpress, SiMongodb],
    githubFrontend: 'https://github.com/Niranjan-Kumar-Singh/SpicyyFood-Frontend',
    githubBackend: 'https://github.com/Niranjan-Kumar-Singh/SpicyyFood-Backend',
    liveDemo: 'https://spicyyfood.netlify.app/',
    demoDate: 'OCT 2024 – PRESENT',
  },
  {
    title: 'Text Counter App',
    description: 'A React-based application that provides real-time text analysis, including word and character counts, as well as readability scores. It offers a responsive design for optimal user experience across devices.',
    technologies: [FaReact, SiHtml5, SiCss3, SiJavascript],
    githubLink: 'https://github.com/Niranjan-Kumar-Singh/Text-App_reactLearning',
    liveDemo: 'https://textcounterapp.netlify.app/',
    demoDate: 'JAN – AUG 2024',
  },
  {
    title: 'Weather Forecast App',
    description: 'A web application that delivers real-time weather updates using the OpenWeatherMap API. Users can search for weather details by city and view data such as temperature, humidity, and wind speed. Built with HTML, CSS, and JavaScript.',
    technologies: [SiHtml5, SiCss3, SiJavascript],
    githubLink: 'https://github.com/Niranjan-Kumar-Singh/WeatherForecast',
    liveDemo: 'https://w-forecasting.netlify.app/',
    demoDate: 'May 2023',
  },
];

const getTechColor = (icon) => {
  const colors = {
    FaReact: "#61DBFB",
    FaNodeJs: "#83CD29",
    SiMongodb: "#4DB33D",
    SiExpress: "#EEE",
    SiHtml5: "#E34F26",
    SiCss3: "#1572B6",
    SiJavascript: "#F7DF1E",
  };
  return colors[icon.name] || "#FFF";
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-left">
              <p className="project-date">{project.demoDate}</p>
            </div>
            <div className="project-right">
              <h3>
                <span className="project-title">{project.title}</span>
                <span style={{ marginRight: '10px' }}></span>
                {project.githubFrontend ? (
                  <>
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaGithub /> Frontend
                    </a>
                    <span style={{ marginRight: '10px' }}></span>
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaGithub /> Backend
                    </a>
                  </>
                ) : (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub />
                  </a>
                )}
                <span style={{ marginRight: '10px' }}></span>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaExternalLinkAlt />
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((TechIcon, idx) => (
                  <span key={idx} className="tech-item">
                    <TechIcon className="tech-icon" style={{ color: getTechColor(TechIcon) }} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button with Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <button className="more-projects-button">
          <span className="dot">
            <FaArrowRight />
          </span>
          <span className="button-text">More Projects</span>
        </button>
      </div>


    </section>
  );
};

export default Projects;
