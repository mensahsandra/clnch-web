import { motion } from "motion/react";

const capabilities = [
  "Find", "Investigate", "Understand", "Personalize",
  "Prepare", "Track", "Answer", "Apply", "Complete",
];

export default function ProductVision() {
  return (
    <section id="vision" className="py-24 px-6 bg-[#1a3a2a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-[0.05]">
          <defs>
            <pattern id="dotsVision" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsVision)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#a8c8b0] mb-4">Product vision</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-10">
            CLNCH is becoming your opportunity assistant.
          </h2>
        </motion.div>

        {/* Capability words */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {capabilities.map((cap, i) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-sm font-bold text-[#a8d4b8] bg-[#2d6a4f]/30 px-3 py-1.5 rounded-full border border-[#2d6a4f]/30"
            >
              {cap}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-[#7a9a85] mb-4"
        >
          Across the fragmented web.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-white font-bold leading-relaxed max-w-xl mx-auto"
        >
          The goal isn't to replace you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg text-[#a8d4b8] font-bold leading-relaxed max-w-xl mx-auto"
        >
          It's to remove the friction between you and the opportunity.
        </motion.p>
      </div>
    </section>
  );
}
