import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const primaryBackendStack = [
  {
    name: "JAVA",
    category: "Core Language",
    description: "Object-Oriented Programming, Multithreading, Streams, Collections, Memory Management",
    level: "Core Specialization",
  },
  {
    name: "SPRING BOOT",
    category: "Enterprise Framework",
    description: "Layered architecture, Dependency Injection, Auto-configuration, Spring Boot 3.x",
    level: "Core Specialization",
  },
  {
    name: "SPRING SECURITY",
    category: "Security & Auth",
    description: "Stateless SecurityFilterChain, BCrypt hashing, DaoAuthenticationProvider, RBAC",
    level: "Core Specialization",
  },
  {
    name: "SPRING DATA JPA",
    category: "Persistence & ORM",
    description: "Hibernate, JPA Criteria Specifications, Repository pattern, Transactional integrity",
    level: "Core Specialization",
  },
  {
    name: "REST APIs",
    category: "API Architecture",
    description: "HTTP semantics, DTO pattern, Global exception handling, Payload validation",
    level: "Core Specialization",
  },
  {
    name: "JWT",
    category: "Stateless Tokens",
    description: "JJWT generation, Bearer token authorization headers, Filter interceptors",
    level: "Core Specialization",
  },
  {
    name: "MYSQL",
    category: "Relational Database",
    description: "ACID transactions, Schema modeling, Indexes, Foreign keys, Complex querying",
    level: "Core Specialization",
  },
  {
    name: "MONGODB",
    category: "Document Database",
    description: "NoSQL document collections, Spring Data MongoDB, Aggregation, Cloud Atlas",
    level: "Core Specialization",
  },
];

const secondaryStack = [
  { name: "React.js", note: "Component architecture, hooks, state" },
  { name: "JavaScript (ES6+)", note: "Asynchronous I/O, Promises, DOM" },
  { name: "Node.js", note: "Server-side runtime, npm ecosystem" },
  { name: "Express.js", note: "Middleware, REST routing, CORS" },
];

const toolsStack = [
  { name: "Git", note: "Branching, rebasing, version control" },
  { name: "GitHub", note: "CI/CD, code reviews, collaboration" },
  { name: "Postman", note: "API testing, collections, environment variables" },
  { name: "Maven", note: "Dependency resolution, build lifecycles" },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="section-padding border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-[#e5b85c]">
            03 / Engineering Capabilities
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#f4f4f5] leading-tight">
              TECHNICAL <span className="text-[#e5b85c]">STACK</span>
            </h2>
            <p className="font-mono text-[10px] sm:text-xs text-[#94949e] uppercase tracking-wider sm:tracking-[0.2em] mt-2.5 sm:mt-3">
              PRIMARY ARCHITECTURE: JAVA & SPRING BOOT BACKEND
            </p>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#94949e] font-light leading-relaxed">
            Specialized in designing resilient server architectures, high-performance API contracts, and secure database persistence.
          </p>
        </motion.div>

        {/* 1. PRIMARY BACKEND STACK (DOMINANT VISUAL FOCUS) */}
        <div className="mb-14 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-3 border-b border-white/[0.08] gap-1.5 sm:gap-4">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.25em] text-[#e5b85c] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5b85c] flex-shrink-0" />
              PRIMARY BACKEND STACK (CORE EXPERTISE)
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-white/40">
              08 TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {primaryBackendStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
                className="group relative p-4 sm:p-6 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 hover:border-[#e5b85c]/40 hover:bg-[#131317] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4 font-mono text-[10px]">
                    <span className="text-white/40 uppercase tracking-wider sm:tracking-widest">{tech.category}</span>
                    <span className="text-[#e5b85c] font-semibold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#f4f4f5] group-hover:text-[#e5b85c] transition-colors mb-2 sm:mb-3">
                    {tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94949e] font-light leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px]">
                  <span className="text-white/40">Specialization</span>
                  <span className="text-[#e5b85c] font-medium">{tech.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SECONDARY TECHNOLOGIES & TOOLS */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 border-t border-white/[0.08]">
          {/* Secondary Stack: React / JS / Node / Express */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-[#94949e]">
                Secondary Web Stack
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/40">
                04 TECHNOLOGIES
              </span>
            </div>

            <div className="space-y-2.5">
              {secondaryStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 sm:p-4 rounded-xl border border-white/[0.05] bg-[#0c0c0e]/80 flex items-center justify-between hover:border-white/10 transition-colors"
                >
                  <span className="font-sans font-semibold text-xs sm:text-sm text-[#f4f4f5]">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-white/40 text-right">
                    {tech.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow: Git / GitHub / Postman / Maven */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-[#94949e]">
                Tools & Architecture Workflow
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/40">
                04 TOOLS
              </span>
            </div>

            <div className="space-y-2.5">
              {toolsStack.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3.5 sm:p-4 rounded-xl border border-white/[0.05] bg-[#0c0c0e]/80 flex items-center justify-between hover:border-white/10 transition-colors"
                >
                  <span className="font-sans font-semibold text-xs sm:text-sm text-[#f4f4f5]">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-white/40 text-right">
                    {tool.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
