import React, { useEffect, useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    // Detect if the device is mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const light = lightRef.current;

    // If on mobile, hide and skip the effect
    if (isMobile) {
      if (light) {
        light.style.display = "none";
      }
      return;
    }

    const moveLight = (e) => {
      const { clientX: x, clientY: y } = e;
      const lightSize = 250;
      const offsetX = lightSize / 2;
      const offsetY = lightSize / 2;

      if (light) {
        light.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
    };
  }, []);

  return <div ref={lightRef} className="cursor-light" />;
};

export default CursorLight;
