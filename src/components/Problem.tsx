import { motion } from "motion/react";

const sources = [
  "Google",
  "ChatGPT",
  "Claude",
  "Email",
  "PDFs",
  "Notion",
  "LinkedIn",
  "Research Papers",
  "Browser Tabs",
];

const questions = [
  "Tell me who you are again.",
  "What are you working on?",
  "Why did you save this?",
];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">The problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1a3a2a] mb-5">
            Your information lives everywhere.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#2d6a4f] mb-5">
            Your context lives nowhere.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {sources.map((source, i) => (
            <motion.div
              key={source}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 bg-white border border-[#d8ead2] rounded-full px-4 py-2.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47316] shrink-0" />
              <span className="text-sm text-[#4a6a55] font-medium">{source}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-center mb-14"
        >
          <p className="text-lg font-bold text-[#1a3a2a] mb-2">All disconnected.</p>
          <p className="text-base text-[#4a6a55] max-w-xl mx-auto leading-relaxed mb-6">
            You constantly rebuild context. Every new system asks:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {questions.map((q) => (
              <span key={q} className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-dashed border-[#c8ddd0] px-4 py-2 text-sm font-semibold text-[#7a9a85] italic">
                {q}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3">
            <div className="w-full sm:w-48 rounded-2xl border border-[#d8ead2] bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7a9a85] mb-1">Every tool</p>
              <p className="text-sm font-semibold text-[#1a3a2a]">Stores your information</p>
            </div>
            <div className="w-full sm:w-56 rounded-2xl border-2 border-[#F47316] bg-white p-5 text-center shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F47316] mb-1">No tool</p>
              <p className="text-sm font-semibold text-[#1a3a2a]">Remembers your context</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14 text-lg font-bold text-[#1a3a2a] max-w-2xl mx-auto"
        >
          CLNCH exists to close that gap — a personal context layer that holds the why behind everything you discover.
        </motion.p>
      </div>
    </section>
  );
}
