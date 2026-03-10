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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-primary/50 flex items-center justify-center relative overflow-hidden">
              <span className="font-mono font-bold text-white text-sm relative z-10 tracking-widest">NK</span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <span className="font-mono text-xs text-textMuted tracking-[0.3em] uppercase hidden sm:block">SYS.UI</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-xs font-mono uppercase tracking-[0.15em] text-textMuted hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-primary/50 mr-2">{'//'} 0{index + 1}</span>
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="ml-4 px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-primary border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all rounded-none shadow-[0_0_10px_rgba(59,130,246,0)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Resume
            </motion.a>

            {/* Terminal Toggle Button */}
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className="ml-2 w-10 h-10 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all shadow-[0_0_10px_rgba(59,130,246,0)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              aria-label="Open Terminal"
            >
              <FiTerminal size={18} />
            </motion.button>
          </nav>

          {/* Mobile Toggle & Terminal Container */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="w-10 h-10 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <FiTerminal size={18} />
            </button>

            <button
              className="text-textMain z-50 relative focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-0.5 bg-accent transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : "w-full"}`}></span>
                <span className={`h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4/5"}`}></span>
                <span className={`h-0.5 bg-secondary transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2 w-full" : "w-full"}`}></span>
              </div>
            </button>
          </div>
        </div>

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

      </motion.header>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default Navbar;
