import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight"
            >
              Building
              <br />
              scalable web
              <br />
              applications with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                modern backend
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed"
            >
              Full-stack developer specializing in MERN Stack, Next.js, and
              modern backend systems. Currently exploring OpenAI integrations
              and building scalable, performance-driven web products.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition"
              >
                Contact
              </button>

              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="px-7 py-4 rounded-full border border-cyan-400/20 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/10 transition"
              >
                Resume
              </a>
            </div>

            <div className="flex gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-semibold">10+</h3>
                <p className="text-white/50 text-sm mt-2">Projects Built</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">1+</h3>
                <p className="text-white/50 text-sm mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">5+</h3>
                <p className="text-white/50 text-sm mt-2">Certificates</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-3xl" />

              <div className="relative p-4 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                <img
                  src={profile}
                  alt="profile"
                  className="w-[320px] md:w-[420px] h-[420px] md:h-[540px] object-cover rounded-[28px]"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
                <p className="text-sm text-white/60">Currently Working At</p>
                <h4 className="text-lg font-semibold">Indux Technology</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;