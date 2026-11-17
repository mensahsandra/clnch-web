import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const questions = [
  "Why did you save this?",
  "What was it connected to?",
  "What did you want to do next?",
];

export default function Insight() {
  return (
    <section id="insight" className="bg-[#e5e4e0] px-5 py-28 sm:px-8 sm:py-36 text-[#1d1d1d]">
      <div className="mx-auto max-w-[1165px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[0.7fr_1.8fr]"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#1d1d1d]/55">02 / The insight</p>
            <p className="mt-5 max-w-[190px] text-xs leading-relaxed text-[#1d1d1d]/55">A small shift in the question changes what a system can remember.</p>
          </div>
          <div>
            <h2 className="text-[clamp(3.3rem,7.5vw,7rem)] font-normal uppercase leading-[0.87] tracking-[-0.065em]">
              A bookmark
              <span className="block text-[#1d1d1d]/45">remembers where.</span>
              <span className="mt-3 block text-[#1d1d1d]">CLNCH remembers why.</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mt-24 min-h-[470px] overflow-hidden rounded-[30px] border border-[#6f6f6f]/20 bg-gradient-to-br from-[#78bae6] via-[#f06ba8] to-[#facb0e] p-7 sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.82),transparent_43%),radial-gradient(circle_at_12%_80%,rgba(255,255,255,0.35),transparent_32%)]" />
          <div className="absolute -right-10 -top-24 h-[430px] w-[430px] rounded-full border border-white/50" />
          <div className="absolute -right-32 -top-44 h-[650px] w-[650px] rounded-full border border-white/30" />

          <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between">
            <div className="flex items-start justify-between gap-8">
              <p className="max-w-[190px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#1d1d1d]/60">The missing layer</p>
              <span className="text-2xl text-[#1d1d1d]/55">+</span>
            </div>
            <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">
              <p className="max-w-[680px] text-[clamp(2rem,4.5vw,4.4rem)] font-normal uppercase leading-[0.92] tracking-[-0.055em] text-[#1d1d1d]">
                Information becomes useful when it remembers what it means to you.
              </p>
              <div className="space-y-4 border-l border-[#1d1d1d]/25 pl-5 text-sm leading-relaxed text-[#1d1d1d]/70">
                <p>CLNCH holds the thread between a discovery and the person who made it.</p>
                <a href="#how-it-works" className="inline-flex items-center gap-2 border-b border-[#1d1d1d]/40 pb-1 text-[11px] uppercase tracking-[0.14em] text-[#1d1d1d] hover:border-[#1d1d1d]">
                  See the thread <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {questions.map((question, i) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-t border-[#6f6f6f]/25 pt-4"
            >
              <p className="font-mono text-[10px] text-[#1d1d1d]/45">0{i + 1}</p>
              <p className="mt-4 text-base font-medium text-[#1d1d1d]">{question}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
