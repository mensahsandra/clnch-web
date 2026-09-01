import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const beliefs = [
  { title: "Find it.", subtitle: "Don't lose it." },
  { title: "Understand it.", subtitle: "Don't guess." },
  { title: "Prepare for it.", subtitle: "Don't scramble." },
  { title: "Complete it.", subtitle: "Don't leave it unfinished." },
  { title: "Decide for yourself.", subtitle: "CLNCH stays beside you." },
];

const milestones = [
  {
    year: "2026",
    title: "The idea",
    text: "CLNCH begins with a simple question: Why is finding an opportunity easier than actually pursuing it?",
  },
  {
    year: "2026",
    title: "First prototype",
    text: "The first CLNCH workflows begin turning opportunity links into structured, understandable information.",
  },
  {
    year: "2026",
    title: "The agent vision",
    text: "CLNCH evolves from an opportunity tracker toward an assistant that can work beside the user on the web.",
  },
  {
    year: "Next",
    title: "The build",
    text: "Browser assistance, personalized opportunity investigation and human-in-the-loop application support.",
  },
];

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-semibold text-[#F47316] uppercase tracking-widest mb-6"
          >
            About CLNCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1a3a2a] mb-8"
          >
            The opportunity isn't always the hard part.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#2d6a4f] mb-12"
          >
            Sometimes, it's everything that comes after.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-5 text-lg text-[#4a6a55] leading-relaxed"
          >
            <p>CLNCH was born from a simple frustration:</p>
            <p>You find something worth pursuing.</p>
            <p>Then the tabs multiply.</p>
            <p>The requirements get confusing.</p>
            <p>The deadline gets buried.</p>
            <p>The application asks questions you don't know how to answer.</p>
            <p className="text-[#1a3a2a] font-semibold">
              And somewhere between "I should apply" and "I submitted", people give up.
            </p>
            <p className="text-2xl font-bold text-[#1a3a2a] pt-4">
              CLNCH exists to close that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we're building */}
      <section className="px-6 py-24 bg-[#1a3a2a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-[0.05]">
            <defs>
              <pattern id="dotsAbout" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotsAbout)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight"
          >
            What we're building
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-5 text-lg text-[#a8c8b0] leading-relaxed"
          >
            <p>An AI opportunity assistant that stays beside you.</p>
            <p>
              CLNCH helps you investigate an opportunity, understand what it requires, see whether it fits you, prepare what you need, and work through the application.
            </p>
            <p className="text-white font-bold text-xl pt-2">Not instead of you.</p>
            <p className="text-white font-bold text-xl">With you.</p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-32 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-12"
          >
            You can't know if you'll get an opportunity until you take your shot.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="space-y-4 text-lg text-[#4a6a55] leading-relaxed max-w-xl mx-auto"
          >
            <p>CLNCH can't promise you'll get the job, scholarship, fellowship or grant.</p>
            <p>It can help make sure the process doesn't stop you before you have the chance.</p>
          </motion.div>
        </div>
      </section>

      {/* What CLNCH believes */}
      <section className="px-6 py-24 bg-[#f0f5f0]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold text-[#1a3a2a] mb-12 tracking-tight"
          >
            What CLNCH believes
          </motion.h2>
          <div className="space-y-6">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#2d6a4f] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1a3a2a]">{b.title}</p>
                  <p className="text-base text-[#5a8a6a]">{b.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLNCH so far — timeline */}
      <section className="px-6 py-24 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] mb-16 tracking-tight"
          >
            CLNCH so far
          </motion.h2>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#c8ddd0]" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative pb-12 last:pb-0"
              >
                <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[#F47316] ring-4 ring-[#faf9f5]" />
                <p className="text-xs font-bold text-[#F47316] uppercase tracking-widest mb-2">{m.year}</p>
                <h3 className="text-xl font-bold text-[#1a3a2a] mb-2">{m.title}</h3>
                <p className="text-base text-[#5a8a6a] leading-relaxed max-w-lg">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Coreaxis */}
      <section className="px-6 py-24 bg-[#1a3a2a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-[0.04]">
            <defs>
              <pattern id="dotsCore" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotsCore)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold text-white mb-6 tracking-tight"
          >
            Built by
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-extrabold text-white mb-6 tracking-tight"
          >
            Coreaxis
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-[#a8c8b0] leading-relaxed max-w-lg mb-8"
          >
            CLNCH is being built as part of Coreaxis, an independent product studio exploring how AI can make complex digital experiences easier for people to navigate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="mailto:mensahs@coreaxishq.tech"
              className="inline-flex items-center gap-2 text-[#a8d4b8] hover:text-white transition-colors font-semibold text-sm"
            >
              Meet Coreaxis
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
