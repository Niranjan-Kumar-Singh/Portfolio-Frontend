import React, { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) return; // Let mobile use default scroll

    const sidebar = document.querySelector(".sidebar");
    const contentWrapper = document.querySelector(".content-wrapper");

    const handleSidebarScroll = (e) => {
      if (contentWrapper) {
        contentWrapper.scrollTop += e.deltaY;
      }
    };

    sidebar?.addEventListener("wheel", handleSidebarScroll, { passive: false });

    return () => {
      sidebar?.removeEventListener("wheel", handleSidebarScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <CursorLight />
      <ParticlesBackground />

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
