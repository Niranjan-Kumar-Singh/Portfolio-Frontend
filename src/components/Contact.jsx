import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import { FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";

// ─── Contact channels ─────────────────────────────────────────────────────────
const contactChannels = [
  {
    id: "email",
    tag: "EMAIL_COMM",
    icon: FiMail,
    label: "niranjansingh1419@gmail.com",
    href: "mailto:niranjansingh1419@gmail.com",
    color: "#3b82f6",
    pulse: true,
  },
  {
    id: "telegram",
    tag: "MSG.CHANNEL",
    icon: FaTelegramPlane,
    label: "@niranjan023",
    href: "https://t.me/niranjan023",
    color: "#2ca5e0",
    pulse: false,
  },
  {
    id: "linkedin",
    tag: "NET.PROFILE",
    icon: FaLinkedin,
    label: "niranjan-kumar-singh",
    href: "https://www.linkedin.com/in/niranjan-kumar-singh/",
    color: "#0a66c2",
    pulse: false,
  },
  {
    id: "github",
    tag: "SRC.HOST",
    icon: FaGithub,
    label: "Niranjan-Kumar-Singh",
    href: "https://github.com/Niranjan-Kumar-Singh",
    color: "#ffffff",
    pulse: false,
  },
  {
    id: "location",
    tag: "NODE_LOCATION",
    icon: FiMapPin,
    label: "Bengaluru, Karnataka, India",
    href: null,
    color: "#8b5cf6",
    pulse: false,
  },
];

// ─── Field input component ────────────────────────────────────────────────────
const TerminalField = ({ id, name, label, type = "text", value, onChange, as = "input", rows }) => {
  const [focused, setFocused] = useState(false);
  const Tag = as;

  return (
    <div className="flex flex-col gap-1.5 relative group/field">
      <div className="flex items-center gap-2 mb-0.5">
        <motion.div
          className="w-1.5 h-1.5 rounded-none"
          animate={{
            backgroundColor: focused ? "#3b82f6" : "rgba(148,163,184,0.3)",
            boxShadow: focused ? "0 0 8px rgba(59,130,246,0.8)" : "none",
          }}
          transition={{ duration: 0.2 }}
        />
        <label
          htmlFor={id}
          className="text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-200"
          style={{ color: focused ? "#3b82f6" : "rgba(148,163,184,0.7)" }}
        >
          {label}
        </label>
        <AnimatePresence>
          {focused && (
            <motion.span
              className="text-[9px] font-mono text-green-400/70 tracking-widest ml-auto"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              ACTIVE
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        <Tag
          id={id}
          name={name}
          type={type === "text" || type === "email" ? type : undefined}
          value={value}
          onChange={onChange}
          required
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent rounded-none px-3 py-2.5 text-textMain font-mono text-sm focus:outline-none resize-none transition-all duration-200 border"
          style={{
            borderColor: focused ? "rgba(59,130,246,0.6)" : "rgba(255,255,255,0.1)",
            boxShadow: focused ? "0 0 12px rgba(59,130,246,0.15), inset 0 0 8px rgba(59,130,246,0.05)" : "none",
            backgroundColor: focused ? "rgba(59,130,246,0.04)" : "transparent",
          }}
          placeholder="_"
        />
        
        {/* Corner brackets animate on focus */}
        <motion.div
          className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l pointer-events-none"
          animate={{ borderColor: focused ? "#3b82f6" : "transparent", opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r pointer-events-none"
          animate={{ borderColor: focused ? "#3b82f6" : "transparent", opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
};

// ─── Contact channel row ──────────────────────────────────────────────────────
const ChannelRow = ({ channel, delay = 0 }) => {
  const Icon = channel.icon;
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group/ch flex items-center gap-4 cursor-crosshair relative"
    >
      {/* Icon box */}
      <motion.div
        className="w-12 h-12 flex items-center justify-center flex-shrink-0 border relative overflow-hidden transition-colors duration-300"
        style={{ borderColor: `${channel.color}30`, backgroundColor: `${channel.color}08` }}
        whileHover={{
          borderColor: `${channel.color}80`,
          backgroundColor: `${channel.color}15`,
          boxShadow: `0 0 18px ${channel.color}30`,
        }}
      >
        {/* corner brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l opacity-0 group-hover/ch:opacity-100 transition-opacity duration-200" style={{ borderColor: channel.color }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-0 group-hover/ch:opacity-100 transition-opacity duration-200" style={{ borderColor: channel.color }} />
        <motion.div whileHover={{ scale: 1.2, filter: `drop-shadow(0 0 6px ${channel.color})` }}>
          <Icon size={18} style={{ color: channel.color }} />
        </motion.div>
        {/* pulse dot */}
        {channel.pulse && (
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: channel.color, opacity: 0.7 }} />
        )}
      </motion.div>

      {/* Info */}
      <div className="min-w-0">
        <p className="text-[9px] font-mono tracking-[0.25em] uppercase mb-0.5" style={{ color: channel.color }}>
          {channel.tag}
        </p>
        <p className="font-mono text-sm text-textMain truncate group-hover/ch:text-white transition-colors duration-200">
          {channel.label}
        </p>
      </div>

      {/* Arrow indicator for links */}
      {channel.href && (
        <motion.div
          className="ml-auto opacity-0 group-hover/ch:opacity-100 transition-opacity duration-300 flex-shrink-0"
          style={{ color: channel.color }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );

  return channel.href ? (
    <a href={channel.href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : content;
};

// ─── Main component ───────────────────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
        toast.success("Message transmitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Transmission failed.");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error.response?.data || error.message);
      toast.error("Connection error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-24 relative">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0a0f1e",
            color: "#fff",
            border: "1px solid rgba(59,130,246,0.3)",
            fontFamily: "monospace",
            fontSize: "12px",
            letterSpacing: "0.05em",
          },
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-16 relative w-full"
        >
          <div className="flex flex-col relative w-full items-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide text-center">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{"// 06"}</span>
              Secure_Connection
            </h2>
          </div>
          <p className="text-textMuted font-mono text-sm tracking-widest text-center max-w-xl">
            OPEN_FOR_OPPORTUNITIES · RESPONSE_TIME &lt; 24H
          </p>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full max-w-md relative mt-1">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
        </motion.div>

        {/* ── Two column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* LEFT — Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Short bio / pitch */}
            <div className="relative p-5 border border-primary/15 bg-primary/5 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/60" />
              <p className="text-[10px] font-mono text-primary/70 tracking-widest uppercase mb-2">SYS.MESSAGE</p>
              <p className="text-textMuted text-sm leading-relaxed font-mono">
                Whether you have a project proposal, a collaboration idea, or just want to connect — my communication channels are securely open. Feel free to reach out via the terminal form below or through any of my direct channels.
              </p>
            </div>

            {/* Channel list */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-none shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-primary/60">OPEN_CHANNELS</span>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
              {contactChannels.map((ch, i) => (
                <ChannelRow key={ch.id} channel={ch} delay={0.2 + i * 0.07} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Terminal form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-5 sm:p-7 md:p-9 flex flex-col gap-6 sm:gap-7 bg-[#030712]/70 border border-primary/20 hover:border-primary/50 transition-colors duration-300 backdrop-blur-md group shadow-[0_0_30px_rgba(0,0,0,0.6)]"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent/70 group-hover:border-accent transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent/70 group-hover:border-accent transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent/70 group-hover:border-accent transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent/70 group-hover:border-accent transition-colors duration-300" />

              {/* Scanner line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Terminal header bar */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/5 relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                  TERMINAL — COMPOSE_MESSAGE
                </span>
              </div>

              {/* Fields */}
              <TerminalField
                id="name" name="name" label="Data_Subject_Name"
                value={formData.name} onChange={handleChange}
              />
              <TerminalField
                id="email" name="email" label="Return_Address" type="email"
                value={formData.email} onChange={handleChange}
              />
              <TerminalField
                id="message" name="message" label="Payload_Content"
                as="textarea" rows={4}
                value={formData.message} onChange={handleChange}
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative inline-flex mt-2 px-10 py-4 bg-transparent text-primary hover:text-white font-mono uppercase tracking-[0.2em] text-sm overflow-hidden items-center justify-center cursor-crosshair disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors duration-300"
              >
                <span className="absolute left-4 text-primary font-bold opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">[</span>
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting
                    ? <><span className="animate-pulse">TRANSMITTING</span><span className="animate-bounce">...</span></>
                    : <>{`EXECUTE_PAYLOAD`} <FiSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" /></>
                  }
                </span>
                <span className="absolute right-4 text-primary font-bold opacity-0 translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">]</span>
                <div className="absolute inset-0 border border-primary/40 group-hover/btn:border-primary transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/0 group-hover/btn:bg-primary/10 transition-colors duration-300" />
                <div className="absolute top-1 left-1 w-1 h-1 bg-primary/40 group-hover/btn:bg-primary transition-colors" />
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-primary/40 group-hover/btn:bg-primary transition-colors" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
