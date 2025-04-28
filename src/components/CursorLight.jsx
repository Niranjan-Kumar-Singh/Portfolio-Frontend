import React, { useEffect, useRef, useState } from "react";

const CursorLight = () => {
  const lightRef = useRef(null);
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

    // Function to move the light based on mouse position
    const moveLight = (e) => {
      if (isMobile) return; // Do not show light on mobile
      const { clientX: x, clientY: y } = e;
      const lightSize = 350; // Increased size of the light cursor
      const offsetX = lightSize / 2; // Offset to center the cursor
      const offsetY = lightSize / 2; // Offset to center the cursor

      const light = lightRef.current;
      if (light) {
        light.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
      }
    };

    // Add event listener for mousemove to track mouse position
    window.addEventListener("mousemove", moveLight);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("mousemove", moveLight);
    };
  }, [isMobile]);

  if (isMobile) return null; // Don't render the light cursor on mobile

  // Return the cursor light div
  return <div ref={lightRef} className="cursor-light" />;
};

export default CursorLight;
