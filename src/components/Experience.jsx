import React from "react";
import "../styles/experience.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="experience-heading section-title orbitron-font"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="experience-card glass-effect">
        <h3 className="experience-role orbitron-font">React.js Developer Training</h3>
        <p className="experience-org inter-font">Euphoria GenX · Onsite (Hybrid Option)</p>
        <p className="experience-duration inter-font">August 2024 – September 2024</p>
        <ul className="experience-details inter-font">
          <li><strong>Completed</strong> a 2-month hands-on training focused on frontend development using <strong>React.js</strong>.</li>
          <li><strong>Learned</strong> the fundamentals of <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, followed by responsive UI development.</li>
          <li><strong>Built</strong> mini-projects like login pages, recipe pages, and testimonial sections using core web technologies.</li>
          <li><strong>Reimplemented</strong> all static projects in <strong>React</strong> using components, props, and hooks.</li>
          <li><strong>Integrated</strong> APIs and practiced real-world data fetching with modern React patterns.</li>
        </ul>

        <p className="tech-heading fugaz-font">Technologies Learned:</p>
        <div className="exp-tech-icons">
          <FaHtml5 title="HTML5" className="exp-tech-icon html" />
          <FaCss3Alt title="CSS3" className="exp-tech-icon css" />
          <FaJs title="JavaScript" className="exp-tech-icon js" />
          <FaReact title="React.js" className="exp-tech-icon react" />
          <FaBootstrap title="Bootstrap" className="exp-tech-icon bootstrap" />
          <SiTailwindcss title="Tailwind CSS" className="exp-tech-icon tailwind" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
