import React from "react";
import { motion } from "framer-motion";
import "../styles/education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="education-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="education-card">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p className="edu-institute">Elitte College of Engineering, MAKAUT</p>
          <p className="edu-details">2021 – 2025 | CGPA: 8.41</p>
          <p className="edu-project">
            Final Year Project: <strong>Spicyy Food</strong>
          </p>
        </div>

        <div className="education-card">
          <h3>Senior Secondary (12th)</h3>
          <p className="edu-institute">Kendriya Vidyalaya, Sevoke Road</p>
          <p className="edu-details">CBSE | Science (with CS) | 2021</p>
          <p className="edu-score">Percentage: 80.4%</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
