import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: "SpicyyFood",
    description: "A full-stack restaurant web application designed to streamline online food ordering, expense management, order tracking, and payments. Features a personalized dashboard with secure authentication.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Niranjan-Kumar-Singh/SpicyyFood-Frontend",
    liveUrl: "https://spicyyfood.netlify.app/",
    isFeatured: true
  },
  {
    title: "NoteBook App",
    description: "A secure note management web application allowing users to register, log in, and manage their personal notes efficiently. Focuses on fast CRUD operations.",
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Niranjan-Kumar-Singh/NoteBook_ReactJS",
    liveUrl: "",
    isFeatured: false
  },
  {
    title: "TaskBuddy",
    description: "An intuitive task management application designed to boost productivity by helping users organize, track, and complete daily tasks seamlessly.",
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    github: "https://github.com/Niranjan-Kumar-Singh",
    liveUrl: "",
    isFeatured: false
  },
  {
    title: "Rock Paper Scissors",
    description: "A classic strategy game built with pure vanilla JavaScript featuring score tracking, dynamic UI updates, and an unbeatable (or very lucky) AI opponent.",
    techStack: ["JavaScript", "DOM Manipulation", "CSS3"],
    github: "https://github.com/Niranjan-Kumar-Singh",
    liveUrl: "",
    isFeatured: false
  },
  {
    title: "Tic Tac Toe",
    description: "A refined implementation of the traditional Tic Tac Toe game. It includes winning logic detection, interactive responsive boards, and reset functionality.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Niranjan-Kumar-Singh",
    liveUrl: "",
    isFeatured: false
  }
];

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`[perspective:1000px] ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold"><span className="text-primary font-mono text-xl md:text-3xl mr-2">03.</span>Projects</h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-sm"></div>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-20">
          {projectsData.filter(p => p.isFeatured).map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group/feature"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard className="lg:col-span-7 relative cursor-pointer lg:order-1 order-2">
                <div className="absolute -inset-[1px] bg-primary/30 border border-primary/50 opacity-0 group-hover/feature:opacity-100 transition duration-300"></div>
                <div className="w-full h-64 md:h-96 bg-surfaceLight border border-white/10 rounded-none overflow-hidden flex items-center justify-center relative group/image z-10 transition-colors group-hover/feature:border-primary/50">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover/image:opacity-0 transition-opacity duration-500 z-10"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-premium opacity-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <span className="text-4xl text-textMuted font-heading font-bold opacity-30 z-20 group-hover/image:scale-110 transition-transform duration-500">{project.title}</span>
                </div>
              </TiltCard>

              <div className="lg:col-span-5 relative z-20 text-left lg:text-right lg:order-2 order-1 lg:-ml-12 pointer-events-none">
                <p className="text-accent font-mono text-sm mb-2 pointer-events-auto">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-textMain hover:text-primary transition-colors cursor-pointer pointer-events-auto">{project.title}</h3>

                <div className="glass-card p-6 rounded-none border-l-2 border-primary/50 hover:border-primary text-textMuted text-sm md:text-base mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] leading-relaxed text-left lg:text-right pointer-events-auto relative overflow-hidden group/card bg-background/80 transition-colors">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  {project.description}
                </div>

                <ul className="flex flex-wrap gap-4 text-sm font-mono text-textMuted mb-6 lg:justify-end pointer-events-auto">
                  {project.techStack.map((tech, i) => (
                    <motion.li
                      key={tech}
                      className="bg-primary/10 px-3 py-1 rounded text-primary border border-primary/20 cursor-default"
                      whileHover={{ y: -5, boxShadow: "0 0 10px rgba(59,130,246,0.5)" }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 lg:justify-end text-textMain pointer-events-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <FiGithub size={22} className="hover:animate-pulse" />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                      <FiExternalLink size={22} className="hover:animate-pulse" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          className="text-2xl font-bold font-heading text-center mb-10 text-textMain"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Other Noteworthy Projects
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.filter(p => !p.isFeatured).map((project, idx) => (
            <TiltCard key={project.title} className="group h-full">
              <motion.div
                className="relative h-full glass-card p-6 flex flex-col justify-between rounded-none transition-all duration-300 z-10 bg-background/50 border border-white/5 group-hover:border-primary/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Structural HUD border effect */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="z-10">
                  <div className="flex justify-between items-center mb-6">
                    <motion.div
                      className="text-primary text-4xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      📁
                    </motion.div>
                    <div className="flex gap-4 text-textMuted">
                      {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors group-hover:text-primary"><FiGithub size={20} /></a>}
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors group-hover:text-primary"><FiExternalLink size={20} /></a>}
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3 text-textMain group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-textMuted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-textMuted opacity-80 mt-auto z-10 relative">
                  {project.techStack.map(tech => (
                    <motion.li key={tech} whileHover={{ color: "#3b82f6" }} className="cursor-default">
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/Niranjan-Kumar-Singh?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-none font-mono uppercase tracking-widest text-sm transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            View Full Archive
          </motion.a>
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

export default Projects;
