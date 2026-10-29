import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 md:pt-36 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Massive Editorial Typography & Introduction */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Eyebrow / Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#e5b85c] animate-pulse flex-shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-[0.25em] uppercase text-[#e5b85c]">
              Portfolio 2026 — Engineering & Architecture
            </span>
          </motion.div>

          {/* Very Large Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-extrabold text-[2.6rem] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight sm:tracking-[-0.04em] uppercase leading-[0.92] sm:leading-[0.88] text-[#f4f4f5]">
              PREM
              <br />
              MISHRA
            </h1>
          </motion.div>

          {/* Role Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 sm:mt-4 md:mt-6"
          >
            <h2 className="font-display font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-normal sm:tracking-[-0.02em] text-[#e5b85c] leading-[1.1] sm:leading-[1.05]">
              JAVA BACKEND
              <br className="sm:hidden" /> DEVELOPER
            </h2>
          </motion.div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-sm sm:text-base md:text-xl text-[#94949e] font-light leading-relaxed"
          >
            Building reliable backend systems and modern web applications with Java and Spring Boot.
          </motion.p>

          {/* Core CTAs and Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#work"
              className="btn-primary"
            >
              SELECTED WORK
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="btn-secondary group flex items-center gap-2"
              >
                <span>RESUME</span>
                <span className="text-[#e5b85c] transition-transform duration-300 group-hover:translate-x-0.5">↓</span>
              </button>
            )}

            <a
              href="#contact"
              className="btn-secondary"
            >
              CONTACT
            </a>
          </motion.div>

          {/* Social Links Metadata Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-6 md:gap-10 font-mono text-[11px] sm:text-xs text-[#94949e]"
          >
            <a
              href="https://github.com/premmishra220"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e5b85c] transition-colors flex items-center gap-1.5"
            >
              <span>GITHUB</span>
              <span className="text-white/40">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/prem-prakash-mishra-20516a288"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e5b85c] transition-colors flex items-center gap-1.5"
            >
              <span>LINKEDIN</span>
              <span className="text-white/40">↗</span>
            </a>

            <a
              href="mailto:premmishrasonb@gmail.com"
              className="hover:text-[#e5b85c] transition-colors flex items-center gap-1.5"
            >
              <span>EMAIL</span>
              <span className="text-white/40">↗</span>
            </a>

            <span className="text-white/30 hidden sm:inline">|</span>

            <span className="text-white/50 tracking-wider">
              PUNE, MAHARASHTRA
            </span>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Showcase */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
          >
            {/* Museum-grade Framing */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0e0e11] p-2.5 sm:p-3 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900">
                <img
                  src={profile}
                  alt="Prem Mishra — Java Backend Developer"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                
                {/* Subtle Image Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-white/[0.08]">
                    <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px]">
                      <span className="text-white/50">PREM MISHRA</span>
                      <span className="text-[#e5b85c]">JAVA / SPRING BOOT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Editorial Internship Stamp */}
            <div className="absolute -bottom-4 left-2 sm:-left-4 md:-left-8 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl bg-[#0e0e11]/95 border border-white/[0.1] backdrop-blur-xl shadow-xl max-w-[90%]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#e5b85c] flex-shrink-0" />
                <div>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50">
                    Industry Experience
                  </p>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-white">
                    Indux Technology — Intern
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="pt-8 sm:pt-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="flex items-center gap-3 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40">
          <span>SCROLL TO EXPLORE</span>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-5 sm:h-6 bg-gradient-to-b from-[#e5b85c]/80 to-transparent mt-2"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
