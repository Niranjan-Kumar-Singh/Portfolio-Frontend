/* src/components/Skills.jsx */

import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section className="skills-logos">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="logos">
          <img src="path_to_react_logo" alt="React" />
          <img src="path_to_node_logo" alt="Node.js" />
          <img src="path_to_mongo_logo" alt="MongoDB" />
          <img src="path_to_git_logo" alt="Git" />
          <img src="path_to_css_logo" alt="CSS" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;