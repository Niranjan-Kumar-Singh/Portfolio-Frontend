// src/components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import "../styles/scrollToTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlasting, setIsBlasting] = useState(false);

  useEffect(() => {
    const content = document.querySelector(".content");

    const toggleVisibility = () => {
      setIsVisible(content.scrollTop > 100);
    };

    content.addEventListener("scroll", toggleVisibility);
    return () => content.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsBlasting(true);
    document.querySelector(".content").scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsBlasting(false);
    }, 800); // Reset animation after scroll
  };

  return (
    <div className={`rocket-btn ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <div className={`rocket-body ${isBlasting ? "blast" : ""}`}>
        <img
          src="/rocket-colorful.svg"
          alt="rocket"
          className="rocket-img"
        />
        <div className="fire-flame" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
