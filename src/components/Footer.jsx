import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

// ─── Social links data ────────────────────────────────────────────────────────
const socials = [
  {
    label: "GitHub",
    icon: FiGithub,
    href: "https://github.com/Niranjan-Kumar-Singh",
    color: "#ffffff",
    tag: "SRC.HOST",
  },
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/niranjan-kumar-singh/",
    color: "#0a66c2",
    tag: "NET.LINK",
  },
  {
    label: "Instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/niranjan._23",
    color: "#e1306c",
    tag: "SOC.NODE",
  },
  {
    label: "Telegram",
    icon: FaTelegramPlane,
    href: "https://t.me/niranjan_singh",
    color: "#2ca5e0",
    tag: "MSG.LINK",
  },
  {
    label: "Email",
    icon: FiMail,
    href: "mailto:niranjansingh1419@gmail.com",
    color: "#3b82f6",
    tag: "COM.MAIL",
  },
];

// ─── Animated heartbeat canvas ────────────────────────────────────────────────
const HeartbeatLine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    let raf;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(59,130,246,0.5)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 6;
      ctx.beginPath();

      const segments = 120;
      const step = w / segments;
      const offset = (frame % segments) * step;

      for (let i = 0; i <= segments; i++) {
        const x = i * step;
        const phase = ((i + frame) % segments) / segments;
        let y = h / 2;

        // create a spike pattern at ~50% of the wave
        if (phase > 0.45 && phase < 0.48) y = h * 0.15;
        else if (phase >= 0.48 && phase < 0.52) y = h * 0.85;
        else if (phase >= 0.52 && phase < 0.55) y = h * 0.15;
        else if (phase >= 0.55 && phase < 0.58) y = h * 0.5;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame += 0.4;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={32}
      className="opacity-70"
    />
  );
};

// ─── Scroll to top ────────────────────────────────────────────────────────────
const ScrollTop = () => (
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="group relative w-10 h-10 flex items-center justify-center cursor-crosshair overflow-hidden"
    whileHover={{ scale: 1.05 }}
    title="Back to top"
  >
    <div className="absolute inset-0 border border-primary/30 group-hover:border-primary/80 transition-colors duration-300" />
    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-accent transition-all duration-300 group-hover:w-4 group-hover:h-4" />
    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-accent transition-all duration-300 group-hover:w-4 group-hover:h-4" />
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
    <FiArrowUp size={16} className="relative z-10 text-primary group-hover:text-white transition-colors duration-300" />
  </motion.button>
);

// ─── Main Footer ──────────────────────────────────────────────────────────────
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-primary/20 bg-[#020610]/80 backdrop-blur-md overflow-hidden">

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

      {/* HUD corner brackets — top */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent/60" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent/60" />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12">

        {/* ── Main footer row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 relative">

          {/* LEFT — signature block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            {/* Name badge */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-none animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
              <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase">NODE.IDENTITY</span>
            </div>
            <p className="font-heading font-bold text-xl text-white tracking-wide">
              Niranjan Kumar Singh
            </p>
            <p className="text-textMuted font-mono text-[10px] tracking-widest uppercase">
              Full Stack Developer · MERN Stack
            </p>
          </motion.div>

          {/* CENTER — heartbeat / system status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] text-primary/60 uppercase">SYS.HEARTBEAT</span>
            <HeartbeatLine />
            <span className="text-[9px] font-mono tracking-widest text-green-400/70 uppercase flex items-center gap-1.5">
              <span className="w-1 h-1 bg-green-400 rounded-full inline-block animate-pulse" />
              All Systems Operational
            </span>
          </motion.div>

          {/* RIGHT — socials + scroll-up */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] text-primary/60 uppercase">NET.LINKS</span>

            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative w-9 h-9 flex items-center justify-center cursor-crosshair overflow-hidden"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.06, ease: "backOut" }}
                    title={social.label}
                  >
                    {/* Border ring */}
                    <div
                      className="absolute inset-0 border border-white/10 group-hover:border-opacity-60 transition-all duration-300"
                      style={{ "--hover-color": social.color }}
                    />
                    <motion.div
                      className="absolute inset-0 border"
                      style={{ borderColor: "transparent" }}
                      whileHover={{ borderColor: `${social.color}80`, boxShadow: `0 0 14px ${social.color}50` }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Corner brackets */}
                    <div
                      className="absolute top-0 left-0 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-all duration-200"
                      style={{ borderColor: social.color }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-0 group-hover:opacity-100 transition-all duration-200"
                      style={{ borderColor: social.color }}
                    />

                    {/* BG tint */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ backgroundColor: `${social.color}12` }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        color: social.color,
                        filter: `drop-shadow(0 0 6px ${social.color}cc)`,
                        y: -2,
                      }}
                      className="text-textMuted relative z-10 transition-colors duration-200"
                    >
                      <Icon size={16} />
                    </motion.div>

                    {/* Tooltip */}
                    <div
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-widest uppercase bg-black/95 border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-30"
                      style={{ borderColor: `${social.color}50`, color: social.color }}
                    >
                      {social.tag}
                    </div>
                  </motion.a>
                );
              })}

              {/* Divider */}
              <div className="w-[1px] h-6 bg-white/10" />

              {/* Scroll to top */}
              <ScrollTop />
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            © {currentYear} Niranjan Kumar Singh · All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            {/* Fake system version tag */}
            <span className="font-mono text-[9px] text-primary/30 tracking-widest uppercase">
              Portfolio v2.0 — Build 2025
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-primary/40 rounded-none" />
              <span className="w-1 h-1 bg-accent/40 rounded-none" />
              <span className="w-1 h-1 bg-green-400/40 rounded-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom corner brackets */}
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent/60" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent/60" />
    </footer>
  );
};

export default Footer;
