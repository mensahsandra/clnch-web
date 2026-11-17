import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";

const sources = [
  { label: "Research", detail: "papers, notes, unfinished threads", tone: "from-[#78bae6] to-[#f1f0ec]" },
  { label: "Conversations", detail: "messages, advice, open loops", tone: "from-[#f06ba8] to-[#facb0e]" },
  { label: "Opportunities", detail: "jobs, grants, programs, deadlines", tone: "from-[#facb0e] to-[#f1f0ec]" },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#e5e4e0] px-5 py-28 sm:px-8 sm:py-36 text-[#1d1d1d]">
      <div className="mx-auto max-w-[1165px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-[0.8fr_1.8fr] md:items-end"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#1d1d1d]/55">01 / The problem</p>
            <p className="mt-5 max-w-[180px] text-xs leading-relaxed text-[#1d1d1d]/55">The web gives us more places to look, but fewer places to remember why we looked.</p>
          </div>
          <h2 className="max-w-[820px] text-[clamp(3rem,7vw,6.2rem)] font-normal uppercase leading-[0.9] tracking-[-0.06em]">
            Everything is connected.
            <span className="ml-[14%] block text-[#1d1d1d]/40">Nothing remembers.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-20 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-center"
        >
          <div className="max-w-[280px]">
            <p className="text-lg leading-relaxed text-[#1d1d1d]/75">You move between tools that each hold a fragment of the picture.</p>
            <p className="mt-5 text-sm leading-relaxed text-[#1d1d1d]/55">The page is saved. The message is searchable. The file is still there. But the reason it mattered begins to fade.</p>
          </div>

          <div className="relative min-h-[340px] rounded-[10px] border border-[#6f6f6f]/20 bg-[#f1f0ec] p-5 sm:p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(111,111,111,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(111,111,111,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
            <div className="relative flex h-full min-h-[285px] items-center justify-center">
              <div className="absolute left-[10%] top-[12%] h-16 w-24 rotate-[-8deg] rounded-[9px] bg-gradient-to-br from-[#78bae6] to-[#f1f0ec] p-3 shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#1d1d1d]/65">browser</span>
              </div>
              <div className="absolute right-[9%] top-[18%] h-16 w-24 rotate-[7deg] rounded-[9px] bg-gradient-to-br from-[#f06ba8] to-[#facb0e] p-3 shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#1d1d1d]/65">email</span>
              </div>
              <div className="absolute bottom-[12%] left-[18%] h-16 w-24 rotate-[5deg] rounded-[9px] bg-gradient-to-br from-[#facb0e] to-[#f1f0ec] p-3 shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#1d1d1d]/65">document</span>
              </div>
              <div className="absolute bottom-[14%] right-[18%] h-16 w-24 rotate-[-6deg] rounded-[9px] bg-gradient-to-br from-[#78bae6] to-[#f06ba8] p-3 shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#1d1d1d]/65">idea</span>
              </div>

              <motion.div
                animate={{ scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#1d1d1d] shadow-xl"
              >
                <Search size={21} strokeWidth={1.5} className="text-[#e5e4e0]" />
                <span className="absolute -bottom-7 whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-[#1d1d1d]/55">the missing context</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-24 grid gap-5 sm:grid-cols-3"
        >
          {sources.map((source) => (
            <div key={source.label} className="group border-t border-[#6f6f6f]/25 pt-4">
              <div className={`mb-6 h-36 rounded-[10px] bg-gradient-to-br ${source.tone} p-4 transition-transform duration-500 group-hover:-translate-y-1`}>
                <div className="flex h-full items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.12em] text-[#1d1d1d]/70">{source.label}</span>
                  <span className="text-2xl text-[#1d1d1d]/40">+</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#1d1d1d]">{source.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#1d1d1d]/55">{source.detail}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-20 flex items-center justify-between border-t border-[#6f6f6f]/25 pt-5 text-[11px] uppercase tracking-[0.15em] text-[#1d1d1d]/55">
          <span>Information survives</span>
          <ArrowRight size={15} />
          <span>Context gets rebuilt</span>
        </div>
      </div>
    </section>
  );
}
