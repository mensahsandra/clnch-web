import { motion } from "motion/react";

const lines = [
  "My research lived in one place.",
  "Opportunities existed in another.",
  "Conversations happened elsewhere.",
  "AI tools knew fragments of my work — but none understood the larger picture.",
];

export default function FounderNote() {
  return (
    <section id="founder" className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Founder note</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-8">
            CLNCH began from a simple frustration.
          </h2>
        </motion.div>

        <div className="space-y-3 mb-8">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.09, ease: "easeOut" }}
              className="text-base text-[#4a6a55] leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-[#1a3a2a] font-bold leading-relaxed mb-3"
        >
          The problem wasn't access to information.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-[#2d6a4f] font-bold leading-relaxed mb-8"
        >
          The problem was maintaining context.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-base text-[#4a6a55] leading-relaxed"
        >
          CLNCH is my attempt to solve that.
        </motion.p>
      </div>
    </section>
  );
}
