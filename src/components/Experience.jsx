import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceData = [
  {
    role: "Software Consultant",
    company: "Supai Infotech",
    date: "Current",
    description: "Developing and integrating scalable enterprise-level software solutions. Gaining extensive hands-on exposure to OpenText platforms, designing robust REST APIs using JSON, and working closely with clients to deliver high-performance web applications.",
    tech: ["Java", "OpenText", "REST APIs", "JSON", "JavaScript"]
  },
  {
    role: "React.js Developer Training",
    company: "Euphoria GenX",
    date: "Aug 2024 – Sep 2024",
    description: "Completed an intensive 2-month hands-on training focused on frontend development. Built several mini-projects and reimplemented static applications into dynamic React interfaces using hooks, components, and state management strategies.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  }
];

const Experience = () => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold"><span className="text-primary font-mono text-xl md:text-3xl mr-2">04.</span>Experience</h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </motion.div>

        <div className="relative ml-4 md:ml-6 space-y-16 pb-8" ref={lineRef}>
          {/* Animated Timeline Connector */}
          <motion.div
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"
            initial={{ height: 0 }}
            animate={isLineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Glowing Timeline Node - Cyber Diamond */}
              <motion.div
                className="absolute w-4 h-4 bg-background border border-primary rounded-none rotate-45 -left-[7px] top-2 z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, boxShadow: "0 0 10px rgba(59,130,246,0.8)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: (idx * 0.2) + 0.3 }}
                whileHover={{ scale: 1.5, rotate: 90 }}
              />

              <div className="glass-card p-6 md:p-8 rounded-none border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden bg-background/40">
                {/* Structural corner lines */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-textMain group-hover:text-primary transition-colors">{exp.role}</h3>
                <h4 className="text-lg text-primary font-medium mb-1">{exp.company}</h4>
                <p className="font-mono text-sm text-textMuted mb-6">{exp.date}</p>

                <p className="text-textMuted leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="flex flex-wrap gap-3 font-mono text-xs text-textMuted">
                  {exp.tech.map(tech => (
                    <motion.li
                      key={tech}
                      className="bg-white/5 px-2 py-1 rounded-none border border-white/10 text-[10px] uppercase tracking-wider"
                      whileHover={{ color: "#3b82f6", borderColor: "rgba(59,130,246,0.5)" }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
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
