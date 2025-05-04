import React, { useEffect, useState, useMemo } from "react"; // Added useMemo for optimization
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

// Initialization function for particles (no changes here)
const particlesInit = async (main) => {
  await loadLinksPreset(main);
};

const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Memoizing the checkIfMobile function for optimization (it won't be redefined on each render)
  const checkIfMobile = useMemo(() => {
    return () => setIsMobile(window.innerWidth <= 768); // Updates the state based on screen width
  }, []);

  useEffect(() => {
    // Initial check for mobile state on mount
    checkIfMobile();

    // Handler for resize event
    const handleResize = () => {
      clearTimeout(window._resizeTimeout); // Clears previous timeout to prevent rapid firing of checks
      window._resizeTimeout = setTimeout(checkIfMobile, 150); // Debouncing resize event
    };

    // Adding resize and orientationchange event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize); // Handles orientation change as well

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [checkIfMobile]); // Dependency array ensures that the effect runs when checkIfMobile changes

  // If it's a mobile screen, we prevent rendering of particles
  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links", // Applying the "links" preset for particles
        fullScreen: { enable: false }, // Disabling full-screen mode
        background: { color: { value: "transparent" } }, // Transparent background
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } }, // Particle density and count
          color: { value: "#ffffff" }, // Particle color
          links: {
            enable: true, // Enable links between particles
            distance: 150, // Distance for the links to appear
            color: "#ffffff", // Link color
            opacity: 0.4, // Link opacity
            width: 1, // Link width
          },
          move: {
            enable: true, // Enable particle movement
            speed: 1, // Movement speed
            direction: "none", // No specific direction for movement
            outModes: { default: "out" }, // Out of bounds particles will be reset
          },
          opacity: { value: 0.5 }, // Particle opacity
          size: { value: { min: 1, max: 3 } }, // Particle size range
        },
        detectRetina: true, // Ensures particles adapt to high-resolution screens
        interactivity: {
          events: {
            onHover: { enable: false }, // No hover interaction
            onClick: { enable: false }, // No click interaction
            resize: true, // Allow resizing of particles based on the window size
          },
        },
      }}
      className="absolute top-0 left-0 w-full min-h-full max-h-screen z-0"
    />
  );
};

export default ParticlesBackground;
