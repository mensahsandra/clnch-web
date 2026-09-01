import { motion } from "motion/react";

export default function FinalPhilosophy() {
  return (
    <section className="py-32 px-6 bg-[#1a3a2a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-[0.04]">
          <defs>
            <pattern id="dotsFinal" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsFinal)" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-12"
        >
          You can't know if you'll get it<br />until you try.
        </motion.h2>

        <div className="space-y-4 mb-12">
          {[
            "Maybe you'll get rejected.",
            "Maybe you'll discover you're not eligible.",
            "Maybe you'll be exactly what they're looking for.",
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              className="text-[#a8c8b0] text-base leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="text-white font-bold text-lg leading-relaxed max-w-lg mx-auto mb-6"
        >
          But you shouldn't lose an opportunity because the process was too complicated to navigate.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-[#a8d4b8] bg-[#2d6a4f]/30 inline-block px-5 py-2 rounded-full font-semibold text-sm"
        >
          CLNCH helps close that gap.
        </motion.p>
      </div>
    </section>
  );
}
