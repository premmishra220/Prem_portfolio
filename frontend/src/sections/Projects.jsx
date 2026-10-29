import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import edtechImg from "../assets/edtech-crm.png";
import civicImg from "../assets/civic-connect.jpg";

const projects = [
  {
    number: "01",
    id: "civicconnect",
    title: "CivicConnect",
    subtitle: "Civic Issue Reporting & Municipal Management System",
    category: "Distributed Backend & Machine Vision",
    featured: false,
    image: civicImg,
    description:
      "A Spring Boot based civic issue reporting platform engineered to streamline municipal issue tracking, automated department dispatching, and resolution verification with integrated computer vision.",
    tech: ["Java", "Spring Boot", "MongoDB", "Spring Security", "JWT", "BCrypt", "Cloudinary", "Python FastAPI", "YOLO"],
    githubLink: "https://github.com/premmishra220",
    liveLink: null,
    features: [
      "RESTful API architecture following clean Controller-Service-Repository separation",
      "Civic issue reporting system with geo-tagging, priority levels, and citizen tracking",
      "Automated department assignment algorithms and municipal resolution workflows",
      "Stateless JWT authentication with BCrypt password hashing and role-based authorization",
      "Cloudinary cloud storage integration for complaint evidence and resolution media",
      "Python FastAPI microservice integration with YOLO computer vision for automated issue verification",
    ],
    architectureHighlights: [
      { label: "Backend Core", value: "Spring Boot Layered Architecture" },
      { label: "Persistence", value: "MongoDB Document Engine" },
      { label: "Security", value: "Stateless JWT & BCrypt RBAC" },
      { label: "AI Microservice", value: "FastAPI + YOLO Object Detection" },
    ],
  },
  {
    number: "02",
    id: "edtech-crm",
    title: "EdTech-CRM",
    subtitle: "Enterprise Inquiry & Lead Management System",
    category: "Enterprise Spring Boot 3.3.5 & PostgreSQL",
    featured: true, // LATEST PROJECT
    badge: "LATEST PROJECT",
    image: edtechImg,
    fallbackImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Production-ready enterprise CRM inquiry and admissions platform architected with Spring Boot 3.3.5 and Java 21. Powers public prospective student inquiry capture and a protected administrative command center for filtering, searching, and managing leads across their complete operational lifecycle.",
    tech: [
      "Spring Boot 3.3.5",
      "Java 21",
      "Supabase PostgreSQL",
      "Spring Security 6",
      "Spring Data JPA",
      "JPA Criteria Specifications",
      "JJWT (Custom Filter)",
      "BCrypt",
      "React 19",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/premmishra220/edtech-crm",
    liveLink: null,
    features: [
      "Layered enterprise backend architecture implementing strict Controller-Service-Repository separation",
      "Supabase PostgreSQL cloud persistence configured through production-ready JDBC connection pooling",
      "Stateless Spring Security 6 filter chain with CustomUserDetailsService, DaoAuthenticationProvider, and JJWT verification",
      "Strict Role-Based API access: Public inquiry intake (POST /api/inquiries) and protected administrative operations (/api/inquiries/**)",
      "Dynamic multi-parameter filtering using JPA Criteria Specifications (InquirySpecification.filterBy) across Category, UserType, and case-insensitive keyword search",
      "Strict Inquiry Lifecycle State Machine with patch mutations: NEW ➔ CONTACTED ➔ IN_PROGRESS ➔ RESOLVED",
      "Centralized GlobalExceptionHandler providing consistent, standardized error payloads and HTTP status codes",
      "Modern React 19 administrative frontend featuring real-time metric cards, debounced search, and instant status updates",
    ],
    architectureHighlights: [
      { label: "Spring Boot Version", value: "Spring Boot 3.3.5 / Java 21" },
      { label: "Database Layer", value: "Supabase PostgreSQL via JDBC" },
      { label: "Dynamic Queries", value: "JPA Criteria Specifications" },
      { label: "Security Mechanism", value: "Stateless JJWT + BCrypt Hashing" },
      { label: "Workflow States", value: "NEW / CONTACTED / IN_PROGRESS / RESOLVED" },
    ],
    apiEndpoints: [
      { method: "POST", path: "/api/inquiries", desc: "Public inquiry submission with DTO bean validation" },
      { method: "POST", path: "/api/auth/login", desc: "Admin credentials verification and JJWT token generation" },
      { method: "GET", path: "/api/inquiries", desc: "Protected query with dynamic category, userType, and search parameters" },
      { method: "PATCH", path: "/api/inquiries/{id}/status", desc: "Protected state transition update" },
    ],
  },
  {
    number: "03",
    id: "hotel-booking",
    title: "Hotel Online Booking System",
    subtitle: "Hospitality Reservation & Inventory Platform",
    category: "Full Stack Spring Boot & React",
    featured: false,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    description:
      "A full-stack hospitality reservation platform engineered with Spring Boot and MySQL. Delivers real-time room availability discovery, reservation lifecycle management, secure customer booking history, and an administrative inventory control center.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA / Hibernate", "JWT", "Cloudinary", "React.js", "Tailwind CSS"],
    githubLink: "https://github.com/premmishra220/hotel-management-system",
    liveLink: "https://hotel-management-system-six-beta.vercel.app/",
    features: [
      "Dynamic room search and real-time room availability computation engine",
      "End-to-end booking reservation workflows with immutable customer booking history",
      "Admin and User role-based authorization secured via stateless JWT authentication",
      "Complete Room CRUD operations backed by JPA/Hibernate entity relationships and transactional integrity",
      "Cloudinary media integration for multi-image room uploads and CDN delivery",
      "Responsive React frontend integrated with Spring Boot REST API endpoints",
    ],
    architectureHighlights: [
      { label: "Backend", value: "Spring Boot REST Service" },
      { label: "Database", value: "MySQL Relational Engine" },
      { label: "Persistence", value: "Spring Data JPA & Hibernate" },
      { label: "Frontend", value: "React.js SPA on Vercel" },
    ],
  },
  {
    number: "04",
    id: "veyora",
    title: "Veyora",
    subtitle: "Full Stack E-Commerce Platform",
    category: "Full Stack MERN Platform",
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    description:
      "A high-performance full-stack e-commerce system featuring synchronized catalog browsing, Redux Toolkit cart state management, checkout pipelines, live order tracking, and an administrative fulfillment console.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "BCrypt", "Tailwind CSS"],
    githubLink: "https://github.com/premmishra220/veyora",
    liveLink: "https://veyora-kappa.vercel.app/",
    features: [
      "High-throughput product catalog with dynamic category filtration and full-text search",
      "Synchronized shopping cart pipeline with persistent local and server-side state",
      "Comprehensive Redux Toolkit state architecture for predictable application flow",
      "Order tracking workflows with live status milestones and customer order logs",
      "Administrative dashboard for inventory CRUD, stock thresholds, and order fulfillment",
      "Robust JWT authentication and BCrypt password encryption pipeline",
    ],
    architectureHighlights: [
      { label: "Runtime", value: "Node.js & Express.js" },
      { label: "Database", value: "MongoDB Document Store" },
      { label: "State Management", value: "Redux Toolkit" },
      { label: "Deployment", value: "Vercel Cloud Production" },
    ],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="work" className="section-padding border-t border-white/[0.08] relative overflow-hidden">
      <div id="projects" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Eyebrow & Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-10"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-[#e5b85c]">
            04 / Selected Portfolio
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14 sm:mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase text-[#f4f4f5] leading-[0.95] sm:leading-[0.9]">
              SELECTED
              <br />
              <span className="text-[#e5b85c]">WORK</span>
            </h2>
            <p className="font-mono text-[10px] sm:text-xs text-[#94949e] uppercase tracking-wider sm:tracking-[0.2em] mt-3 sm:mt-4">
              04 PRODUCTION & ARCHITECTURAL CASE STUDIES
            </p>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#94949e] font-light leading-relaxed">
            Every project represents a real architectural implementation with emphasis on clean separation of concerns, secure authentication pipelines, and resilient persistence.
          </p>
        </motion.div>

        {/* PROJECTS CASE STUDIES (EDITORIAL STORYTELLING FLOW) */}
        <div className="space-y-16 sm:space-y-28 md:space-y-40">
          {projects.map((project, index) => {
            const isLatest = project.featured;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`relative rounded-2xl sm:rounded-3xl md:rounded-[40px] border transition-all duration-500 overflow-hidden ${
                  isLatest
                    ? "border-[#e5b85c]/40 bg-[#0e0e12] shadow-2xl p-4 sm:p-8 md:p-12 lg:p-16 ring-1 ring-[#e5b85c]/20"
                    : "border-white/[0.08] bg-[#0c0c0e]/80 p-4 sm:p-8 md:p-12"
                }`}
              >
                {/* Background Ambient Glow for Latest Project */}
                {isLatest && (
                  <div className="absolute -top-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#e5b85c]/[0.07] rounded-full blur-[120px] pointer-events-none" />
                )}

                {/* Top Metadata Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-display text-3xl sm:text-5xl font-extrabold text-[#e5b85c] flex-shrink-0">
                      {project.number}
                    </span>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.25em] text-[#94949e] block break-words">
                        {project.category}
                      </span>
                      {isLatest && (
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                          <span className="w-2 h-2 rounded-full bg-[#e5b85c] animate-pulse flex-shrink-0" />
                          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.25em] text-[#e5b85c]">
                            LATEST PROJECT
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Links in Header */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary !px-3.5 sm:!px-5 !py-1.5 sm:!py-2 !text-[11px] sm:!text-xs font-mono tracking-wider"
                      >
                        LIVE DEMO ↗
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary !px-3.5 sm:!px-5 !py-1.5 sm:!py-2 !text-[11px] sm:!text-xs font-mono tracking-wider"
                      >
                        GITHUB ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Left Column: Visual Showcase & Architecture Table */}
                  <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 && !isLatest ? "lg:order-2" : ""}`}>
                    {/* Visual Area */}
                    <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.1] bg-neutral-950">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          onError={(e) => {
                            if (project.fallbackImage) {
                              e.currentTarget.src = project.fallbackImage;
                            }
                          }}
                          className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />

                        {/* CivicConnect YOLO AI Telemetry Overlay */}
                        {project.id === "civicconnect" && (
                          <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] pointer-events-none">
                            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 flex items-center gap-1.5 max-w-full truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                              YOLO AI: Pothole Defect (98.4%)
                            </span>
                            <span className="px-2 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-white/60 hidden sm:inline">
                              CIVIC REPORT #CC-2026
                            </span>
                          </div>
                        )}

                        {/* Overlay Tag */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/10 text-white/80">
                            {project.title}
                          </span>
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e5b85c]/10 backdrop-blur-md border border-[#e5b85c]/30 text-[#e5b85c]">
                            CASE STUDY
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Architecture Matrix Highlights */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#080808]/60 space-y-2.5 sm:space-y-3 font-mono text-xs">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] text-[#e5b85c] mb-2 font-semibold">
                        Technical Architecture Matrix
                      </p>
                      {project.architectureHighlights.map((arch) => (
                        <div key={arch.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 gap-0.5 sm:gap-2 border-b border-white/[0.04]">
                          <span className="text-white/40 text-[10px] sm:text-xs">{arch.label}</span>
                          <span className="text-[#f4f4f5] sm:text-right font-medium text-[11px] sm:text-xs break-words">{arch.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* API Endpoints Showcase (Specifically for EdTech-CRM) */}
                    {isLatest && project.apiEndpoints && (
                      <div className="p-4 sm:p-5 rounded-2xl border border-[#e5b85c]/20 bg-[#0e0e12] space-y-3 font-mono text-xs">
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] text-[#e5b85c] font-semibold">
                          Core REST Endpoints Implementation
                        </p>
                        <div className="space-y-2">
                          {project.apiEndpoints.map((api) => (
                            <div key={api.path + api.method} className="p-2 sm:p-2.5 rounded-lg bg-black/50 border border-white/[0.04]">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span
                                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold ${
                                    api.method === "POST"
                                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                                      : api.method === "GET"
                                      ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                                      : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                                  }`}
                                >
                                  {api.method}
                                </span>
                                <span className="text-[#f4f4f5] font-semibold text-[11px] sm:text-xs break-all">{api.path}</span>
                              </div>
                              <p className="text-[10px] sm:text-[11px] text-[#94949e] font-sans font-light">
                                {api.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Narrative, Key Features & Tech Badges */}
                  <div className={`lg:col-span-6 space-y-6 sm:space-y-8 ${index % 2 === 1 && !isLatest ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#f4f4f5] leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-[#e5b85c] mt-2 uppercase tracking-wide sm:tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-[#94949e] font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Architectural & Implementation Features */}
                    <div>
                      <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
                        Key Architectural Features
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3 font-sans text-xs sm:text-sm text-[#94949e]">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 sm:gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e5b85c] mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed text-neutral-300 font-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Badges */}
                    <div>
                      <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-white/50 mb-2.5 sm:mb-3">
                        Technologies Implemented
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono tracking-wide border ${
                              t.toLowerCase().includes("spring") || t.toLowerCase().includes("java")
                                ? "border-[#e5b85c]/40 bg-[#e5b85c]/10 text-[#f3d082]"
                                : "border-white/[0.08] bg-white/[0.02] text-white/70"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                        >
                          View Repository ↗
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          Explore Live System ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;