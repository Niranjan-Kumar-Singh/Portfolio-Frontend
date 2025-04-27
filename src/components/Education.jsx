import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "../styles/education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      {/* Education Section Heading */}
      <h2 className="education-heading font-audiowide">Education</h2>

      <div className="education-timeline-container">
        {/* B.Tech Card */}
        <div className="education-timeline-item">
          <div className="education-timeline-content font-inter">
            {/* Degree Header */}
            <div className="education-degree-header">
              <div className="education-timeline-icon">
                <FaUniversity size={24} color="#0ff" aria-label="University Icon" />
              </div>
              <h3 className="education-title education-title-animated font-orbitron">
                B.Tech in Computer Science & Engineering
              </h3>
            </div>

            {/* Degree Details */}
            <div className="education-content">
              <span className="education-institute">Elitte College of Engineering · MAKAUT</span>
              <span className="education-tags">
                <span className="education-badge">CGPA: 8.41</span>
                <span className="education-badge">2021 – 2025</span>
              </span>
              <p className="education-description">
                Built a strong foundation in <span className="highlight">full-stack development</span>,
                <span className="highlight"> software engineering</span>, and
                <span className="highlight"> computer science fundamentals</span>.
              </p>

              {/* Highlights List */}
              <ul className="education-highlights">
                <li>Final Year Project: <span className="highlight">Spicyy Food</span> – a <span className="highlight">full-stack</span> food ordering web app</li>
                <li>Finalist of Smart India Hackathon(2022)</li>
                <li>Built several small projects for hands-on learning (available on GitHub)</li>
                <li>Won 2nd prize in a photography competition in 1st year</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Class 12 Card */}
        <div className="education-timeline-item">
          <div className="education-timeline-content font-inter">
            {/* Degree Header */}
            <div className="education-degree-header">
              <div className="education-timeline-icon">
                <MdSchool size={24} color="#0ff" aria-label="School Icon" />
              </div>
              <h3 className="education-title education-title-animated font-orbitron">
                Senior Secondary (Class XII) – Science (CS)
              </h3>
            </div>

            {/* Degree Details */}
            <div className="education-content">
              <span className="education-institute">Kendriya Vidyalaya Sevoke Road · CBSE Board</span>
              <span className="education-tags">
                <span className="education-badge">80.4%</span>
                <span className="education-badge">Passed in 2021</span>
              </span>
              <p className="education-description">
                Focused on <span className="highlight">Physics</span>, <span className="highlight">Chemistry</span>,
                <span className="highlight"> Mathematics</span>, and
                <span className="highlight"> Computer Science</span> with practical exposure to
                <span className="highlight"> Python</span> and <span className="highlight">databases</span>.
              </p>

              {/* Highlights List */}
              <ul className="education-highlights">
                <li>Built a <span className="highlight">Library Management System</span> using <span className="highlight">Tkinter</span> and <span className="highlight">SQL</span></li>
                <li>Gained early experience in <span className="highlight">Python</span> programming</li>
                <li>Introduced to project-based learning from school level</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
