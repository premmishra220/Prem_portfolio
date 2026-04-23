import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Next.js', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', level: 85, color: 'from-gray-500 to-gray-700' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'Git/GitHub', level: 85, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            My <span className="neon-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-neon-blue font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 neon-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Python',
              'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'VS Code', 'Postman'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm font-medium text-white hover:border-neon-blue transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 + 1 }}
                whileHover={{ scale: 1.1, borderColor: '#00d4ff' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;