import React from 'react';
import { motion } from 'framer-motion';
import GitHubActivity from './GitHubActivity';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold"><span className="text-primary font-mono text-xl md:text-3xl mr-2">01.</span>About Me</h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-3 space-y-6 text-textMuted text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Hi! I'm Niranjan, a Computer Science graduate driven by creating software that lives on the internet. My journey into tech started with a deep curiosity about how things work under the hood, leading me to build a strong foundation in <span className="text-accent hover:text-white transition-colors cursor-default">Computer Science fundamentals</span> and full-stack development.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              I am currently working as a <strong className="text-white hover:text-primary transition-colors cursor-default">Software Consultant at Supai Infotech</strong>. Here, I'm immersed in enterprise-level solutions, gaining hands-on exposure to powerful platforms like <strong className="text-white">OpenText</strong>.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              My expertise bridges both robust backend architectures and sleek, user-centric frontends. I have a profound interest in <strong>Java development</strong>, modern <strong>web technologies</strong>, and designing efficient <strong>REST APIs</strong> using JSON.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              Whether I'm writing scalable server-side logic or crafting intuitive React interfaces, I focus on writing clean, maintainable code that adds real value.
            </motion.p>
          </motion.div>

          {/* Image/Abstract Decorative Side */}
          <motion.div
            className="lg:col-span-2 relative group w-3/4 lg:w-full max-w-sm mx-auto"
            initial={{ opacity: 0, x: 30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="relative z-10 rounded-none overflow-hidden glass-card p-2 aspect-square flex items-center justify-center bg-surfaceLight/10 group-hover:-translate-y-3 group-hover:-translate-x-3 transition-transform duration-500 border border-white/5">
              {/* Decorative Abstract Code/Geometric Element as Placeholder for Portrait */}
              <div className="absolute inset-0 bg-primary/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                className="text-primary/70 text-9xl font-mono font-bold select-none z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >&lt;/&gt;</motion.div>
              <div className="absolute inset-0 bg-gradient-premium opacity-10 mix-blend-overlay"></div>
            </div>
            {/* HUD Outline Box Behind */}
            <div className="absolute inset-0 border border-primary/50 rounded-none translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:border-primary transition-all duration-500">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary -translate-y-[2px] translate-x-[2px]"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary translate-y-[2px] -translate-x-[2px]"></div>
            </div>

          </motion.div>
        </div>

        <GitHubActivity username="Niranjan-Kumar-Singh" />
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

export default About;
