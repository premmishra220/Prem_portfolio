import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden"
    >
      {/*  ANIMATED BACKGROUND LINE */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent blur-[140px] opacity-30 animate-[spin_20s_linear_infinite]"></div>
      </div>

      {/* SOFT RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(118,75,162,0.08),transparent_40%)]" />

      {/*  CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT */}
        <div className="space-y-6">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-white/50 uppercase"
          >
            MERN STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Prem Mishra
            </span>
            <br />
            I build modern web apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 text-lg max-w-xl"
          >
            MERN stack developer focused on building scalable backend systems,
            modern UI, and high-performance web applications.
          </motion.p>

          {/*  BUTTONS FIXED */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition"
            >
              View Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Contact
            </button>
       {/* resume Button */}
       <a  href="/resume.pdf"
        download="resume.pdf" 
        className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:scale-195 transition" 
       >
        Resume
       </a>





          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">
          
          <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={profile}
            alt="profile"
            className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] object-cover rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,212,255,0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;