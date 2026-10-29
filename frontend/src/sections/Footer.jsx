import { motion } from "framer-motion";

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070707] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-display font-bold text-2xl tracking-[0.15em] text-[#f4f4f5] block">
              PREM MISHRA
            </span>
            <p className="font-mono text-xs text-[#e5b85c] uppercase tracking-[0.25em]">
              Java Backend Developer • Spring Boot Specialist
            </p>
            <p className="max-w-md text-sm text-[#94949e] font-light leading-relaxed">
              Engineering reliable backend systems, resilient REST APIs, and modern web architectures with clean separation of concerns.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <p className="text-white/40 uppercase tracking-widest mb-4">
              Sections
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  01 / HOME
                </a>
              </li>
              <li>
                <a href="#work" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  02 / SELECTED WORK
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  03 / PHILOSOPHY & ABOUT
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  04 / TECH STACK
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  05 / EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#94949e] hover:text-[#e5b85c] transition-colors">
                  06 / CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <p className="text-white/40 uppercase tracking-widest mb-4">
              Network Coordinates
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/premmishra220"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94949e] hover:text-[#e5b85c] transition-colors flex items-center justify-between"
                >
                  <span>GITHUB</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/prem-prakash-mishra-20516a288"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94949e] hover:text-[#e5b85c] transition-colors flex items-center justify-between"
                >
                  <span>LINKEDIN</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:premmishrasonb@gmail.com"
                  className="text-[#94949e] hover:text-[#e5b85c] transition-colors flex items-center justify-between"
                >
                  <span>EMAIL DIRECT</span>
                  <span>↗</span>
                </a>
              </li>
              {onOpenResume && (
                <li className="pt-2">
                  <button
                    onClick={onOpenResume}
                    className="text-[#e5b85c] hover:underline transition-colors flex items-center justify-between w-full"
                  >
                    <span>VIEW RESUME (PDF)</span>
                    <span>↓</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94949e]">
          <p>
            © {new Date().getFullYear()} PREM MISHRA. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-[#e5b85c] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;