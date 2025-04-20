import React, { useEffect, useState } from "react";
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
    const contentWrapper = document.querySelector(".content-wrapper");

    // Scroll to the top with smooth behavior
    contentWrapper.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Immediately reset the scroll position right after the click
    setTimeout(() => {
      contentWrapper.scrollTop = 0;
      setIsBlasting(false); // Reset blasting animation
    }, 800); // After the animation is done, reset the scroll
  };

  return (
    <div
      className={`rocket-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <div className={`rocket-body ${isBlasting ? "blast" : ""}`}>
        <img src="/rocket-colorful.svg" alt="rocket" className="rocket-img" />
        <div className="fire-flame" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
