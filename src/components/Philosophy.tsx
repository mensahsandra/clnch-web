import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section className="py-32 px-6 bg-[#1a3a2a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-[0.06]">
          <defs>
            <pattern id="dots2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-12">
            Don't self-reject.
          </h2>
        </motion.div>

        <div className="space-y-5 mb-12">
          {[
            "You don't know how many people will apply.",
            "You don't know who else is being considered.",
            "You don't know whether you're exactly what they're looking for.",
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              className="text-[#a8c8b0] text-lg leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-white font-bold text-xl leading-relaxed max-w-xl mx-auto">
            You can't know if you'll get an opportunity until you take your shot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          className="max-w-lg mx-auto space-y-3"
        >
          <p className="text-[#c8e8d0] text-sm leading-relaxed">
            CLNCH doesn't decide whether you should try.
          </p>
          <p className="text-[#a8d4b8] bg-[#2d6a4f]/30 inline-block px-5 py-2 rounded-full font-semibold text-sm">
            It helps you get far enough to decide for yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
