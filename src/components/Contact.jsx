import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

// Contact form component
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input field change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Basic email pattern check (optional but helpful)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
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
      console.error("Contact form submission failed:", error.response?.data || error.message);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Toast notifications */}
      <Toaster position="top-right" />

      {/* Section Title */}
      <h2 className="contact-heading font-audiowide">
        Contact Me
      </h2>

      {/* Contact Note */}
      <p className="contact-note font-cursive contact-note-class">
        Let’s connect! I’d love to hear from you 😊
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="glass-form font-inter">
        {/* Name Input */}
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

        {/* Email Input */}
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

        {/* Message Input */}
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

        {/* Submit Button */}
        <div className="button-container">
          <button
            type="submit"
            className={`neon-button font-inter ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send <FiSend style={{ marginLeft: "4px", transform: "rotate(45deg)" }} />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
