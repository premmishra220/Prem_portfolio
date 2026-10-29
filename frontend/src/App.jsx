import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Loading from './components/Loading';
import CursorGlow from './components/CursorGlow';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

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

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] overflow-x-hidden selection:bg-[#e5b85c]/25 selection:text-white">
      {/* Loader Overlay */}
      {isLoading && <Loading />}

      {/* Main Content */}
      <div
        className={`${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-opacity duration-700`}
      >
        <AnimatedBackground />
        <CursorGlow />
        <Navbar onOpenResume={() => setShowResumeModal(true)} />

        <main className="relative z-10">
          <Hero onOpenResume={() => setShowResumeModal(true)} />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Certificates />
          <Contact onOpenResume={() => setShowResumeModal(true)} />
        </main>

        <Footer onOpenResume={() => setShowResumeModal(true)} />
      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl flex flex-col"
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.08] bg-[#0e0e12] gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#e5b85c] flex-shrink-0" />
                  <h3 className="font-display font-bold text-xs sm:text-base md:text-lg text-[#f4f4f5] truncate">
                    Prem Mishra — CV
                  </h3>
                  <span className="hidden md:inline font-mono text-[10px] text-white/40 tracking-wider">
                    (JAVA BACKEND DEVELOPER)
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <a
                    href="/resume.pdf"
                    download="Prem_Mishra_Resume.pdf"
                    className="btn-primary !px-3 sm:!px-4 !py-1.5 !text-[10px] sm:!text-xs font-mono tracking-wider"
                  >
                    DOWNLOAD PDF ↓
                  </a>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors font-mono text-xs"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="flex-1 bg-neutral-900 relative overflow-hidden">
                <iframe
                  src="/resume.pdf"
                  title="Prem Mishra Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;