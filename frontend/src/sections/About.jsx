import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about.jpg";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#e5b85c]">
            02 / Philosophy & Background
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.08] text-[#f4f4f5] max-w-5xl">
            “I build <span className="text-[#e5b85c]">reliable backend systems</span> and modern web applications.”
          </h2>
        </motion.div>

        {/* Editorial 2-Column Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image & Quick Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0e0e11] p-3 shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img
                  src={aboutImg}
                  alt="Prem Mishra workspace and profile"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-xs text-white/50 uppercase tracking-widest">
                    Based in Pune, India
                  </p>
                  <p className="font-sans text-sm font-medium text-[#f4f4f5]">
                    Sinhgad Institute of Technology (B.E. IT)
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0e0e11]/60">
                <p className="text-white/40 uppercase tracking-wider mb-1">Focus</p>
                <p className="text-[#f4f4f5] font-sans font-semibold">Spring Boot & APIs</p>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0e0e11]/60">
                <p className="text-white/40 uppercase tracking-wider mb-1">Status</p>
                <p className="text-[#e5b85c] font-sans font-semibold">Open to Opportunities</p>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0e0e11]/60">
                <p className="text-white/40 uppercase tracking-wider mb-1">Degree</p>
                <p className="text-[#f4f4f5] font-sans font-semibold">B.E. IT (2023–2027)</p>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0e0e11]/60">
                <p className="text-white/40 uppercase tracking-wider mb-1">CGPA</p>
                <p className="text-[#f4f4f5] font-sans font-semibold">7.01 / 10.0</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Technical Depth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-base md:text-lg text-[#94949e] font-light leading-relaxed">
              <p>
                I am a <span className="text-[#f4f4f5] font-medium">Java Backend Developer</span> with dedicated hands-on experience designing, developing, and deploying robust server-side architectures. My core expertise is anchored in <span className="text-[#f4f4f5] font-medium">Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, and relational/NoSQL databases (MySQL & MongoDB)</span>.
              </p>

              <p>
                During my backend development internship at <span className="text-[#f4f4f5] font-medium">Indux Technology</span>, I contributed to production-oriented modules implementing strict <span className="text-[#f4f4f5] font-medium">Controller-Service-Repository patterns</span>, stateless JWT authentication filters, and database entity lifecycles. I prioritize building clean API contracts, predictable transactional boundaries, and performant data retrieval pipelines.
              </p>

              <p>
                Alongside backend engineering, I possess practical full-stack capabilities across the <span className="text-[#f4f4f5] font-medium">MERN stack (React, Node.js, Express, MongoDB)</span>, enabling me to collaborate efficiently with frontend engineers or deliver complete, end-to-end features. Grounded by rigorous Data Structures and Algorithms practice and academic training in Information Technology, I am constantly engineering software that is clean, secure, and ready for production scale.
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e5b85c] mb-4">
                Core Architectural Principles
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-sm font-semibold text-[#f4f4f5] mb-1">
                    Layered Architecture
                  </h4>
                  <p className="text-xs text-[#94949e] leading-relaxed">
                    Decoupled Controller-Service-Repository separation ensuring modularity and testability.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-sm font-semibold text-[#f4f4f5] mb-1">
                    Stateless JWT Security
                  </h4>
                  <p className="text-xs text-[#94949e] leading-relaxed">
                    Granular role-based authorization, BCrypt hashing, and resilient filter chain interceptors.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-sm font-semibold text-[#f4f4f5] mb-1">
                    Data Persistence & ORM
                  </h4>
                  <p className="text-xs text-[#94949e] leading-relaxed">
                    Spring Data JPA, Hibernate, Criteria Specifications, and transactional integrity.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h4 className="text-sm font-semibold text-[#f4f4f5] mb-1">
                    RESTful API Engineering
                  </h4>
                  <p className="text-xs text-[#94949e] leading-relaxed">
                    Strict HTTP semantics, standardized DTOs, global exception handling, and Postman testing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
