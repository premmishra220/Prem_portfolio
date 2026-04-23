import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'Indux Technology',
      location: 'Pune, Maharashtra',
      period: 'Current',
      description: [
        'Completed a 1-month internship and continuing as an active MERN Stack Developer intern',
        'Built and worked on full-stack applications using MongoDB, Express.js, React.js, and Node.js',
        'Developed and tested REST APIs and implemented authentication and authorization features',
        'Collaborated using Git & GitHub and improved UI responsiveness and overall performance'
      ]
    },
    {
      title: 'Bachelor of Engineering (Information Technology)',
      company: 'Sinhgad Institute of Technology',
      location: 'Pune',
      period: '2023 - 2027',
      description: [
        'Currently pursuing B.E. in Information Technology',
        'Focus on software development, data structures, and algorithms',
        'Active in coding competitions and hackathons'
      ]
    }
  ];

  const certifications = [
    'Data Science Foundation - Oracle University',
    'JavaScript Programming - Infosys Springboard',
    'Java Programming - Infosys Springboard',
    'MERN Stack Backend Development - Skill India'
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Experience & <span className="neon-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block w-6 h-6 bg-neon-blue rounded-full border-4 border-dark-bg absolute left-1/2 transform -translate-x-1/2 z-10 shadow-neon"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-neon-blue font-semibold mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                    <p className="text-gray-400 mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-neon-blue mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 neon-text">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;