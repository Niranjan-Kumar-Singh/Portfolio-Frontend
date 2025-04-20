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
  
    const sidebar = document.querySelector(".sidebar");
    const contentWrapper = document.querySelector(".content-wrapper");
  
    let scrollTarget = 0;
    let scrolling = false;
    let lastDeltaY = 0;
  
    const smoothScroll = () => {
      const current = contentWrapper.scrollTop;
      const distance = scrollTarget - current;
      const step = distance * 0.1;
  
      if (Math.abs(step) > 0.5) {
        contentWrapper.scrollTop = current + step;
        requestAnimationFrame(smoothScroll);
      } else {
        scrolling = false;
      }
    };
  
    const forwardScroll = (e) => {
      if (e.deltaX !== 0) {
        if (e.target === contentWrapper) {
          e.preventDefault();
        }
      }
    
      if (e.deltaY !== 0 && contentWrapper) {
        e.preventDefault();
    
        if ((e.deltaY > 0 && lastDeltaY < 0) || (e.deltaY < 0 && lastDeltaY > 0)) {
          scrollTarget = contentWrapper.scrollTop;
        }
    
        scrollTarget += e.deltaY * 0.7;
        const maxScroll = contentWrapper.scrollHeight - contentWrapper.clientHeight;
        scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));
    
        lastDeltaY = e.deltaY;
    
        if (!scrolling) {
          scrolling = true;
          requestAnimationFrame(smoothScroll);
        }
      }
    };
    
    // Attach the wheel event listener to both contentWrapper and sidebar
    if (contentWrapper) {
      contentWrapper.addEventListener("wheel", forwardScroll, { passive: false });
    }
  
    if (sidebar) {
      sidebar.addEventListener("wheel", forwardScroll, { passive: false });
    }
  
    return () => {
      if (contentWrapper) {
        contentWrapper.removeEventListener("wheel", forwardScroll);
      }
  
      if (sidebar) {
        sidebar.removeEventListener("wheel", forwardScroll);
      }
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
