// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Fixed Sidebar (Left) */}
      <aside className="sidebar">
        <Header />
      </aside>

      {/* Scrollable Content (Right) */}
      <div className="content-wrapper">
        <main className="content">
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
