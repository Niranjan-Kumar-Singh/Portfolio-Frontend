// src/components/Contact.jsx
import React, { useState, useCallback } from "react";
import "../styles/contact.css";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await axios.post(`${API_BASE}/api/contact`, formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#0ff" },
            links: {
              color: "#0ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 40,
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="particles-background"
      />

      <Toaster position="top-right" />

      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="glass-form"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="input-box">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Name</label>
        </div>
        <div className="input-box">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          <label>Message</label>
        </div>
        <motion.button type="submit" className="neon-button" whileHover={{ scale: 1.05 }}>
          🚀 Send
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
