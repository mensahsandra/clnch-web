import { motion } from "motion/react";
import { Bookmark, Brain } from "lucide-react";

const questions = [
  "Why did you save this?",
  "How does it connect to your goals?",
  "What project was it for?",
  "Who shared it?",
  "What action did you intend to take?",
];

export default function Insight() {
  return (
    <section id="insight" className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">The insight</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight">
            A bookmark remembers <span className="text-[#9ab0a0]">where</span>.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight tracking-tight mt-2">
            CLNCH remembers <span className="text-[#F47316]">why</span>.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-[#4a6a55] leading-relaxed max-w-2xl mx-auto text-center mb-14"
        >
          The problem is not finding information. The problem is retaining the context that makes information useful.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="rounded-2xl border border-[#d8ead2] bg-white p-6 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[#f0f7f2] flex items-center justify-center mb-4">
              <Bookmark size={18} className="text-[#7a9a85]" />
            </div>
            <p className="text-sm font-bold text-[#1a3a2a] mb-2">A bookmark</p>
            <p className="text-sm text-[#5a8a6a] leading-relaxed">Stores the URL. Shows you the page again. Nothing more.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="rounded-2xl border-2 border-[#2d6a4f] bg-[#2d6a4f] p-6 shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2d6a4f]/40 flex items-center justify-center mb-4">
              <Brain size={18} className="text-[#a8d4b8]" />
            </div>
            <p className="text-sm font-bold text-white mb-2">CLNCH</p>
            <p className="text-sm text-[#c8e8d0] leading-relaxed">Preserves the meaning behind what you save — and keeps it connected to everything else.</p>
          </motion.div>
        </div>

        <div className="max-w-xl mx-auto space-y-2.5">
          {questions.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-full border border-[#d8ead2] bg-white px-5 py-2.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47316] shrink-0" />
              <span className="text-sm font-semibold text-[#4a6a55]">{q}</span>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center pt-6 text-lg font-bold text-[#1a3a2a]"
          >
            CLNCH preserves that context.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
