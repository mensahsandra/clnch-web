import { motion } from "motion/react";
import { Lightbulb, Link2, Scale, Sprout } from "lucide-react";

const beliefs = [
  { icon: Lightbulb, title: "Better Understanding", text: "Better understanding creates better decisions. Better decisions create meaningful progress." },
  { icon: Link2, title: "Context Matters", text: "Information alone is not enough. Context gives information meaning." },
  { icon: Scale, title: "Humans Remain in Control", text: "Technology should support judgment, not replace it." },
  { icon: Sprout, title: "Room for People", text: "The best systems create more room for curiosity, creativity, and action." },
];

const fields = [
  { title: "Personal Context Systems", note: "How individuals capture, organize, and reconnect the pieces of their digital lives." },
  { title: "Human–AI Collaboration", note: "Where assistance ends, judgment begins — and how systems can respect that line." },
  { title: "Information Retrieval", note: "Finding things is solved. Finding them again, with meaning attached, is not." },
  { title: "Opportunity Intelligence", note: "Understanding what an opportunity demands, and whether it fits the person seeing it." },
  { title: "Knowledge Representation", note: "How context can be structured so a machine can reason with it — and a person can trust it." },
  { title: "Decision Support Systems", note: "Turning accumulated understanding into confident, well-timed action." },
];

const questions = [
  { area: "Personal Context", question: "How can intent be preserved alongside information?" },
  { area: "Opportunity Intelligence", question: "How can opportunities be understood within the context of a person's goals?" },
  { area: "Context Memory", question: "Can people retrieve information through memories rather than keywords?" },
  { area: "Human–AI Collaboration", question: "How can AI assist without removing agency?" },
];

const flow = ["Information", "Context", "Understanding", "Decision", "Progress"];

