import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the window is mobile-sized
    const checkIfMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768); // Assuming 768px is the mobile breakpoint
    };

    // Run check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile) return null; // Don't render particles on mobile

  // Initialize particles with the 'links' preset
  const particlesInit = async (main) => {
    await loadLinksPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links", // Use the 'links' preset for particle connections
        fullScreen: { enable: false }, // Disable fullscreen for the particle effect
        background: {
          color: { value: "transparent" }, // Transparent background to blend particles with page background
        },
        particles: {
          number: {
            value: 50, // Set the number of particles
            density: {
              enable: true,
              area: window.innerWidth <= 768 ? 600 : 800, // Adjust particle density for mobile screens
            },
          },
          color: { value: "#ffffff" }, // White particle color
          links: {
            enable: true, // Enable particle links
            distance: 150, // Maximum distance for link visibility
            color: "#ffffff", // Link color
            opacity: 0.4, // Link opacity
            width: 1, // Link width
          },
          move: {
            enable: true, // Enable particle movement
            speed: 1, // Set particle movement speed
            direction: "none", // Particles move freely in all directions
            outModes: {
              default: "out", // Particles will exit the screen
            },
          },
          opacity: {
            value: 0.5, // Particle opacity
          },
          size: {
            value: { min: 1, max: 3 }, // Particle size range
          },
        },
        detectRetina: true, // Enable retina display support for sharp particles
        interactivity: {
          events: {
            onHover: { enable: false }, // Disable hover interaction
            onClick: { enable: false }, // Disable click interaction
            resize: true, // Enable particle resizing on window resize
          },
        },
      }}
      className="absolute top-0 left-0 w-full min-h-full max-h-screen z-0" // Position particles behind other content
    />
  );
};

export default ParticlesBackground;
