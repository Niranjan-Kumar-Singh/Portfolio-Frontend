import React, { useEffect, useState } from "react";
import { setScrollTarget } from "../utils/scrollManager";
import "../styles/scrollToTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlasting, setIsBlasting] = useState(false);

  useEffect(() => {
    const content = document.querySelector(".content-wrapper");

    const toggleVisibility = () => {
      // Show button when user scrolls down more than 100px
      setIsVisible(content.scrollTop > 100);
    };

    content?.addEventListener("scroll", toggleVisibility);
    return () => content?.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsBlasting(true);

    const content = document.querySelector(".content-wrapper");
    content.scrollTo({ top: 0, behavior: "smooth" });

    // Reset scroll target to prevent snap-back behavior
    setScrollTarget(0);

    setTimeout(() => {
      setIsBlasting(false);
      content.scrollTop = 0; // Ensure content scroll position is reset to top
    }, 800);
  };

  return (
    <div
      className={`rocket-btn ${isVisible ? "show" : ""}`} // Button visibility controlled by scroll position
      onClick={scrollToTop}
    >
      <div className={`rocket-body ${isBlasting ? "blast" : ""}`} // Animation when button is clicked
      >
        <img src="/rocket-colorful.svg" alt="rocket" className="rocket-img" />
        <div className="fire-flame" /> {/* Fire flame effect on button click */}
      </div>
    </div>
  );
};

export default ScrollToTopButton;