export default function About() {
  return (
    <div className="pt-28 bg-[#faf9f5]">
      {/* Header */}
      <section className="px-6 pt-20 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-semibold text-[#7a9a85] uppercase tracking-[0.2em] mb-8"
          >
            About CLNCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#1a3a2a] mb-3"
          >
            Information is everywhere.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#2d6a4f] mb-12"
          >
            Context is not.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="space-y-5 text-lg text-[#4a6a55] leading-relaxed max-w-2xl"
          >
            <p>People leave pieces of themselves across websites, AI tools, emails, documents, conversations, opportunities, and applications.</p>
            <p>The information survives.</p>
            <p className="text-[#1a3a2a] font-semibold">The context often does not.</p>
            <p className="pt-3">CLNCH is exploring how personal context can be preserved, connected, and transformed into meaningful progress.</p>
          </motion.div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="px-6 py-24 border-t border-[#e8e4d8]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-[#F47316] uppercase tracking-[0.2em] mb-6"
            >
              Founder's Note
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] tracking-tight mb-8"
            >
              Why CLNCH Exists
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="space-y-5 text-base sm:text-lg text-[#4a6a55] leading-relaxed"
            >
              <p>While pursuing research, graduate study, software projects, scholarships, career opportunities, and entrepreneurial ideas, I found myself repeatedly rebuilding context across different systems.</p>
              <p>AI tools knew fragments of my work.</p>
              <p>Emails contained opportunities.</p>
              <p>Documents stored ideas.</p>
              <p>Browser tabs held unfinished investigations.</p>
              <p>Everything seemed connected, yet no system understood the larger picture.</p>
              <p className="text-[#1a3a2a] font-semibold pt-2">The problem was not access to information.</p>
              <p className="text-[#1a3a2a] font-semibold">The problem was maintaining context.</p>
              <p className="pt-2">CLNCH began as an attempt to solve that problem.</p>
              <p>First for myself.</p>
              <p>Then for everyone else navigating the same complexity.</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <ContextVisualization />
          </motion.div>
        </div>
      </section>

      {/* What we believe */}
      <section className="px-6 py-24 bg-[#f0f7f2] border-t border-[#e8e4d8]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] tracking-tight mb-12"
          >
            What We Believe
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {beliefs.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="rounded-2xl border border-[#d8ead2] bg-white p-7 transition-shadow hover:shadow-[0_8px_28px_rgba(26,58,42,0.08)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8f5ee] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#2d6a4f]" />
                  </div>
                  <p className="text-lg font-bold text-[#1a3a2a] mb-2">{b.title}</p>
                  <p className="text-sm text-[#5a8a6a] leading-relaxed">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research foundations */}
      <section className="px-6 py-24 border-t border-[#e8e4d8]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-[#7a9a85] uppercase tracking-[0.2em] mb-5"
          >
            Research Foundations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] tracking-tight mb-4"
          >
            Areas of Exploration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base text-[#4a6a55] leading-relaxed mb-10 max-w-xl"
          >
            CLNCH sits at the intersection of several evolving fields.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fields.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                className="group relative rounded-2xl border border-[#d8ead2] bg-white p-6 overflow-hidden cursor-default transition-all duration-300 hover:border-[#2d6a4f]/40 hover:shadow-[0_8px_24px_rgba(26,58,42,0.09)]"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#2d6a4f] to-[#F47316] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-[10px] font-mono text-[#9ab0a0] mb-3">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-base font-bold text-[#1a3a2a] mb-2">{f.title}</p>
                <p className="text-sm text-[#9ab0a0] leading-relaxed transition-colors duration-300 group-hover:text-[#5a8a6a]">
                  {f.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Central research question */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl bg-[#1a3a2a] px-8 sm:px-14 py-16 sm:py-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" className="opacity-[0.05]">
                <defs>
                  <pattern id="dotsAboutQ" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotsAboutQ)" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-xs font-semibold text-[#a8d4b8] uppercase tracking-[0.2em] mb-8">A Question In Motion</p>
              <p className="text-2xl sm:text-4xl font-extrabold text-white leading-snug tracking-tight mb-8">
                How can personal context be preserved across fragmented digital environments?
              </p>
              <p className="text-sm sm:text-base text-[#a8c8b0] leading-relaxed max-w-xl mx-auto">
                CLNCH is an ongoing exploration of that question through software, research, experimentation, and real-world workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Questions in motion */}
      <section className="px-6 py-24 border-t border-[#e8e4d8]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] tracking-tight mb-4"
          >
            Questions in Motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-sm text-[#7a9a85] mb-10"
          >
            From the research notebook — open questions we're working through.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {questions.map((q, i) => (
              <motion.div
                key={q.area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="relative rounded-xl border border-[#e0d8c4] bg-[#fbf7ec] p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, rgba(45,106,79,0.06) 28px)" }}
              >
                <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#F47316]/50 rounded-l-xl" />
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a9a85] mb-3">{q.area}</p>
                <p className="text-base font-semibold text-[#1a3a2a] leading-relaxed">{q.question}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The long view */}
      <section className="px-6 py-28 bg-[#f0f7f2] border-t border-[#e8e4d8]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1a3a2a] tracking-tight mb-8"
          >
            The Long View
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-base sm:text-lg text-[#4a6a55] leading-relaxed mb-20"
          >
            <p>CLNCH is building a personal context layer for the web.</p>
            <p>Information is abundant.</p>
            <p className="text-[#1a3a2a] font-semibold">Context is fragile.</p>
            <p className="pt-2">Our goal is to help people connect what they discover, remember why it mattered, and make meaningful progress over time.</p>
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            {flow.map((step, i) => (
              <motion.div key={step} className="flex flex-col items-center">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.18, ease: "easeOut" }}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold tracking-wide ${
                    i === flow.length - 1
                      ? "bg-[#2d6a4f] text-white shadow-lg shadow-green-900/20"
                      : "bg-white border border-[#c8ddd0] text-[#2d6a4f]"
                  }`}
                >
                  {step}
                </motion.span>
                {i < flow.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.18 + 0.12 }}
                    className="text-[#b8d4bc] py-0.5"
                  >
                    ↓
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
