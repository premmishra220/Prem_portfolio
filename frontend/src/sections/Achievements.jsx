import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievementsList = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    category: "National Hackathon",
    badge: "HACKATHON COMPETITOR",
    description:
      "Collaborated as backend contributor to design and build Nagrik360 / CivicConnect — an automated civic complaint dispatching platform integrating Spring Boot REST APIs with computer vision models for citizen issue verification.",
  },
  {
    title: "NSS – Photography Head",
    category: "Leadership & Community",
    badge: "CAMPUS LEADERSHIP",
    description:
      "Headed visual documentation, digital assets, and media management for National Service Scheme (NSS) social initiatives and community service outreach drives.",
  },
  {
    title: "LeetCode & Algorithmic Problem Solving",
    category: "Data Structures & Algorithms",
    badge: "DSA DISCIPLINE",
    description:
      "Active problem solver on LeetCode with dedicated focus on Java implementations of Arrays, Strings, Hashing, Recursion, Trees, and Dynamic Programming.",
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="achievements" className="section-padding border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#e5b85c]">
            07 / Honors & Initiatives
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
              KEY <span className="text-[#e5b85c]">ACHIEVEMENTS</span>
            </h2>
            <p className="font-mono text-xs text-[#94949e] uppercase tracking-[0.2em] mt-3">
              HACKATHONS, LEADERSHIP & PROBLEM SOLVING
            </p>
          </div>
        </motion.div>

        {/* Minimal Editorial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
              className="p-8 rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 hover:border-[#e5b85c]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] mb-5">
                  <span className="px-2.5 py-0.5 rounded-full border border-[#e5b85c]/40 text-[#e5b85c] bg-[#e5b85c]/10">
                    {item.badge}
                  </span>
                  <span className="text-white/40 uppercase tracking-widest">{item.category}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#f4f4f5] leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#94949e] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-white/40">
                <span>VERIFIED</span>
                <span className="text-[#e5b85c]">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
