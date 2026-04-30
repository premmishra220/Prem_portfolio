import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/about.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Who I Am</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                MERN Stack Developer with hands-on experience building full stack web applications using MongoDB, Express.js,
                React.js, and Node.js. Experienced in REST API development, backend development, JWT authentication, and database design.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Strong foundation in Data Structures, Algorithms, OOP, and DBMS. Seeking Software Engineer Internship or
                Backend Developer Internship. Passionate about creating innovative solutions and learning new technologies.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 flex flex-col items-center"
          >

            {/* IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-neon-blue/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src={profile}
                alt="profile"
                className="
                  w-[260px] md:w-[300px] h-[420px] object-cover
                  rounded-2xl border border-white/10
                  grayscale group-hover:grayscale-0
                  transition duration-500
                  shadow-[0_0_40px_rgba(0,212,255,0.2)]
                "
              />
            </div>

            {/* QUICK FACTS */}
            <div className="glass-card p-6 w-full">
              <h4 className="text-xl font-semibold mb-4 neon-text">Quick Facts</h4>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-white">1+ Years</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Projects</span>
                  <span className="text-white">5+ Completed</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Location</span>
                  <span className="text-white">Pune, India</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">Education</span>
                  <span className="text-white">B.E. IT</span>
                </div>
              </div>
            </div>

            {/* INTERESTS */}
            <div className="glass-card p-6 w-full">
              <h4 className="text-xl font-semibold mb-4 neon-text">Interests</h4>

              <div className="flex flex-wrap gap-2">
                {['Web Development', 'AI/ML', 'Open Source', 'Problem Solving', 'UI/UX Design'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;