import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "WORK", href: "#work", number: "01" },
  { label: "ABOUT", href: "#about", number: "02" },
  { label: "EXPERIENCE", href: "#experience", number: "03" },
  { label: "CONTACT", href: "#contact", number: "04" },
];

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 sm:py-4 bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08]"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex flex-col"
          >
            <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#f4f4f5] group-hover:text-[#e5b85c] transition-colors duration-300">
              PREM MISHRA
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider sm:tracking-[0.25em] text-[#94949e] uppercase -mt-0.5">
              Java Backend Developer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group relative font-mono text-xs tracking-[0.2em] text-[#94949e] hover:text-[#f4f4f5] transition-colors duration-300 py-1"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e5b85c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center px-4 py-1.5 rounded-full font-mono text-xs tracking-wider border border-[#e5b85c]/40 text-[#e5b85c] hover:bg-[#e5b85c]/10 transition-colors duration-300"
              >
                RESUME
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-4.5 flex flex-col items-end space-y-1.5">
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 rotate-45 translate-y-2 bg-[#e5b85c]" : "w-5"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "w-3"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 -rotate-45 -translate-y-1 bg-[#e5b85c]" : "w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl md:hidden pt-20 px-6 sm:px-8 flex flex-col justify-between pb-8 overflow-y-auto"
          >
            <div className="space-y-5">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e5b85c] mb-4">
                Navigation
              </p>
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="flex items-baseline justify-between border-b border-white/[0.08] pb-3.5 group"
                  >
                    <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f5] group-hover:text-[#e5b85c] transition-colors">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-white/30">
                      {item.number}
                    </span>
                  </a>
                </motion.div>
              ))}

              {onOpenResume && (
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full py-3 rounded-full border border-[#e5b85c]/40 text-[#e5b85c] font-mono text-xs tracking-wider bg-[#e5b85c]/5"
                  >
                    VIEW RESUME
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-white/[0.08] pt-5 mt-6 flex items-center justify-between text-[11px] font-mono text-[#94949e]">
              <span>PUNE, INDIA</span>
              <a
                href="https://github.com/premmishra220"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GITHUB ↗
              </a>
              <a
                href="https://www.linkedin.com/in/prem-prakash-mishra-20516a288"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LINKEDIN ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;