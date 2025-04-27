import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorLight from "./components/CursorLight";
import ParticlesBackground from "./components/ParticlesBackground";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({ duration: 1000, once: true });

    // Check if the device is mobile
    const mobileCheck = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    if (mobileCheck) return; // Skip custom scroll handling for mobile

    // Handle custom scroll behavior for desktop
    const sidebar = document.querySelector(".sidebar");
    const contentWrapper = document.querySelector(".content-wrapper");

    const handleSidebarScroll = (e) => {
      if (contentWrapper) {
        const scrollSpeed = 0.9;
        const deltaY = e.deltaY;
    
        // Throttling scroll behavior
        if (Math.abs(deltaY) > 20) {
          contentWrapper.scrollTop += deltaY * scrollSpeed;
        }
      }
    };    

    // Attach wheel event listener to sidebar for scroll synchronization
    sidebar?.addEventListener("wheel", handleSidebarScroll, { passive: false });

    return () => {
      // Cleanup event listener when the component is unmounted
      sidebar?.removeEventListener("wheel", handleSidebarScroll);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Conditionally render Cursor and Particles for desktop */}
      {!isMobile && (
        <>
          <CursorLight />
          <ParticlesBackground />
        </>
      )}

      <aside className="sidebar">
        <Header />
      </aside>

      <div className="content-wrapper">
        <main className="content">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default App;
