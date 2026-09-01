import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface LogEntry {
  id: string;
  number: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
}

const entries: LogEntry[] = [
  {
    id: "sidebar",
    number: "01",
    category: "BUILDING",
    categoryColor: "#2d6a4f",
    title: "We gave CLNCH a sidebar.",
    excerpt:
      "A small experiment in putting an AI opportunity assistant beside the web.",
    date: "September 2026",
    body: [
      "The first version of CLNCH lived in a tab. You'd find an opportunity, copy the link, paste it in, and wait.",
      "That worked. But it didn't feel like having an assistant beside you. It felt like using a tool.",
      "So we built a sidebar. Something that sits next to the page you're already on, reads what you're looking at, and helps you think through it — without making you switch contexts.",
      "The sidebar is early. It can summarize a page, pull out requirements, and flag deadlines. What it can't do yet is work through an application with you. That's next.",
    ],
  },
  {
    id: "abandon",
    number: "02",
    category: "FIELD NOTE",
    categoryColor: "#F47316",
    title: "Finding the opportunity isn't the hard part.",
    excerpt:
      "Why people abandon opportunities after finding them — and what it tells us about what CLNCH needs to be.",
    date: "August 2026",
    body: [
      "We talked to people who find opportunities all the time. Jobs, scholarships, grants, fellowships. They're good at finding them.",
      "But between finding and applying, something happens. The tabs multiply. The requirements get confusing. The deadline gets buried. The application asks questions they don't know how to answer.",
      "And they give up. Not because they don't want it. Because the process is too complicated to navigate.",
      "That's the gap CLNCH is built to close. Not the finding — people can find things. The everything after.",
    ],
  },
  {
    id: "reads-application",
    number: "03",
    category: "EXPERIMENT",
    categoryColor: "#1a3a2a",
    title: "What happens when CLNCH reads the application before you?",
    excerpt:
      "An experiment in letting AI parse application forms before a human touches them.",
    date: "August 2026",
    body: [
      "Most application forms are designed for people who already know what they're doing. They assume you understand the requirements, have your documents ready, and can answer every question confidently.",
      "We wanted to see what happens if CLNCH reads the form first — breaks down what's being asked, identifies what you'll need, and flags questions that might trip you up.",
      "The results were promising. People who used the pre-read completed applications faster and abandoned less often. They also reported feeling less overwhelmed.",
      "This is still an experiment. But it's pointing toward something: the most useful thing CLNCH can do might not be finding opportunities. It might be making them feel possible.",
    ],
  },
];

export default function TheClncLog() {
  const [selected, setSelected] = useState<LogEntry | null>(null);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-semibold text-[#F47316] uppercase tracking-widest mb-6"
          >
            The CLNCH Log
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1a3a2a] mb-8"
          >
            What CLNCH is building, thinking about, and learning.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-[#4a6a55] leading-relaxed"
          >
            Field notes, experiments, and releases from the work in progress.
          </motion.p>
        </div>
      </section>

      {/* Entries */}
      <section className="px-6 py-12 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-px">
            {entries.map((entry, i) => (
              <motion.button
                key={entry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                onClick={() => setSelected(entry)}
                className="w-full text-left group block py-10 border-t border-[#e8e4d8] last:border-b hover:bg-[#f0f5f0] transition-colors px-6 -mx-6 rounded-lg cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-extrabold text-[#c8ddd0] group-hover:text-[#2d6a4f] transition-colors flex-shrink-0">
                    {entry.number}
                  </span>
                  <div className="flex-1">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ color: entry.categoryColor }}
                    >
                      {entry.category}
                    </p>
                    <h2 className="text-2xl font-extrabold text-[#1a3a2a] mb-2 tracking-tight group-hover:text-[#2d6a4f] transition-colors">
                      {entry.title}
                    </h2>
                    <p className="text-base text-[#5a8a6a] leading-relaxed mb-4">
                      {entry.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[#9ab0a0]">{entry.date}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2d6a4f] group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#faf9f5] overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl mx-auto px-6 py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a4f] hover:text-[#1a3a2a] transition-colors mb-12 cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back to the Log
              </button>

              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: selected.categoryColor }}
              >
                {selected.category}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-4">
                {selected.title}
              </h1>
              <p className="text-sm text-[#9ab0a0] mb-12">{selected.date}</p>

              <div className="space-y-6">
                {selected.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-lg text-[#3a5a45] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-[#e8e4d8]">
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a4f] hover:text-[#1a3a2a] transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  Back to the Log
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
