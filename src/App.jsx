import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
import "./styles/App.css";

// Lazy load non-critical components
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const CursorLight = lazy(() => import("./components/CursorLight"));
const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);

    // Initial check when component mounts
    checkIfMobile();

    // Recalculate on window resize or orientation change
    const handleResize = () => {
      clearTimeout(window._resizeTimeout);
      window._resizeTimeout = setTimeout(() => {
        checkIfMobile();
        // Manually trigger scroll reset after resize to prevent issues
        resetSidebarScroll();
      }, 150); // debounce to prevent too many calls
    };

    // Listener for resizing
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Cleanup listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Function to reset sidebar scroll
  const resetSidebarScroll = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar && !isMobile) {
      sidebar.scrollTop = 0; // Reset scroll position to top for desktop mode
    }
  };

  // Handle the scroll behavior for non-mobile screens
  useEffect(() => {
    // If not mobile, apply custom scroll behavior
    if (!isMobile) {
      const sidebar = document.querySelector(".sidebar");
      const contentWrapper = document.querySelector(".content-wrapper");

      const handleSidebarScroll = (e) => {
        e.preventDefault(); // Prevent default sidebar scroll behavior
        if (contentWrapper) {
          contentWrapper.scrollTop += e.deltaY; // Scroll content wrapper based on mouse wheel
        }
      };

      sidebar?.addEventListener("wheel", handleSidebarScroll, { passive: false });

      // Cleanup scroll behavior listener
      return () => {
        sidebar?.removeEventListener("wheel", handleSidebarScroll);
      };
    }
  }, [isMobile]); // Re-run this when isMobile changes

  return (
    <div className="app-container">
      {/* Only render particles and cursor effects if not mobile */}
      {!isMobile && (
        <Suspense fallback={null}>
          <CursorLight />
          <ParticlesBackground />
        </Suspense>
      )}

      <aside className="sidebar">
        <Header />
      </aside>

      <div className="content-wrapper">
        <main className="content" role="main">
          <About />
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading Experience...</div>}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div>Loading Education...</div>}>
            <Education />
          </Suspense>
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </main>
      </div>

      <ScrollToTopButton />
      <Analytics />
    </div>
  );
};

export default App;
