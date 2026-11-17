import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const orbitingObjects = [
  { label: "projects", left: "8%", top: "18%", rotate: -12, tone: "from-[#78bae6] to-[#f1f0ec]" },
  { label: "ideas", left: "77%", top: "12%", rotate: 8, tone: "from-[#f06ba8] to-[#facb0e]" },
  { label: "research", left: "4%", top: "62%", rotate: 6, tone: "from-[#facb0e] to-[#f1f0ec]" },
  { label: "goals", left: "82%", top: "62%", rotate: -8, tone: "from-[#78bae6] to-[#f06ba8]" },
  { label: "people", left: "18%", top: "78%", rotate: 12, tone: "from-[#f1f0ec] to-[#78bae6]" },
  { label: "opportunities", left: "71%", top: "81%", rotate: -5, tone: "from-[#facb0e] to-[#f06ba8]" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[780px] overflow-hidden bg-[#e5e4e0] px-5 sm:px-8 pt-28 pb-12 text-[#1d1d1d]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-[52%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#bfbebe]/70" />
        <div className="absolute left-[48%] top-[48%] h-[1040px] w-[1040px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#bfbebe]/50" />
        <motion.div
          className="absolute left-1/2 top-[48%] h-[420px] w-[420px] sm:h-[530px] sm:w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-[43%_57%_52%_48%/51%_46%_54%_49%]"
          style={{
            background: "radial-gradient(circle at 44% 49%, rgba(255,255,255,0.95) 0 14%, transparent 45%), radial-gradient(circle at 18% 35%, #f06ba8 0%, transparent 50%), radial-gradient(circle at 78% 18%, #facb0e 0%, transparent 52%), radial-gradient(circle at 66% 88%, #78bae6 0%, transparent 57%), #f1f0ec",
            filter: "blur(1px)",
            boxShadow: "inset -30px -34px 60px rgba(29,29,29,0.12), 0 25px 80px rgba(120,186,230,0.18)",
          }}
          animate={{ rotate: [0, 5, -3, 0], scale: [1, 1.025, 0.99, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[59%] top-[28%] h-16 w-16 rounded-full bg-white/50 blur-2xl" />
      </div>

      {orbitingObjects.map((object, i) => (
        <motion.div
          key={object.label}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
          transition={{ opacity: { duration: 0.7, delay: 0.4 + i * 0.08 }, scale: { duration: 0.7, delay: 0.4 + i * 0.08 }, y: { duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 } }}
          className={`absolute z-10 hidden sm:flex h-14 w-20 items-end justify-between rounded-[10px] bg-gradient-to-br ${object.tone} p-2 shadow-[0_10px_24px_rgba(29,29,29,0.10)]`}
          style={{ left: object.left, top: object.top, rotate: `${object.rotate}deg` }}
        >
          <span className="text-[9px] uppercase tracking-[0.08em] text-[#1d1d1d]/70">{object.label}</span>
          <span className="h-2 w-2 rounded-full border border-[#1d1d1d]/40" />
        </motion.div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[640px] max-w-[1400px] flex-col justify-between">
        <div className="flex items-start justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[180px] text-[11px] font-medium uppercase tracking-[0.16em] text-[#1d1d1d]/65"
          >
            Personal context infrastructure for the web
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href="#waitlist"
            className="inline-flex items-center gap-3 rounded-full border border-[#1d1d1d]/25 bg-[#e5e4e0]/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] backdrop-blur-sm transition-colors hover:bg-[#f1f0ec]"
          >
            Join the waitlist <ArrowRight size={13} />
          </motion.a>
        </div>

        <div className="relative mx-auto w-full max-w-[1040px] text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-20 text-[clamp(3.7rem,10.4vw,9.2rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em]"
          >
            Information
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
            className="relative z-20 ml-[14%] text-[clamp(3.7rem,10.4vw,9.2rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em]"
          >
            is everywhere.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, ease: "easeOut" }}
            className="relative z-20 ml-[32%] text-[clamp(3.7rem,10.4vw,9.2rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em]"
          >
            Context is not.
          </motion.h1>
        </div>

        <div className="flex items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-[260px] text-xs leading-relaxed text-[#1d1d1d]/65"
          >
            CLNCH helps preserve the why behind what you discover, connect what feels fragmented, and move understanding forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#1d1d1d]/55"
          >
            Scroll to explore <ArrowDown size={13} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
