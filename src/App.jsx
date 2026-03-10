import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Separator from './components/Separator';
import ThemeSwitcher from './components/ThemeSwitcher';
import Loader from './components/Loader';
import FadeInSection from './components/FadeInSection';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Disable loader entirely if user has visited recently in this session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasBooted');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasBooted', 'true');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen text-textMain selection:bg-primary/30 selection:text-white antialiased font-sans flex flex-col pt-safe pb-safe relative isolate">
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" onLoadingComplete={handleLoadingComplete} />}
        </AnimatePresence>

        <Background />
        <Cursor />
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<div className="h-32 w-full" />}>
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
          </Suspense>
        </main>

        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
