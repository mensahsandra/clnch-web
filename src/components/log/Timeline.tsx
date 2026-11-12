import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export type LogCategory = "Product" | "Research" | "Infrastructure" | "Integrations" | "AI" | "Reflection";

export interface TimelineEntry {
  id: string;
  date: string;
  category: LogCategory;
  title: string;
  intro: string;
  list?: string[];
  blocks?: { heading: string; text: string }[];
  research?: string;
  status: string;
}

export const CATEGORY_COLORS: Record<LogCategory, string> = {
  Product: "#2563eb",
  Research: "#0d9488",
  Infrastructure: "#334155",
  Integrations: "#ea580c",
  AI: "#059669",
  Reflection: "#78716c",
};

export const ENTRIES: TimelineEntry[] = [
  {
    id: "agent-audit",
    date: "November 12, 2026",
    category: "Infrastructure",
    title: "Agent Architecture Audit",
    intro: "Completed a full review of the CLNCH intelligence stack. Verified:",
    list: [
      "ClnchAgent orchestration",
      "Tool Registry architecture",
      "Gemini integration layer",
      "Human approval workflow",
      "Composio action execution",
      "Context persistence strategy",
    ],
    blocks: [
      { heading: "Research Question", text: "What capabilities should form the foundation of a personal context layer?" },
    ],
    research: "An architecture audit is really a question about priorities: which capabilities are load-bearing for context, and which are conveniences.",
    status: "Verified",
  },
  {
    id: "connectors-hub",
    date: "November 10, 2026",
    category: "Integrations",
    title: "Connectors Hub Redesign",
    intro: "Rebuilt the Settings → Connectors experience around a unified integrations model. Highlights:",
    list: [
      "Browser connector section",
      "Chromium extension detection",
      "Searchable integration catalog",
      "Unified Gmail and Calendar controls",
      "Permission transparency model",
    ],
    blocks: [
      { heading: "Principle", text: "CLNCH can prepare. The human decides." },
    ],
    research: "Permission transparency is a prerequisite for trust: people will only connect their lives to a system that shows exactly what it can see.",
    status: "Released",
  },
  {
    id: "mcp-connectors",
    date: "November 10, 2026",
    category: "Infrastructure",
    title: "MCP & Custom Connector Support",
    intro: "Added support for:",
    list: [
      "MCP SSE endpoints",
      "MCP Stdio endpoints",
      "REST integrations",
      "Connector validation",
      "Loopback and SSRF protections",
    ],
    blocks: [
      { heading: "Research Note", text: "Investigating how external systems, tools, and agents may eventually participate in a shared context ecosystem." },
    ],
    research: "Standard protocols like MCP hint at a future where context flows between agents — the connector layer is the first experiment in that direction.",
    status: "Released",
  },
  {
    id: "resilient-intelligence",
    date: "November 10, 2026",
    category: "AI",
    title: "Resilient Opportunity Intelligence",
    intro: "Improved reliability across the extraction and reasoning pipeline. Updates:",
    list: [
      "Gemini environment fixes",
      "Structural extraction fallbacks",
      "Eligibility assessment fallbacks",
      "Action preparation fallbacks",
      "Context-preserving degradations",
    ],
    blocks: [
      { heading: "Result", text: "Opportunity capture succeeds even when external providers are unavailable." },
    ],
    research: "Graceful degradation is a context-preservation strategy: partial understanding, kept alive, beats total failure.",
    status: "Released",
  },
  {
    id: "github-connected",
    date: "November 4, 2026",
    category: "Integrations",
    title: "GitHub Connected",
    intro: "Connected GitHub account integration. Purpose — future support for:",
    list: [
      "Repository awareness",
      "Project context",
      "Development memory",
      "Build history",
    ],
    research: "A person's code history is one of the richest records of their intent — but only if it can be connected to everything else they're working on.",
    status: "Connected",
  },
  {
    id: "gmail-connected",
    date: "November 2, 2026",
    category: "Integrations",
    title: "Gmail Connected",
    intro: "Connected Gmail integration.",
    blocks: [
      { heading: "Research Direction", text: "Can email become a meaningful source of long-term personal context without requiring users to manually organize information?" },
    ],
    status: "Connected",
  },
];

export function TimelineSection() {
  const [openId, setOpenId] = useState<string | null>(ENTRIES[0].id);

  return (
    <div className="relative">
      {/* timeline spine */}
      <div className="absolute left-[7px] md:left-[_calc(6rem+7px)] top-2 bottom-2 w-px bg-gradient-to-b from-teal-200 via-slate-200 to-blue-200" />

      {/* 2026 marker */}
      <div className="relative flex items-center gap-4 md:ml-[6rem] mb-10">
        <div className="relative z-10 flex items-center">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-teal-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
          </span>
        </div>
        <span className="font-mono text-2xl font-bold tracking-tight text-slate-900">2026</span>
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Entries</span>
      </div>

      <div className="space-y-4 md:ml-[6rem]">
        {ENTRIES.map((entry, i) => {
          const open = openId === entry.id;
          const color = CATEGORY_COLORS[entry.category];
          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.2), ease: "easeOut" }}
              className="relative"
            >
              <span
                className="absolute left-0 top-7 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-white"
                style={{ borderColor: color }}
              >
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: color }} />
              </span>

              <div
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  open
                    ? "border-slate-300 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
                }`}
              >
                <button
                  onClick={() => setOpenId(open ? null : entry.id)}
                  className="w-full text-left px-5 sm:px-7 py-5 cursor-pointer"
                  aria-expanded={open}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                          style={{ backgroundColor: `${color}14`, color }}
                        >
                          {entry.category}
                        </span>
                        <span className="font-mono text-xs text-slate-400">{entry.date}</span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900">{entry.title}</h3>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 shrink-0 text-slate-400"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 border-t border-slate-100 pt-5">
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{entry.intro}</p>

                        {entry.list && (
                          <div className="mb-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5">Technical changes</p>
                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                            {entry.list.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                                {item}
                              </li>
                            ))}
                            </ul>
                          </div>
                        )}

                        {entry.blocks?.map((block) => (
                          <div
                            key={block.heading}
                            className="rounded-xl bg-gradient-to-r from-teal-50/80 to-blue-50/60 border border-teal-100/70 px-4 py-3.5 mb-3"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal-700 mb-1">{block.heading}</p>
                            <p className="text-sm text-slate-700 leading-relaxed">{block.text}</p>
                          </div>
                        ))}

                        {entry.research && (
                          <div className="rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3.5 mb-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-1">Research implications</p>
                            <p className="text-sm text-slate-700 leading-relaxed">{entry.research}</p>
                          </div>
                        )}

                        <div className="mt-4 flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-teal-600" />
                          <span className="text-xs font-semibold text-slate-500">
                            Status: <span className="text-teal-700">{entry.status}</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* 2027 future marker */}
      <div className="relative flex items-center gap-4 md:ml-[6rem] mt-12 mb-6">
        <div className="relative z-10 flex items-center">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-blue-300 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          </span>
        </div>
        <span className="font-mono text-2xl font-bold tracking-tight text-slate-300">2027</span>
        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Future Vision</span>
      </div>
    </div>
  );
}
