import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const milestones = [
  { year: "2026", title: "Agent Foundation", note: "ClnchAgent, Tool Registry, opportunity intelligence", active: true },
  { year: "2027", title: "Personal Context Graph", note: "Projects, people, and goals as one connected picture", active: false },
  { year: "2028", title: "Cross-Platform Context Layer", note: "Context that follows you across every environment", active: false },
  { year: "Future", title: "Persistent Personal Intelligence Infrastructure", note: "A durable layer of personal context for the web", active: false },
];

export default function Roadmap() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-teal-300 via-blue-200 to-transparent hidden sm:block" />
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            className="relative"
          >
            <div
              className={`rounded-2xl border px-5 sm:px-7 py-5 transition-all duration-300 ${
                m.active
                  ? "border-teal-600/40 bg-gradient-to-r from-teal-50 to-blue-50/60 shadow-[0_6px_24px_rgba(13,148,136,0.10)]"
                  : "border-slate-200 bg-white/70 hover:border-slate-300"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className={`font-mono text-sm font-bold uppercase tracking-widest sm:w-20 shrink-0 ${m.active ? "text-teal-700" : "text-slate-400"}`}>
                  {m.year}
                </span>
                <div className="flex-1">
                  <p className={`font-bold tracking-tight ${m.active ? "text-slate-900" : "text-slate-600"}`}>{m.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{m.note}</p>
                </div>
                {m.active && (
                  <span className="self-start sm:self-center text-[10px] font-bold uppercase tracking-[0.14em] text-teal-700 bg-teal-100/70 rounded-full px-3 py-1">
                    Now
                  </span>
                )}
              </div>
            </div>
            {i < milestones.length - 1 && (
              <div className="flex justify-center py-1.5">
                <ArrowDown size={14} className="text-slate-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
