import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import dataScience  from "../assets/certificates/dataScience.png";
import html         from  "../assets/certificates/html.png";
import java         from  "../assets/certificates/java.png";
import javascript   from   "../assets/certificates/javascript.png";

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certificates = [
    {
      title: "Data Science Foundation - Oracle",
      image: dataScience,
    },
    {
      title: "JavaScript Programming - Infosys",
      image: javascript,
    },
    {
      title: "Java Programming - Infosys",
      image: java,
    },
    {
      title: "Html5 - Infosys",
      image: html,
    },
  ];

  return (
    <section
      id="certificates"
      className="section-padding bg-gradient-to-b from-gray-900 to-dark-bg"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            My <span className="neon-text">Certificates</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              
              /* 🔥 YAHI CHANGE HAI */
              onClick={() => window.open(cert.image, "_blank")}

              className="glass-card p-4 cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-neon-blue transition">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;