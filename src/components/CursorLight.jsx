import React, { useEffect, useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef(null);
  const mediaQueryRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Setup media query for mobile detection
    mediaQueryRef.current = window.matchMedia("(max-width: 768px)");

    const isMobile = () => mediaQueryRef.current.matches;

    const handleMediaChange = () => {
      if (isMobile() && lightRef.current) {
        lightRef.current.style.display = "none";
      } else if (lightRef.current) {
        lightRef.current.style.display = "block";
      }
    };

    handleMediaChange(); // initial check
    mediaQueryRef.current.addEventListener("change", handleMediaChange);

    const moveLight = (e) => {
      if (isMobile()) return;
      const { clientX: x, clientY: y } = e;
      const offset = 175; // half of 350px light size

      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        if (lightRef.current) {
          lightRef.current.style.transform = `translate(${x - offset}px, ${y - offset}px)`;
        }
      });
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      mediaQueryRef.current.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", moveLight);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <div ref={lightRef} className="cursor-light" />;
};

export default CursorLight;
