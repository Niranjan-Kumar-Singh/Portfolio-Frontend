// src/App.jsx
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
  }, []);

  return (
    <div className="app-container relative w-full h-full overflow-hidden w-full min-h-screen bg-[var(--bg-dark)]">
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
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;
