import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap'; 
import Lenis from 'lenis';

import Loading from './components/Loading';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Certificates from "./sections/Certificates";

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    const lenis = new Lenis();

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  
  useEffect(() => {
    if (!isLoading) {
      const elements = document.querySelectorAll('.stagger-fade');

      if (elements.length > 0) {
        gsap.from(elements, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out', //  safer easing
          stagger: 0.1,
        });
      }
    }
  }, [isLoading]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">

      {/*  Loader Overlay */}
      {isLoading && <Loading />}

      {/*  Main Content */}
      <div
        className={`${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        {/*  */}
        <CursorGlow />

        <main className="relative pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Experience />
            <Contact />
            <Footer />
            
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default App;