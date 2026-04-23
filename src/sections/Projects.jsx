import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Full Stack LMS',
      description: 'A comprehensive Learning Management System built with MERN stack, featuring JWT authentication, role-based access control, and responsive design.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      liveLink: '#',
      githubLink: 'https://github.com/premmishra220/full-stack-lms',
      
    },
    {
      title: 'AI-Powered SaaS',
      description: 'Web application using Cloudinary AI for social media image optimization with dynamic aspect ratios and seamless authentication.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      tech: ['Next.js', 'Prisma', 'Cloudinary AI'],
      liveLink: '#',
      githubLink: 'https://github.com/premmishra220/AI_SAAS.git',
      period: 'Dec 2025 – Mar 2026'
    },
    {
      title: 'Indux CRM',
      description: 'Collection of full-stack applications developed during internship, focusing on REST APIs, authentication, and UI responsiveness.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://induxcrm.induxtechnology.com/dashboard',
      githubLink: 'https://github.com/Agroking-Store/induxCRM.git      ',
      period: 'Ongoing Internship'
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
            A showcase of my recent work and contributions
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
                <p className="text-gray-300 mb-4 text-sm">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded text-xs font-medium">
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

export default Projects 