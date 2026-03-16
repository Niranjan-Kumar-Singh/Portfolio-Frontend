import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal } from "react-icons/fi";
import Terminal from "./Terminal";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 w-full z-40 transition-all duration-500 flex justify-center px-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header
          className={`relative flex items-center justify-between transition-all duration-500 overflow-hidden w-full border-b border-primary/20 ${
            isScrolled
              ? "py-3 px-6 md:px-12 bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              : "py-4 px-6 md:px-12 bg-background/20 backdrop-blur-sm"
          }`}
        >
          {/* Hardware Architectural Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-100 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-100 pointer-events-none"></div>

          {/* Logo Reactor */}
          <a href="#" className="flex items-center gap-4 group relative z-10 cursor-crosshair">
            <div className={`flex items-center justify-center relative transition-all duration-500 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
              {/* Outer Rotating Ring */}
              <motion.div 
                className={`absolute inset-0 rounded-full border border-primary/40 border-dashed transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-30"}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-1 rounded-full bg-primary/10 backdrop-blur-md border border-accent/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
              <span className={`font-mono font-bold text-white relative z-10 tracking-widest ${isScrolled ? "text-xs" : "text-sm"}`}>NK</span>
            </div>
            <span className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase hidden sm:flex flex-col">
              <span className="text-white">System</span>
              <span className="text-accent">Online</span>
            </span>
          </a>

          {/* Desktop Nav - Terminal Bracket Style */}
          <nav className="hidden md:flex gap-6 lg:gap-10 items-center relative z-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-textMuted hover:text-white transition-all duration-300 relative group px-3 py-2 flex items-center overflow-hidden cursor-crosshair"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {/* Background data block fill on hover */}
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                
                {/* Numbered Prefix */}
                <span className="text-primary/40 mr-2 group-hover:text-accent transition-colors duration-300 z-10">0{index + 1}</span>
                
                {/* Bracket Left */}
                <span className="text-primary font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1 z-10">[</span>
                
                {/* Text Payload */}
                <span className="relative z-10 group-hover:animate-pulse">{item.name}</span>
                
                {/* Bracket Right */}
                <span className="text-primary font-bold opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-1 z-10">]</span>

                {/* Glitch Border Bottom */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full z-10"></span>
              </motion.a>
            ))}
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="ml-2 px-6 py-2 md:ml-4 text-[11px] font-mono uppercase tracking-[0.2em] text-primary border border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all relative group overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Resume</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.a>

            {/* Terminal Toggle Button - Data Node */}
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className="ml-2 w-10 h-10 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:text-white transition-all shadow-none hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              aria-label="Open Terminal"
            >
              <FiTerminal size={18} className="relative z-10 group-hover:animate-spin-slow" />
              {/* Corner crosshairs on the button */}
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary group-hover:border-background"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary group-hover:border-background"></div>
            </motion.button>
          </nav>

          {/* Mobile Toggle & Terminal Container */}
          <div className="md:hidden flex items-center gap-4 relative z-10">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="w-10 h-10 bg-primary/10 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <FiTerminal size={18} />
            </button>

            <button
              className="text-textMain z-50 relative focus:outline-none w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`h-[2px] bg-accent transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : "w-full"}`}></span>
                <span className={`h-[2px] bg-primary transition-all duration-300 ${mobileMenuOpen ? "opacity-0 translate-x-2" : "w-4/5"}`}></span>
                <span className={`h-[2px] bg-secondary transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px] w-full" : "w-full"}`}></span>
              </div>
            </button>
          </div>
        </header>
      </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden h-screen"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-mono uppercase tracking-widest text-textMain hover:text-white transition-colors relative group border-b border-white/5 pb-2 w-3/4 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-primary/50 mr-3 text-sm">{'//'} 0{index + 1}</span>
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="mt-8 px-10 py-4 text-sm font-mono uppercase tracking-widest text-primary border border-primary/50 hover:border-primary hover:bg-primary/10 rounded-none transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>


      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default Navbar;
