// File: src/App.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-bg"
        options={{
          fullScreen: { enable: false },
          background: { color: "#0a192f" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#4af" },
            links: {
              color: "#4af",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 2,
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <aside className="sidebar">
        <Header />
      </aside>

      <div className="content-wrapper">
        <main className="content">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;