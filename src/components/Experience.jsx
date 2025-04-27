import React from "react";
import "../styles/experience.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      {/* Experience Section Heading */}
      <h2 className="experience-heading font-audiowide">Experience</h2>

      <div className="experience-card glass-effect">
        {/* Role and Organization */}
        <h3 className="experience-role font-orbitron">
          <span className="experience-underline-effect">React.js Developer Training</span>
        </h3>
        <p className="experience-org font-inter">Euphoria GenX · Onsite (Hybrid Option)</p>
        <p className="experience-duration font-inter">August 2024 – September 2024</p>

        {/* Experience Details List */}
        <ul className="experience-details font-inter">
          <li><strong>Completed</strong> a 2-month hands-on training focused on frontend development using <strong>React.js</strong>.</li>
          <li><strong>Learned</strong> the fundamentals of <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, followed by responsive UI development.</li>
          <li><strong>Built</strong> mini-projects like login pages, recipe pages, and testimonial sections using core web technologies.</li>
          <li><strong>Reimplemented</strong> all static projects in <strong>React</strong> using components, props, and hooks.</li>
          <li><strong>Integrated</strong> APIs and practiced real-world data fetching with modern React patterns.</li>
        </ul>

        {/* Technologies Learned Section */}
        <p className="experience-tech-heading font-audiowide">Technologies Learned:</p>
        <div className="experience-tech-icons">
          {/* Icons for the Technologies */}
          <FaHtml5 title="HTML5" className="experience-tech-icon html" />
          <FaCss3Alt title="CSS3" className="experience-tech-icon css" />
          <FaJs title="JavaScript" className="experience-tech-icon js" />
          <FaReact title="React.js" className="experience-tech-icon react" />
          <FaBootstrap title="Bootstrap" className="experience-tech-icon bootstrap" />
          <SiTailwindcss title="Tailwind CSS" className="experience-tech-icon tailwind" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
