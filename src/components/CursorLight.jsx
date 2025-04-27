import React, { useEffect, useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    // Detect if the device is mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const light = lightRef.current;

    // If on mobile, hide the cursor effect
    if (isMobile) {
      if (light) {
        light.style.display = "none";
      }
      return;
    }

    // Function to move the light based on mouse position
    const moveLight = (e) => {
      const { clientX: x, clientY: y } = e;
      const lightSize = 250; // Size of the light cursor
      const offsetX = lightSize / 2; // Offset to center the cursor
      const offsetY = lightSize / 2; // Offset to center the cursor

      // Update the position of the light cursor
      if (light) {
        light.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
      }
    };

    // Add event listener for mousemove to track mouse position
    window.addEventListener("mousemove", moveLight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveLight);
    };
  }, []);

  // Return the cursor light div
  return <div ref={lightRef} className="cursor-light" />;
};

export default CursorLight;
