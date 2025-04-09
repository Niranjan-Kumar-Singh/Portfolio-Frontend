import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await axios.post(`${API_BASE}/api/contact`, formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 1500);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Toaster position="top-right" />

      <motion.h2 className="contact-heading">
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className={`glass-form ${submitted ? "fade-out" : ""}`}
      >
        <div className="input-box">
          <input
            type="text"
            name="name"
            id="name"
            aria-label="Your Name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-box">
          <input
            type="email"
            name="email"
            id="email"
            aria-label="Your Email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-box">
          <textarea
            name="message"
            id="message"
            rows="5"
            aria-label="Your Message"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
        </div>

        <div className="button-container">
          <motion.button
            type="submit"
            className={`neon-button ${isSubmitting ? "loading" : ""}`}
            whileHover={!isSubmitting ? { scale: 1.03 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "🚀 Send"}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
