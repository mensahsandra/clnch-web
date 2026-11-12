import { motion } from "motion/react";
import { Target, Bookmark, GitCompareArrows, MessagesSquare, FileText, CalendarClock } from "lucide-react";

const events = [
  { icon: Target, action: "Goal Created", detail: "Graduate Programs: Climate & Machine Learning", accent: "#0d9488" },
  { icon: Bookmark, action: "Captured", detail: "Oxford MSc Programme Requirements", accent: "#2563eb" },
  { icon: GitCompareArrows, action: "Compared", detail: "Oxford MSc vs Stanford Earth & Energy", accent: "#ea580c" },
  { icon: MessagesSquare, action: "Interview", detail: "DeepMind Technical Deep-Dive", accent: "#78716c" },
  { icon: FileText, action: "Captured", detail: "NSF Seed Fund Grant", accent: "#059669" },
  { icon: CalendarClock, action: "Follow-up Scheduled", detail: "Stanford Fellowship Referee", accent: "#2563eb" },
];

export default function ActivityStream() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] p-6 sm:p-10"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700 mb-2">Activity stream</p>
      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3">Context in Motion</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl">
        A glimpse of the kind of personal context CLNCH holds — events flowing from your goals, captures, comparisons, and follow-ups.
      </p>

      <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.detail}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="group rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-4 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-[0_6px_20px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${event.accent}12` }}
                >
                  <Icon size={15} style={{ color: event.accent }} />
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: event.accent }}
                >
                  {event.action}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">{event.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
