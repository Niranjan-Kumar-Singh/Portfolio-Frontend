import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "../styles/education.css";

const educationData = [
  {
    Icon: FaUniversity,
    title: "B.Tech in Computer Science & Engineering",
    institute: "Elitte College of Engineering · MAKAUT",
    badges: ["CGPA: 8.41", "2021 – 2025"],
    description: (
      <>
        Built a strong foundation in <span className="highlight">full-stack development</span>,
        <span className="highlight"> software engineering</span>, and
        <span className="highlight"> computer science fundamentals</span>.
      </>
    ),
    highlights: [
      <>Final Year Project: <span className="highlight">Spicyy Food</span> – a <span className="highlight">full-stack</span> food ordering web app</>,
      "Finalist of Smart India Hackathon(2022)",
      "Built several small projects for hands-on learning (available on GitHub)",
      "Won 2nd prize in a photography competition in 1st year"
    ],
  },
  {
    Icon: MdSchool,
    title: "Senior Secondary (Class XII) – Science (CS)",
    institute: "Kendriya Vidyalaya Sevoke Road · CBSE Board",
    badges: ["80.4%", "Passed in 2021"],
    description: (
      <>
        Focused on <span className="highlight">Physics</span>, <span className="highlight">Chemistry</span>,
        <span className="highlight"> Mathematics</span>, and
        <span className="highlight"> Computer Science</span> with practical exposure to
        <span className="highlight"> Python</span> and <span className="highlight">databases</span>.
      </>
    ),
    highlights: [
      <>Built a <span className="highlight">Library Management System</span> using <span className="highlight">Tkinter</span> and <span className="highlight">SQL</span></>,
      "Gained early experience in Python programming",
      "Introduced to project-based learning from school level"
    ],
  },
];

const Education = () => (
  <section className="education-section" id="education">
    <h2 className="education-heading font-audiowide">Education</h2>

    <div className="education-timeline-container">
      {educationData.map((edu, index) => (
        <div key={index} className="education-timeline-item">
          <div className="education-timeline-content font-inter">
            <div className="education-degree-header">
              <div className="education-timeline-icon">
                <edu.Icon size={24} color="#0ff" aria-label="Education Icon" />
              </div>
              <h3 className="education-title education-title-animated font-orbitron">
                {edu.title}
              </h3>
            </div>

            <div className="education-content">
              <span className="education-institute">{edu.institute}</span>
              <div className="education-tags">
                {edu.badges.map((badge, i) => (
                  <span key={i} className="education-badge">{badge}</span>
                ))}
              </div>
              <p className="education-description">{edu.description}</p>
              <ul className="education-highlights">
                {edu.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
