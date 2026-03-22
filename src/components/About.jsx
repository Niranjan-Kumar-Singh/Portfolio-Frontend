import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GitHubActivity from './GitHubActivity';
import profilePic from '../assets/Niranjan.png';

const About = () => {
  const [isColored, setIsColored] = useState(false);
  return (
    <section id="about" className="pt-12 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-16 relative"
        >
          <div className="flex flex-col relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide">
              <span className="text-primary font-mono text-lg md:text-2xl mr-4 opacity-70">{'//'} 01</span>
              About_Me
            </h2>
            {/* Cyberpunk Bracket Detail */}
            <div className="absolute -left-4 -top-4 w-4 h-4 border-t-2 border-l-2 border-accent/50"></div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-md relative mt-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary/50 rotate-45"></div>
          </div>
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
            className="lg:col-span-2 relative group w-4/5 lg:w-full max-w-sm mx-auto cursor-crosshair"
            onClick={() => setIsColored(!isColored)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Primary Image Container */}
            <div className={`relative z-10 rounded-sm overflow-hidden p-0 aspect-[4/5] bg-background transition-transform duration-500 border shadow-[0_0_20px_rgba(0,0,0,0.5)] ${isColored ? '-translate-y-2 -translate-x-2 border-primary/50' : 'border-primary/20 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:border-primary/50'}`}>

              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 z-10 mix-blend-color pointer-events-none ${isColored ? 'opacity-10' : 'opacity-80 group-hover:opacity-10'}`}></div>
              <img src={profilePic} alt="Niranjan" className={`w-full h-full object-cover filter transition-all duration-700 relative z-0 ${isColored ? 'grayscale-0 sepia-0 hue-rotate-0 contrast-110' : 'grayscale contrast-125 sepia-[0.2] hue-rotate-180 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:contrast-110'}`} />
              
              {/* Animated HUD Scanner Line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-primary/90 shadow-[0_0_15px_rgba(59,130,246,1)] z-30 opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
              />
            </div>

            {/* Hardware Outline Box Behind */}
            <div className="absolute inset-0 border border-accent/40 rounded-sm translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:border-accent transition-all duration-500">
              {/* Target Corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
              
              {/* Decorative data block */}
              <div className="absolute top-4 -right-[2px] w-1 h-12 bg-accent/60"></div>
              <div className="absolute bottom-4 -left-[2px] w-1 h-8 bg-accent/60"></div>
            </div>

            {/* Static HUD Stats */}
            <div className="absolute -bottom-6 -right-6 font-mono text-[10px] text-accent/60 hidden md:flex flex-col text-right">
              <span>IMG_SRC_VERIFIED</span>
              <span>RES_4K_OPT</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <GitHubActivity username="Niranjan-Kumar-Singh" />
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

export default About;
