import React, { useEffect, useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const light = lightRef.current;

    const moveLight = (e) => {
      const { clientX: x, clientY: y } = e;
      const lightSize = 250; // Diameter of the light
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
