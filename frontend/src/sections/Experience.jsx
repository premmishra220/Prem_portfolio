import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceData = [
  {
    role: "Backend Developer Intern – Spring Boot",
    company: "Indux Technology",
    location: "Pune, Maharashtra, India",
    period: "Feb 16, 2026 – May 16, 2026",
    badge: "INDUSTRY INTERNSHIP",
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "JWT", "MySQL", "Git", "Postman"],
    responsibilities: [
      "Developed modular backend services utilizing Java and Spring Boot adhering to strict Controller-Service-Repository architecture.",
      "Engineered, documented, and tested RESTful APIs with stateless authentication and authorization powered by Spring Security and JWT.",
      "Managed entity lifecycles, relational mappings, and transactional database persistence using Spring Data JPA and Hibernate.",
      "Employed Git and GitHub for version control, collaborative workflows, and Postman for rigorous API testing and debugging.",
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section-padding border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#e5b85c]">
            05 / Career Timeline
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#f4f4f5]">
              WORK <span className="text-[#e5b85c]">EXPERIENCE</span>
            </h2>
            <p className="font-mono text-xs text-[#94949e] uppercase tracking-[0.2em] mt-3">
              PRODUCTION BACKEND ENGINEERING
            </p>
          </div>
          <p className="max-w-md text-sm text-[#94949e] font-light leading-relaxed">
            Real-world backend engineering experience delivering production Spring Boot APIs and secure persistence layers.
          </p>
        </motion.div>

        {/* Timeline Item */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="p-8 md:p-12 rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 hover:border-[#e5b85c]/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full font-mono text-[11px] tracking-wider text-[#e5b85c] bg-[#e5b85c]/10 border border-[#e5b85c]/30">
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f4f4f5]">
                    {exp.role}
                  </h3>
                  <p className="font-sans text-lg text-[#e5b85c] font-medium mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="font-mono text-xs md:text-sm text-[#94949e] px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] self-start lg:self-center">
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4 mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  Key Responsibilities & Deliverables
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-2xl border border-white/[0.05] bg-white/[0.01] flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e5b85c] mt-2 flex-shrink-0" />
                      <p className="text-sm text-[#94949e] font-light leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                  Applied Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono tracking-wide border border-white/[0.08] bg-white/[0.02] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;