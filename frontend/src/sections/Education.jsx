import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationList = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Sinhgad Institute of Technology",
    location: "Pune, Maharashtra",
    period: "2023 – 2027",
    score: "CGPA: 7.01 / 10.0",
    highlight: "CURRENT DEGREE",
    details: "Foundational and advanced training in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Lakha Interstariya Madhya Vidyalaya, Barni",
    location: "Bhojpur, Bihar (Bihar Board)",
    period: "2022",
    score: "Percentage: 66.7%",
    highlight: "COMPLETED",
    details: "Specialized in Science coursework with mathematics and physics foundations.",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Delhi Model Public School, Kulharia",
    location: "Ara, Bihar (CBSE Board)",
    period: "2020",
    score: "Percentage: 65.0%",
    highlight: "COMPLETED",
    details: "Comprehensive academic secondary school curriculum.",
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="education" className="section-padding border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-[#e5b85c]">
            06 / Academic Foundation
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#f4f4f5] leading-tight">
              EDUCATION
            </h2>
            <p className="font-mono text-[10px] sm:text-xs text-[#94949e] uppercase tracking-wider sm:tracking-[0.2em] mt-2.5 sm:mt-3">
              COMPUTER SCIENCE & IT ACADEMIC BACKGROUND
            </p>
          </div>
        </motion.div>

        {/* Minimal and Elegant Editorial List */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? "border-[#e5b85c]/40 bg-[#0e0e12] ring-1 ring-[#e5b85c]/20"
                  : "border-white/[0.08] bg-[#0c0c0e]/70"
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] mb-3 sm:mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full border ${
                      idx === 0
                        ? "border-[#e5b85c]/40 text-[#e5b85c] bg-[#e5b85c]/10"
                        : "border-white/10 text-white/50 bg-white/[0.02]"
                    }`}
                  >
                    {edu.highlight}
                  </span>
                  <span className="text-white/40">{edu.period}</span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#f4f4f5] leading-snug mb-2">
                  {edu.degree}
                </h3>

                <p className="font-sans text-xs sm:text-sm font-semibold text-[#e5b85c] mb-1">
                  {edu.institution}
                </p>

                <p className="font-mono text-[11px] sm:text-xs text-white/40 mb-3 sm:mb-4">
                  {edu.location}
                </p>

                <p className="text-xs text-[#94949e] font-light leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06] font-mono text-xs font-semibold text-[#f4f4f5]">
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
