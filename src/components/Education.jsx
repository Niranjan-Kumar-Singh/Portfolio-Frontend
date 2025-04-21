import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "../styles/education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading font-audiowide">
        Education
      </h2>

      <div className="timeline-container">
        {/* B.Tech Card */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaUniversity size={24} color="#0ff" aria-label="University Icon" />
          </div>
          <div className="timeline-content font-inter">
            <h3 className="edu-title edu-title-animated font-orbitron">
              B.Tech in Computer Science and Engineering
            </h3>
            <br />
            <span className="edu-institute">Elitte College of Engineering · MAKAUT</span>
            <span className="edu-tags">
              <span className="edu-badge">CGPA: 8.41</span>
              <span className="edu-badge">2021 – 2025</span>
            </span>
            <p className="edu-description">
              Built a strong foundation in <span className="highlight">full-stack development</span>,
              <span className="highlight"> software engineering</span>, and
              <span className="highlight"> computer science fundamentals</span>.
            </p>
            <ul className="edu-highlights">
              <li>Final Year Project: <span className="highlight">Spicyy Food</span> – a <span className="highlight">full-stack</span> food ordering web app</li>
              <li>Finalist of Smart India Hackathon(2022)</li>
              <li>Built several small projects for hands-on learning (available on GitHub)</li>
              <li>Won 2nd prize in a photography competition in 1st year</li>
            </ul>
          </div>
        </div>

        {/* Class 12 Card */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <MdSchool size={24} color="#0ff" aria-label="School Icon" />
          </div>
          <div className="timeline-content font-inter">
            <h3 className="edu-title edu-title-animated font-orbitron">
              Senior Secondary (Class XII) – Science (CS)
            </h3>
            <br />
            <span className="edu-institute">Kendriya Vidyalaya Sevoke Road · CBSE Board</span>
            <span className="edu-tags">
              <span className="edu-badge">80.4%</span>
              <span className="edu-badge">Passed in 2021</span>
            </span>
            <p className="edu-description">
              Focused on <span className="highlight">Physics</span>, <span className="highlight">Chemistry</span>,
              <span className="highlight"> Mathematics</span>, and
              <span className="highlight"> Computer Science</span> with practical exposure to
              <span className="highlight"> Python</span> and <span className="highlight">databases</span>.
            </p>
            <ul className="edu-highlights">
              <li>Built a <span className="highlight">Library Management System</span> using <span className="highlight">Tkinter</span> and <span className="highlight">SQL</span></li>
              <li>Gained early experience in <span className="highlight">Python</span> programming</li>
              <li>Introduced to project-based learning from school level</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
