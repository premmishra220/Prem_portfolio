import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import dataScience from "../assets/certificates/dataScience.png";
import html from "../assets/certificates/html.png";
import java from "../assets/certificates/java.png";
import javascript from "../assets/certificates/javascript.png";
import CSS3 from "../assets/certificates/CSS3.png";
import Typescript from "../assets/certificates/Typescript.png";

const certificates = [
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    category: "Backend Language",
    image: java,
  },
  {
    title: "Data Science Foundation",
    issuer: "Oracle",
    category: "Data & Analytics",
    image: dataScience,
  },
  {
    title: "TypeScript Programming",
    issuer: "Infosys Springboard",
    category: "Type-Safe Client & Server",
    image: Typescript,
  },
  {
    title: "JavaScript Programming",
    issuer: "Infosys Springboard",
    category: "Web Engineering",
    image: javascript,
  },
  {
    title: "HTML5",
    issuer: "Infosys Springboard",
    category: "Web Foundations",
    image: html,
  },
  {
    title: "CSS3",
    issuer: "Infosys Springboard",
    category: "Modern Layouts",
    image: CSS3,
  },
];

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="section-padding border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#e5b85c]">
            08 / Industry Certifications
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#f4f4f5]">
              VERIFIED <span className="text-[#e5b85c]">CREDENTIALS</span>
            </h2>
            <p className="font-mono text-xs text-[#94949e] uppercase tracking-[0.2em] mt-3">
              ORACLE & INFOSYS TECHNICAL CERTIFICATIONS
            </p>
          </div>
          <p className="max-w-md text-sm text-[#94949e] font-light leading-relaxed">
            Rigorous technical assessments and foundation certifications in Java, database principles, and full-stack web engineering.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 hover:border-[#e5b85c]/40 hover:bg-[#121216] transition-all duration-300 p-4 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black aspect-[16/10] relative mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/70">
                  CLICK TO PREVIEW ↗
                </div>
              </div>

              <div className="px-2 pb-2">
                <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-1">
                  <span>{cert.category}</span>
                  <span className="text-[#e5b85c]">{cert.issuer}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#f4f4f5] group-hover:text-[#e5b85c] transition-colors">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e11] p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] mb-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {activeCert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#e5b85c]">
                    Issued by {activeCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;