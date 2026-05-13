import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Auth",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Vercel",
      ],
    },
    {
      title: "Currently Exploring",
      skills: [
        "OpenAI API",
        "AI Agents",
        "Python",
        "Machine Learning",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative section-padding bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.08),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
            Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Tech Stack &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Development Skills
            </span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            Building scalable full-stack applications with modern technologies,
            premium UI experiences, and performance-focused architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-cyan-400/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-8 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] text-white/80 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;