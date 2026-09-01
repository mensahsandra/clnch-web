import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "CLNCH Lens", href: "#clnch-lens" },
  { label: "Opportunity Watch", href: "#opportunity-watch" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#faf9f5]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" onClick={() => window.location.reload()} className="flex items-center gap-2 cursor-pointer">
          <img
            src="/images/ChatGPT_Image_Aug_26,_2026,_06_51_45_AM.png"
            alt="CLNCH logo"
            className="h-12 w-12 object-contain"
          />
          <div className="leading-none">
            <p className="text-base font-bold text-[#1a3a2a] tracking-wide">CLNCH</p>
            <p className="text-[11px] text-[#5a8a6a] font-medium">From Found to Filed.</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#4a6a55] hover:text-[#1a3a2a] transition-colors font-medium cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#F47316] text-white text-sm font-semibold hover:bg-[#d9651a] transition-colors cursor-pointer shadow-sm"
        >
          Join the waitlist
        </a>

        <button
          className="md:hidden text-[#1a3a2a] cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf9f5] border-t border-[#e8e4d8] px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-[#4a6a55] font-medium py-1 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="mt-2 text-center px-5 py-2.5 rounded-full bg-[#F47316] text-white text-sm font-semibold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Join the waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
