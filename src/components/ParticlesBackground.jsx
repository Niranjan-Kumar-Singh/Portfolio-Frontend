import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
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
      className="absolute top-0 left-0 w-full h-full z-0" // Position particles behind other content
    />
  );
};

export default ParticlesBackground;
