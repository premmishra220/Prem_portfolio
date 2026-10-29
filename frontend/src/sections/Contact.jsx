import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = ({ onOpenResume }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

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
    setStatusMessage({ type: "", text: "" });

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
        setStatusMessage({
          type: "success",
          text: "Message transmitted successfully. I will get back to you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFile(null);
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Failed to send message. Please reach out directly via email.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "Could not reach the message service. Please send an email to premmishrasonb@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#e5b85c]">
            09 / Direct Inquiries
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Cinematic Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-[#f4f4f5] leading-[0.92]">
            LET'S BUILD
            <br />
            <span className="text-[#e5b85c]">SOMETHING</span>
            <br />
            USEFUL.
          </h2>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[#94949e] font-light leading-relaxed">
            I am currently open to Software Engineer and Java Backend Developer opportunities. Whether you have a project to engineer or an architectural challenge to solve, my inbox is open.
          </p>
        </motion.div>

        {/* 2-Column Layout: Direct Details & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Information Card */}
            <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e5b85c]">
                Contact Coordinates
              </p>

              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:premmishrasonb@gmail.com"
                    className="font-sans text-base sm:text-lg text-[#f4f4f5] hover:text-[#e5b85c] transition-colors font-medium break-all"
                  >
                    premmishrasonb@gmail.com
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                    Telephone
                  </span>
                  <a
                    href="tel:+919693146943"
                    className="font-sans text-base sm:text-lg text-[#f4f4f5] hover:text-[#e5b85c] transition-colors font-medium"
                  >
                    +91 9693146943
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                    Location Base
                  </span>
                  <p className="font-sans text-base text-[#f4f4f5] font-medium">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Direct Link Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3 font-mono text-xs">
                <a
                  href="https://github.com/premmishra220"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#e5b85c]/40 hover:text-[#e5b85c] transition-colors"
                >
                  <span>GITHUB PROFILE</span>
                  <span>↗</span>
                </a>

<a
                  href="https://leetcode.com/u/premmishra220/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#e5b85c]/40 hover:text-[#e5b85c] transition-colors"
                >
                  <span>Leetcode</span>
                  <span>↗</span>
                </a>


                <a
                  href="https://www.linkedin.com/in/prem-prakash-mishra-20516a288"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#e5b85c]/40 hover:text-[#e5b85c] transition-colors"
                >
                  <span>LINKEDIN NETWORK</span>
                  <span>↗</span>
                </a>

                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#e5b85c]/30 bg-[#e5b85c]/10 text-[#e5b85c] hover:bg-[#e5b85c]/20 transition-colors text-left"
                  >
                    <span>PREVIEW & DOWNLOAD RESUME</span>
                    <span>↓</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-[#0e0e11]/90 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-[#f4f4f5]">
                  Transmit a Message
                </h3>
                <p className="font-mono text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Fill in your details below to start a conversation
                </p>
              </div>

              {statusMessage.text && (
                <div
                  className={`p-4 rounded-xl mb-6 font-mono text-xs ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:border-[#e5b85c] focus:outline-none text-[#f4f4f5] placeholder-white/20 font-sans text-sm transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:border-[#e5b85c] focus:outline-none text-[#f4f4f5] placeholder-white/20 font-sans text-sm transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                    Project / Inquiry Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:border-[#e5b85c] focus:outline-none text-[#f4f4f5] placeholder-white/20 font-sans text-sm transition-colors resize-none"
                    placeholder="Describe your project requirements, opportunity, or technical inquiry..."
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                    Attach Specification / PDF / Image (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*,application/pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl font-mono text-xs text-white/70 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-[#e5b85c]/10 file:text-[#e5b85c] hover:file:bg-[#e5b85c]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {loading ? "TRANSMITTING MESSAGE..." : "TRANSMIT MESSAGE"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;