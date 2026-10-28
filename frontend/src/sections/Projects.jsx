import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'CivicConnect - Civic Issue Reporting & Management System',
      description:
        'A Spring Boot based civic issue reporting platform with REST APIs, role-based authorization, JWT authentication, department assignment, status tracking, and resolution workflows.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      tech: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security', 'JWT'],
      liveLink: '#',
      githubLink: '#',
      period: 'Java / Spring Boot Project'
    },

    {
      title: 'Hotel Online Booking System',
      description:
        'A full-stack hotel booking platform built with Spring Boot and MySQL, supporting room search, availability, booking history, secure authentication, and Admin/User management.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'JWT'],
      liveLink: ' https://hotel-management-system-six-beta.vercel.app/                                         ',
      githubLink: ' https://github.com/premmishra220/hotel-management-system                            ',
      period: 'Spring Boot Project'
    },

    {
      title: 'Veyora - Full Stack E-Commerce Platform',
      description:
        'A full-stack e-commerce platform featuring product listing, shopping cart, inventory management, order tracking, Admin Dashboard, and JWT-based authentication.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveLink: ' https://veyora-kappa.vercel.app/                        ',
      githubLink: '           https://github.com/premmishra220/veyora             ',
      period: 'Full Stack Project'
    }

    
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            My <span className="neon-text">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my backend, full-stack, and software development projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm">
                  {project.period}
                </p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.liveLink}
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    className="flex-1 border border-neon-blue text-neon-blue py-2 px-4 rounded-lg text-center font-medium hover:bg-neon-blue hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;