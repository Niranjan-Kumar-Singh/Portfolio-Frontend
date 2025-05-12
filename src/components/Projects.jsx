import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si';

const projectData = [
  {
    title: 'Spicyy Food',
    description:
      'A full-stack food ordering system designed to streamline online food ordering, expense management, order tracking, and payments. Each user has a personalized dashboard with authentication. Built using the MERN stack as a college project, development is ongoing.',
    technologies: [FaReact, FaNodeJs, SiExpress, SiMongodb],
    githubFrontend:
      'https://github.com/Niranjan-Kumar-Singh/SpicyyFood-Frontend',
    githubBackend:
      'https://github.com/Niranjan-Kumar-Singh/SpicyyFood-Backend',
    liveDemo: 'https://spicyyfood.netlify.app/',
    demoDate: 'OCT 2024 – PRESENT',
  },
  {
    title: 'Text Counter App',
    description:
      'A React-based text utility web app that enables users to analyze text, convert case (uppercase/lowercase), clear text, and view real-time word/character counts along with estimated reading time. Features include a live preview and dark mode toggle.',
    technologies: [FaReact, SiHtml5, SiCss3, SiJavascript],
    githubLink:
      'https://github.com/Niranjan-Kumar-Singh/Text-App_reactLearning',
    liveDemo: 'https://textcounterapp.netlify.app/',
    demoDate: 'JAN – AUG 2024',
  },
  {
    title: 'NoteBook',
    description:
      'A secure note management web application allowing users to register, log in, and manage their notes. Built with React, Node.js, Express, and MongoDB (local via Compass). Backend APIs handle note CRUD operations. Not hosted due to local database setup.',
    technologies: [FaReact, FaNodeJs, SiExpress, SiMongodb],
    githubLink: 'https://github.com/Niranjan-Kumar-Singh/NoteBook_ReactJS',
    demoDate: 'FEB – APR 2024',
  },
];

const getTechColor = (TechIcon) => {
  if (TechIcon === FaReact) return '#61DBFB';
  if (TechIcon === FaNodeJs) return '#83CD29';
  if (TechIcon === SiMongodb) return '#4DB33D';
  if (TechIcon === SiExpress) return '#EEE';
  if (TechIcon === SiHtml5) return '#E34F26';
  if (TechIcon === SiCss3) return '#1572B6';
  if (TechIcon === SiJavascript) return '#F7DF1E';
  return '#FFF';
};

const getTechLabel = (TechIcon) => {
  if (TechIcon === FaReact) return 'React';
  if (TechIcon === FaNodeJs) return 'Node.js';
  if (TechIcon === SiExpress) return 'Express';
  if (TechIcon === SiMongodb) return 'MongoDB';
  if (TechIcon === SiHtml5) return 'HTML5';
  if (TechIcon === SiCss3) return 'CSS3';
  if (TechIcon === SiJavascript) return 'JavaScript';
  return 'Technology';
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="project-section-title font-audiowide">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => {
          const CardContent = (
            <>
              <div className="project-left">
                <p className="project-date font-inter">{project.demoDate}</p>
              </div>
              <div className="project-right">
                <h3 className="project-header">
                  <span
                    className="project-title"
                    onClick={(e) => {
                      if (isMobile && project.liveDemo) {
                        e.stopPropagation();
                        window.open(project.liveDemo, '_blank');
                      }
                    }}
                  >
                    {project.title}
                  </span>
                  <div className="project-links">
                    {project.githubFrontend ? (
                      <>
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link font-fira"
                          aria-label={`Frontend code of ${project.title}`}
                        >
                          <FaGithub /> Frontend
                        </a>
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link font-fira"
                          aria-label={`Backend code of ${project.title}`}
                        >
                          <FaGithub /> Backend
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link font-fira"
                        aria-label={`Code of ${project.title}`}
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link font-fira"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </h3>
                <p className="project-description font-inter">
                  {project.description}
                </p>
                <p className="project-tech-label font-fira">Technologies Used:</p>
                <div className="project-tech-stack">
                  {project.technologies.map((TechIcon, idx) => (
                    <span
                      key={idx}
                      className="project-tech-item font-fira"
                      tabIndex={0}
                      aria-label={getTechLabel(TechIcon)}
                    >
                      <TechIcon
                        className="project-tech-icon"
                        title={getTechLabel(TechIcon)}
                        style={{ color: getTechColor(TechIcon) }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          return (
            <div
              key={index}
              className="project-card"
              onClick={() => {
                if (!isMobile && project.liveDemo) {
                  window.open(project.liveDemo, '_blank');
                }
              }}
              style={{ cursor: project.liveDemo && !isMobile ? 'pointer' : 'default' }}
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <a
          href="https://github.com/Niranjan-Kumar-Singh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View more projects on GitHub"
          style={{ textDecoration: 'none' }}
        >
          <button className="more-projects-button font-fira">
            <span className="dot">
              <FaArrowRight />
            </span>
            <span className="button-text">More Projects</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
