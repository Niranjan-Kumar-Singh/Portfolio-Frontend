/* src/components/Projects.jsx */

import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'A short description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://yourprojectdemo.com',
      imageUrl: 'https://yourimageurl.com/project1.png',  // Example image URL
    },
    {
      title: 'Project 2',
      description: 'A short description of project 2',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemo: 'https://yourprojectdemo2.com',
      imageUrl: 'https://yourimageurl.com/project2.png',  // Example image URL
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
