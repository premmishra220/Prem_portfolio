import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api/contacts"
      : "https://prem-portfolio-zst6.vercel.app/api/contacts";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      if (file) {
        formPayload.append("file", file);
      }

      const response = await fetch(API_URL, {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFile(null);
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ transform: "translateZ(0)" }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transform: "translateZ(0)" }}
          >
            <div className="glass-card p-8 relative">
              <h3 className="text-2xl font-bold mb-6 neon-text">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    📧
                  </div>

                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">
                      premmishrasonb@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    📞
                  </div>

                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">
                      9693146943
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    
                  </div>

                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white font-semibold">
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transform: "translateZ(0)" }}
          >
            <div className="glass-card p-8 relative">
              <h3 className="text-2xl font-bold mb-6 neon-text">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ WebkitAppearance: "none" }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ WebkitAppearance: "none" }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ WebkitAppearance: "none" }}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-neon-blue focus:outline-none text-white placeholder-gray-400 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Upload Image / Video / PDF
                  </label>

                  <input
                    type="file"
                    accept="image/*,video/*,application/pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;