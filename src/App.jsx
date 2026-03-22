import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Separator from './components/Separator';
import ThemeSwitcher from './components/ThemeSwitcher';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import FadeInSection from './components/FadeInSection';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Disable sessionStorage cache so the cool boot animation runs on every load
  useEffect(() => {
    // const hasVisited = sessionStorage.getItem('hasBooted');
    // if (hasVisited) setIsLoading(false);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // sessionStorage.setItem('hasBooted', 'true');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen text-textMain selection:bg-primary/30 selection:text-white antialiased font-sans flex flex-col pt-safe pb-safe relative isolate">
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" onLoadingComplete={handleLoadingComplete} />}
        </AnimatePresence>

        <Background />
        <Cursor />
        <Navbar />
        <Header />

        <main className="flex-grow">
          <FadeInSection><About /></FadeInSection>
          <Separator />
          <FadeInSection><TechStack /></FadeInSection>
          <Separator />
          <FadeInSection><Projects /></FadeInSection>
          <Separator />
          <FadeInSection><Experience /></FadeInSection>
          <Separator />
          <FadeInSection><Achievements /></FadeInSection>
          <Separator />
          <FadeInSection><Contact /></FadeInSection>
        </main>

        <Footer />
        <ThemeSwitcher />
        <ScrollToTop />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
};

export default App;
