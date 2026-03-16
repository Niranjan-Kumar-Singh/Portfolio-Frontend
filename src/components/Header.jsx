import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';

const MagneticButton = ({ children, className, href, target, rel, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const Header = () => {
  const { scrollY } = useScroll();
  const yShapesBg = useTransform(scrollY, [0, 500], [0, 100]);
  const yShapesFg = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <>
      <style>{`
        .scanlines {
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 51%);
          background-size: 100% 4px;
        }
        .glitch-text:hover {
          animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-20">
        
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50 scanlines opacity-50 mix-blend-overlay"></div>

        {/* Futuristic Technical Background HUD - Clean & Sharp */}
        <motion.div style={{ y: yShapesBg, willChange: "transform" }} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[30rem] h-[30rem] rounded-full border border-primary/40"
            style={{ borderStyle: 'dashed', borderWidth: '1px', borderDasharray: '4 12' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute w-[45rem] h-[45rem] rounded-full border border-secondary/30"
            style={{ borderStyle: 'dotted', borderWidth: '2px' }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60rem] h-[60rem] rounded-full border border-white/10"
          />
          {/* Subtle scanning line effect */}
          <motion.div
            className="absolute w-[45rem] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Cyberpunk Decorative Corner Data */}
        <div className="absolute top-32 left-8 md:flex flex-col gap-1 hidden pointer-events-none opacity-40 font-mono text-[10px] text-primary">
          <span>SYS.CORE // {new Date().getFullYear()}</span>
          <span>LAT: 40.7128</span>
          <span>LNG: -74.0060</span>
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            STATUS: ONLINE
          </motion.span>
        </div>
        <div className="absolute bottom-32 right-8 md:flex flex-col gap-1 hidden pointer-events-none opacity-40 font-mono text-[10px] text-secondary text-right">
          <span>MEM: O.K.</span>
          <span>UPLINK: ACTIVE</span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
            {`>_ PROCESSING`}
          </motion.span>
        </div>

        <motion.div
          style={{ willChange: "transform" }}
          className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.3em] text-primary">
              <span className="w-8 h-[1px] bg-primary/50"></span>
              <span>System Initialization</span>
              <span className="w-8 h-[1px] bg-primary/50"></span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading mb-6 leading-tight tracking-tighter cursor-crosshair group"
          >
            <span className="text-white group-hover:text-primary/90 transition-colors duration-200">Niranjan</span><br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent inline-block glitch-text"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Kumar Singh
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl text-textMuted font-mono font-light mb-8 h-10"
          >
            {'>'} <span className="text-white">
              <Typewriter
                words={['Software_Developer', 'Full_Stack_Engineer', 'Problem_Solver']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-base md:text-lg text-textMuted mb-8 leading-relaxed"
          >
            I architect <span className="text-white font-mono">scalable digital systems</span>, translating immense complexity into flawless geometry. From raw backend data architecture to pixel-perfect interface execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mb-8 md:mb-0 relative z-10"
          >
            {/* Cyberpunk HUD Button 1 */}
            <MagneticButton
              href="#projects"
              className="group relative px-8 py-4 bg-transparent text-primary font-mono uppercase tracking-[0.2em] text-sm overflow-hidden flex items-center justify-center cursor-crosshair min-w-[200px]"
            >
              {/* Bracket Left */}
              <span className="absolute left-4 text-primary font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">[</span>
              <span className="relative z-10 group-hover:animate-pulse">View Projects</span>
              {/* Bracket Right */}
              <span className="absolute right-4 text-primary font-bold opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">]</span>
              
              <div className="absolute inset-0 border border-primary/40 group-hover:border-primary/80 transition-colors"></div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              {/* Hardware dots */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-primary/50 group-hover:bg-primary"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-primary/50 group-hover:bg-primary"></div>
            </MagneticButton>

            {/* Cyberpunk HUD Button 2 */}
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              className="group relative px-8 py-4 bg-transparent text-textMain hover:text-white font-mono uppercase tracking-[0.2em] text-sm overflow-hidden flex items-center justify-center gap-3 cursor-crosshair min-w-[200px]"
            >
              <FiFileText className="relative z-10 group-hover:-translate-y-1 transition-transform" /> 
              {/* Bracket Left */}
              <span className="absolute left-2 text-white font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs">{'<'}</span>
              <span className="relative z-10">Download Resume</span>
              {/* Bracket Right */}
              <span className="absolute right-2 text-white font-bold opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs">{'>'}</span>

              <div className="absolute inset-0 border border-white/20 group-hover:border-white/60 transition-colors"></div>
              {/* Glitch slide line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>
            </MagneticButton>
          </motion.div>

          {/* Mobile Only Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex md:hidden gap-6 mt-4"
          >
            <a href="https://github.com/Niranjan-Kumar-Singh" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/niranjan-kumar-singh/" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FiLinkedin size={24} />
            </a>
            <a href="#contact" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Left Flank - Social Arch */}
        <motion.div
          className="absolute bottom-0 left-16 lg:left-32 flex-col items-center gap-6 hidden md:flex z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com/Niranjan-Kumar-Singh" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-2 transform duration-300">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/niranjan-kumar-singh/" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-2 transform duration-300">
            <FiLinkedin size={20} />
          </a>
          <a href="#contact" className="text-textMuted hover:text-primary transition-colors hover:-translate-y-2 transform duration-300">
            <FiMail size={20} />
          </a>
          <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden mt-2 group-hover:bg-primary/30 transition-colors">
            <motion.div
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Right Flank - Scroll Arch */}
        <motion.a
          href="#about"
          className="absolute bottom-0 right-16 lg:right-32 flex-col items-center gap-4 hidden md:flex z-20 cursor-pointer group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span
            className="text-[10px] font-mono text-textMuted uppercase tracking-widest group-hover:text-primary transition-colors"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden group-hover:bg-primary/30 transition-colors">
            <motion.div
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.a>
      </section>
    </>
  );
};

export default Header;
