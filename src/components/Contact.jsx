import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

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
    <section id="contact" className="pt-12 pb-24 relative">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1e1e1e',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      }} />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 mb-16 relative w-full"
        >
          <div className="flex flex-col relative w-full items-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide text-center">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'//'} 05</span>
              Secure_Connection
            </h2>
            {/* Cyberpunk Bracket Detail */}
            <div className="absolute left-1/2 -translate-x-[150%] -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50 hidden md:block"></div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full max-w-md relative mt-2">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6">Let's Connect!</h3>
            <p className="text-textMuted text-lg leading-relaxed mb-10">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors cursor-default group/contact">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center text-primary bg-primary/5 group-hover/contact:bg-primary/20 transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-primary mb-1">Email_Comm</p>
                  <p className="font-mono text-sm text-textMain">niranjansingh1419@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-textMuted hover:text-accent transition-colors cursor-default group/contact">
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center text-accent bg-accent/5 group-hover/contact:bg-accent/20 transition-colors">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-1">Node_Location</p>
                  <p className="font-mono text-sm text-textMain">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-none flex flex-col gap-8 relative overflow-hidden group bg-[#030712]/60 filter backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              {/* HUD Corners */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent transition-all duration-300 group-hover:w-6 group-hover:h-6 pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent transition-all duration-300 group-hover:w-6 group-hover:h-6 pointer-events-none z-20"></div>

              {/* Animated Background Data Pulse */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-textMuted transition-colors group-focus-within:text-primary">Data_Subject_Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/20 rounded-none px-0 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-0 transition-all font-mono text-sm"
                  placeholder="_"
                />
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-textMuted transition-colors group-focus-within:text-primary">Return_Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/20 rounded-none px-0 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-0 transition-all font-mono text-sm"
                  placeholder="_"
                />
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-textMuted transition-colors group-focus-within:text-primary">Payload_Content</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/20 rounded-none px-0 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-0 transition-all font-mono text-sm resize-none"
                  placeholder="_"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative inline-flex mt-6 px-10 py-4 bg-transparent text-primary hover:text-white font-mono uppercase tracking-[0.2em] text-sm overflow-hidden items-center justify-center cursor-crosshair disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {/* Bracket Left */}
                <span className="absolute left-4 text-primary font-bold opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">[</span>
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? "TRANSMITTING..." : <>EXECUTE_PAYLOAD <FiSend className={isSubmitting ? "" : "group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"} /></>}
                </span>
                {/* Bracket Right */}
                <span className="absolute right-4 text-primary font-bold opacity-0 translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">]</span>

                <div className="absolute inset-0 border border-primary/40 group-hover/btn:border-primary/80 transition-colors"></div>
                <div className="absolute inset-0 bg-primary/0 group-hover/btn:bg-primary/10 transition-colors"></div>
                {/* Hardware dots */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-primary/50 group-hover/btn:bg-primary"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-primary/50 group-hover/btn:bg-primary"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
