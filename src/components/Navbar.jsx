import React, { useLayoutEffect, useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Use useLayoutEffect for accurate mobile detection before paint
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track which section is active
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update scroll progress as the user scrolls
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Scroll to the specified section
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Conditionally render the navbar and progress bar for mobile
  if (isMobile) return null;

  return (
    <>
      <nav className="navbar shared-padding">
        <ul>
          {["about", "projects", "experience", "education", "contact"].map((section) => (
            <li key={section} className="nav-item">
              <a
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className={`font-audiowide ${activeSection === section ? "active" : ""}`}
              >
                <span className="nav-indicator"></span>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
