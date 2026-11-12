import { motion } from "motion/react";
import { CircleHelp } from "lucide-react";

const questions = [
  { area: "Personal Context", question: "How can intent be preserved alongside information?" },
  { area: "Opportunity Intelligence", question: "Can opportunity relevance be assessed using personal goals and prior activity?" },
  { area: "Human-AI Collaboration", question: "How can AI assist without removing meaningful human agency?" },
  { area: "Context Memory", question: "Can people retrieve information using memories rather than keywords?" },
];

export default function ResearchQuestions() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {questions.map((q, i) => (
          <motion.div
            key={q.area}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-[0_8px_28px_rgba(13,148,136,0.10)]"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center gap-2 mb-3">
              <CircleHelp size={14} className="text-teal-600" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{q.area}</p>
            </div>
            <p className="text-base font-semibold text-slate-800 leading-relaxed">{q.question}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
