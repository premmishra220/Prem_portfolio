import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Backend Developer Intern - Spring Boot',
      company: 'Indux Technology',
      location: 'Pune, Maharashtra',
      period: 'Feb 2026 - May 2026',
      description: [
        'Developed backend modules using Java and Spring Boot with Controller-Service-Repository architecture',
        'Built and tested RESTful APIs and implemented authentication and authorization using Spring Security and JWT',
        'Worked with Spring Data JPA for entity management and database operations',
        'Used Git, GitHub, and Postman for version control, API testing, debugging, and backend development'
      ]
    },

    {
      title: 'Bachelor of Engineering (Information Technology)',
      company: 'Sinhgad Institute of Technology',
      location: 'Pune, Maharashtra',
      period: '2023 - 2027',
      description: [
        'Currently pursuing B.E. in Information Technology with a CGPA of 7.01/10.0',
        'Building strong foundations in Java, Data Structures, Algorithms, DBMS, and Software Development',
        'Developing practical experience through backend projects, coding practice, and hackathons'
      ]
    },

    {
      title: 'Higher Secondary (12th)',
      company: 'Lakha Interstariya Madhya Vidyalaya, Barni (Bhojpur, Bihar)',
      location: 'Bihar Board',
      period: '2022',
      description: [
        'Completed Higher Secondary education from Bihar Board',
        'Secured 66.7% marks'
      ]
    },

    {
      title: 'Secondary (10th)',
      company: 'Delhi Model Public School, Kulharia (Ara, Bihar)',
      location: 'CBSE Board',
      period: '2020',
      description: [
        'Completed Secondary education from CBSE Board',
        'Secured 65.0% marks'
      ]
    }
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
                <div className="hidden md:block w-6 h-6 bg-neon-blue rounded-full border-4 border-dark-bg absolute left-1/2 transform -translate-x-1/2 z-10 shadow-neon"></div>

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

                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;