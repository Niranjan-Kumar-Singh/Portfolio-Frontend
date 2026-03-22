import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceData = [
  {
    role: "Software Consultant",
    company: "Supai Infotech",
    type: "Product Company",
    date: "Mar 2026 – Present",
    status: "active",
    description: "Developing and integrating scalable enterprise-level software solutions. Gaining extensive hands-on exposure to OpenText platforms, designing robust REST APIs using JSON, and working closely with clients to deliver high-performance web applications.",
    tech: ["Java", "OpenText", "REST APIs", "JSON", "JavaScript"]
  },
  {
    role: "React.js Developer Training",
    company: "Euphoria GenX",
    type: "Training Institute",
    date: "Aug 2024 – Sep 2024",
    status: "completed",
    description: "Completed an intensive 2-month hands-on training focused on frontend development. Built several mini-projects and reimplemented static applications into dynamic React interfaces using hooks, components, and state management strategies.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  }
];


const Experience = () => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="pt-12 pb-24 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16 relative"
        >
          <div className="flex flex-col relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'//'} 04</span>
              Experience_Log
            </h2>
            {/* Cyberpunk Bracket Detail */}
            <div className="absolute -left-4 -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50"></div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-md relative mt-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary/50 rotate-45"></div>
          </div>
        </motion.div>

        <div className="relative ml-2 sm:ml-4 md:ml-6 space-y-12 sm:space-y-16 pb-8" ref={lineRef}>
          {/* Animated Timeline Connector */}
          <motion.div
            className="absolute left-[0px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-6 sm:pl-8 md:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Glowing Timeline Node - Cyber Diamond: amber for achievements, blue for work */}
              <motion.div
                className={`absolute w-4 h-4 bg-background border-2 rounded-none rotate-45 -left-[7px] top-6 z-10 cursor-crosshair transition-colors duration-300 ${exp.badge ? 'border-yellow-400' : 'border-primary'}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, boxShadow: exp.badge ? "0 0 10px rgba(250,204,21,0.8)" : "0 0 10px rgba(59,130,246,0.8)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: (idx * 0.2) + 0.3 }}
                whileHover={{ scale: 1.5, rotate: 90 }}
              >
                <div className={`absolute inset-0 m-auto w-1 h-1 rotate-45 animate-pulse ${exp.badge ? 'bg-yellow-400' : 'bg-accent'}`}></div>
              </motion.div>

              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-none border border-primary/20 hover:border-primary/60 transition-colors group relative overflow-hidden bg-[#030712]/60 filter backdrop-blur-md cursor-crosshair shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                {/* Structural corner lines */}
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-all duration-300 group-hover:w-6 group-hover:h-6 pointer-events-none z-20 ${exp.badge ? 'border-yellow-400/60' : 'border-accent'}`}></div>
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-all duration-300 group-hover:w-6 group-hover:h-6 pointer-events-none z-20 ${exp.badge ? 'border-yellow-400/60' : 'border-accent'}`}></div>

                {/* Animated Scanner Focus Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>

                {/* Animated Background Data Pulse */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${exp.badge ? 'bg-yellow-400/5' : 'bg-primary/5'}`}></div>

                <div className="relative z-10">
                  {/* Role + optional government badge */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-textMain group-hover:text-primary transition-colors flex items-center">
                      <span className="text-primary font-mono text-sm mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{'>>'}</span>
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 border border-yellow-400/40 text-yellow-400 bg-yellow-400/10 flex-shrink-0">
                        ★ {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h4 className="text-lg text-primary font-medium drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">{ exp.company}</h4>
                    {exp.type && (
                      <span className="text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 border border-primary/30 text-primary/60 bg-primary/5">{exp.type}</span>
                    )}
                    {exp.status === 'active' && (
                      <span className="flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]"/>
                        ACTIVE
                      </span>
                    )}
                    {exp.status === 'completed' && (
                      <span className="text-[9px] font-mono tracking-widest uppercase text-white/25">COMPLETED</span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-textMuted mb-6 tracking-widest uppercase border-b border-white/5 pb-2 inline-block"><span className="text-accent">TIME:</span> {exp.date}</p>

                  <p className="text-textMuted leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-textMuted">
                    {exp.tech.map(tech => (
                      <motion.li
                        key={tech}
                        className="bg-primary/5 px-2 py-1 rounded-none border border-primary/20 text-[10px] uppercase tracking-wider relative group/badge overflow-hidden"
                        whileHover={{ color: "#3b82f6", borderColor: "rgba(59,130,246,0.8)" }}
                      >
                        <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover/badge:translate-x-0 transition-transform duration-300"></div>
                        <span className="relative z-10">{tech}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cyber Section Demarcation */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center pointer-events-none opacity-50">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute w-32 h-[1px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        <div className="absolute w-2 h-[3px] bg-accent"></div>
      </div>
    </section>
  );
};

export default Experience;
