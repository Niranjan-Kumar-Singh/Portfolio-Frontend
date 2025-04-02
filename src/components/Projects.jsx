import React from 'react';
import '../styles/Projects.css';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

const projectData = [
  {
    title: 'Spicyy Food',
    description: 'A food ordering web app with user authentication and real-time updates.',
    technologies: [FaReact, FaNodeJs, SiMongodb, SiExpress],
    githubLink: 'https://github.com/yourusername/spicyyfood',
    liveDemo: 'https://yourprojectdemo.com',
    imageUrl: 'https://yourimageurl.com/spicyyfood.png',
    demoDate: 'March 2025',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects and skills with interactive UI.',
    technologies: [SiHtml5, SiCss3, SiJavascript, FaReact],
    githubLink: 'https://github.com/yourusername/portfolio',
    liveDemo: 'https://yourportfolio.com',
    imageUrl: 'https://yourimageurl.com/portfolio.png',
    demoDate: 'April 2025',
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
  return colors[icon.name] || "#FFF"; // Default white
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-left">
              <p className="project-date" style={{ marginBottom: '5px' }}>{project.demoDate}</p>
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              </div>
            </div>
            <div className="project-right">
              <h3 className="project-title">
                {project.title} <span style={{ marginRight: '10px' }}></span>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub />
                </a>
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
    </section>
  );
};

export default Projects;
