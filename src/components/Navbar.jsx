import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiX, FiCode } from "react-icons/fi";
import Terminal from "./Terminal";

const navItems = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Experience",   href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact",      href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active nav item based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 w-full z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <header
          className={`relative w-full flex items-center transition-all duration-500 border-b border-primary/20 ${
            isScrolled
              ? "py-3 px-4 md:px-6 xl:px-10 bg-[#030712]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
              : "py-4 px-4 md:px-6 xl:px-10 bg-[#030712]/30 backdrop-blur-sm"
          }`}
        >
          {/* Top-left corner bracket */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 pointer-events-none" />
          {/* Top-right corner bracket */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 pointer-events-none" />
          {/* Subtle bottom glow line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

          {/* ── LEFT: Logo ── */}
          <a href="#" className="flex items-center gap-3 group shrink-0 cursor-crosshair z-10">
            {/* NK circle */}
            <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? "w-9 h-9" : "w-11 h-11"}`}>
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/40 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[3px] rounded-full bg-primary/10 border border-accent/30 shadow-[0_0_14px_rgba(59,130,246,0.3)]" />
              <FiCode size={isScrolled ? 20 : 26} className="text-white relative z-10 transition-all duration-300" />
            </div>
            {/* System / Online label */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/80">System</span>
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-accent">Online</span>
            </div>
          </a>

          {/* Vertical divider between logo and nav */}
          <div className="hidden xl:block w-[1px] h-6 bg-white/10 mx-3 xl:mx-5 shrink-0" />

          {/* ── CENTER: Nav links ── */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-0 lg:gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative group px-2 lg:px-3 py-2 flex items-center gap-1 lg:gap-1.5 overflow-hidden cursor-crosshair transition-all duration-300
                    text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.1em] lg:tracking-[0.18em]
                    ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}`}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                >
                  {/* Hover bg fill */}
                  <div className={`absolute inset-0 transition-transform duration-300 ease-out z-0
                    ${isActive ? "bg-primary/15 translate-y-0" : "bg-primary/10 translate-y-full group-hover:translate-y-0"}`}
                  />

                  {/* Active left edge bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-primary shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                  )}

                  {/* Number prefix */}
                  <span className={`z-10 font-mono text-[9px] transition-colors duration-300 ${isActive ? "text-primary" : "text-primary/30 group-hover:text-primary/60"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Brackets */}
                  <span className="text-primary/70 font-bold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-10 text-xs">[</span>
                  <span className="relative z-10">{item.name}</span>
                  <span className="text-primary/70 font-bold opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-10 text-xs">]</span>

                  {/* Bottom accent line */}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-400
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Vertical divider between nav and actions */}
          <div className="hidden xl:block w-[1px] h-6 bg-white/10 mx-2 xl:mx-6 shrink-0" />

          {/* ── RIGHT: Resume + Terminal ── */}
          <div className="hidden xl:flex items-center gap-2 xl:gap-3 shrink-0 z-10">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-2 lg:px-5 py-2 text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.1em] lg:tracking-[0.2em] text-primary border border-primary/40
                hover:text-white hover:border-primary hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] transition-all duration-300 overflow-hidden shrink-0"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="relative z-10">Resume</span>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-primary/60 group-hover:border-primary" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-primary/60 group-hover:border-primary" />
            </motion.a>

            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className="relative group w-9 h-9 border border-primary/30 text-primary flex items-center justify-center
                hover:bg-primary/10 hover:border-primary hover:text-white hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 }}
              aria-label="Open Terminal"
            >
              <FiTerminal size={15} className="relative z-10" />
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary/40 group-hover:border-white/60" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary/40 group-hover:border-white/60" />
            </motion.button>
          </div>

          {/* ── MOBILE: Terminal + Hamburger ── */}
          <div className="xl:hidden flex items-center gap-3 ml-auto relative z-10">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="w-9 h-9 bg-primary/10 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <FiTerminal size={16} />
            </button>
            <button
              className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-primary/50 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX size={20} className="text-accent" />
              ) : (
                <div className="flex flex-col gap-[5px] w-5">
                  <span className="h-[2px] bg-accent w-full transition-all duration-300" />
                  <span className="h-[2px] bg-primary w-4/5 transition-all duration-300" />
                  <span className="h-[2px] bg-secondary w-full transition-all duration-300" />
                </div>
              )}
            </button>
          </div>
        </header>
      </motion.div>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030712]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-7 xl:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 200 }}
          >
            {/* Dedicated Close Button for Overlay */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-primary hover:text-accent hover:rotate-90 transition-all duration-300 z-50"
              aria-label="Close menu"
            >
              <FiX size={32} />
            </button>

            {/* Top corner brackets for mobile menu */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 pointer-events-none" />

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-base font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors relative group w-72 text-center py-2 border-b border-white/5 hover:border-primary/30"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * index }}
              >
                <span className="text-primary/40 mr-3 text-xs group-hover:text-primary transition-colors whitespace-nowrap">
                  {"//"} {String(index + 1).padStart(2, "0")}
                </span>
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 py-3 text-sm font-mono uppercase tracking-[0.2em] text-primary border border-primary/50
                hover:border-primary hover:bg-primary/10 transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)]"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default Navbar;
