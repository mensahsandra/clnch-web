import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

function useParticles(count: number): Particle[] {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: count }, (_, id) => ({
      id,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 9 + Math.random() * 10,
      delay: Math.random() * 8,
      drift: -30 + Math.random() * 60,
    }))
  );
  return particles;
}

function Firefly({ p }: { p: Particle }) {
  return (
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${p.left}%`,
        bottom: -4,
        width: p.size,
        height: p.size,
        background: "radial-gradient(circle, rgba(253,230,138,0.95) 0%, rgba(253,230,138,0) 70%)",
        boxShadow: "0 0 6px 1px rgba(253,230,138,0.45)",
      }}
      animate={{
        y: [-10, -180 - Math.random() * 120],
        x: [0, p.drift],
        opacity: [0, 0.9, 0.3, 0.9, 0],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const navLinks = [
  { label: "How It Works", href: "/#how-it-works", external: true },
  { label: "About", href: "/about", external: false },
  { label: "Log", href: "/log", external: false },
  { label: "Privacy", href: "/privacy", external: false },
];

const socials = [
  { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "https://x.com/clnch_app" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const particles = useParticles(14);

  return (
    <footer className="px-3 sm:px-4 pb-4 pt-8 bg-[#faf9f5]">
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#0e2318] shadow-2xl shadow-green-950/30">
        {/* Vine / leaf border across the top */}
        <svg
          className="absolute top-0 left-0 w-full h-16 sm:h-20 pointer-events-none"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 Q150,10 300,38 T600,34 T900,42 T1200,30"
            fill="none"
            stroke="#2d6a4f"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <path
            d="M0,40 Q150,10 300,38 T600,34 T900,42 T1200,30"
            fill="none"
            stroke="#a8d4b8"
            strokeWidth="0.6"
            opacity="0.35"
          />
          {[60, 190, 340, 470, 620, 760, 900, 1040, 1150].map((x, i) => (
            <g key={x} opacity="0.55" transform={`translate(${x}, ${i % 2 === 0 ? 30 : 40})`}>
              <ellipse rx="9" ry="3.5" fill="#2d6a4f" transform={`rotate(${-28 + i * 7})`} />
              <ellipse rx="6" ry="2.2" fill="#3f8563" transform={`rotate(${20 - i * 5}) translate(12, 4)`} />
            </g>
          ))}
        </svg>

        {/* Fireflies */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          {particles.map((p) => (
            <Firefly key={p.id} p={p} />
          ))}
        </div>

        <div className="relative px-8 sm:px-12 pt-24 sm:pt-28 pb-10">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Left column */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/images/ChatGPT_Image_Aug_26,_2026,_06_51_45_AM.png"
                  alt="CLNCH logo"
                  className="h-11 w-11 object-contain rounded-xl bg-white/5 p-0.5"
                />
                <p className="text-xl font-bold tracking-wide text-white">CLNCH</p>
              </div>
              <p className="text-sm text-[#a8c8b0] leading-relaxed max-w-xs mb-2">
                Building the missing context layer of the web.
              </p>
              <p className="text-sm text-[#7a9a85] leading-relaxed max-w-xs mb-6">
                Helping people preserve the why behind what they discover.
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#5a8a6a] font-semibold">
                Built by Coreaxis HQ
              </p>
            </div>

            {/* Center navigation */}
            <div className="md:justify-self-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a8a6a] mb-5">Explore</p>
              <div className="space-y-3">
                {navLinks.map((l) =>
                  l.external ? (
                    <a key={l.label} href={l.href} className="block text-sm text-[#a8c8b0] hover:text-white transition-colors">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} to={l.href} className="block text-sm text-[#a8c8b0] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="md:justify-self-end">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a8a6a] mb-5">Connect</p>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-[#a8c8b0] hover:text-white transition-colors group"
                  >
                    {s.label === "Email" && <Mail size={13} className="text-[#5a8a6a] group-hover:text-[#a8d4b8] transition-colors" />}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-[#5a8a6a]">&copy; {year} Coreaxis HQ</p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-xs italic text-[#7a9a85]"
            >
              Information is everywhere. Context is not.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
