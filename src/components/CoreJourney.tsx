import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Download, Search, Network, Brain, TrendingUp } from "lucide-react";

const stages = [
  {
    n: "01",
    key: "CAPTURE",
    icon: Download,
    title: "Capture",
    body: "Everything you come across, in one place.",
    detail: "Web pages. Emails. Documents. Conversations. Research. Opportunities. CLNCH captures it before the context behind it disappears.",
    dark: false,
  },
  {
    n: "02",
    key: "UNDERSTAND",
    icon: Search,
    title: "Understand",
    body: "Meaning, not just content.",
    detail: "CLNCH extracts what matters — requirements, deadlines, intent — and simplifies complicated information.",
    dark: false,
  },
  {
    n: "03",
    key: "CONNECT",
    icon: Network,
    title: "Connect",
    body: "Nothing stands alone.",
    detail: "Every piece of information links to your projects, people, goals, and knowledge. Fragmented sources become one picture.",
    dark: false,
  },
  {
    n: "04",
    key: "REMEMBER",
    icon: Brain,
    title: "Remember",
    body: "Context that survives time.",
    detail: "Ask why you saved something, what it was for, and where you left off. CLNCH keeps a personal memory and a timeline of your work.",
    dark: false,
  },
  {
    n: "05",
    key: "PROGRESS",
    icon: TrendingUp,
    title: "Progress",
    body: "From understanding to action.",
    detail: "Better decisions. Less friction. More opportunities completed. For consequential actions, CLNCH asks for approval — the human remains in control.",
    dark: true,
  },
];

export default function CoreJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-3">How CLNCH works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a3a2a] tracking-tight leading-tight mb-3">
            Capture. Understand. Connect.
          </h2>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2d6a4f] tracking-tight leading-tight">
            Remember. Progress.
          </h2>
          <p className="text-sm text-[#4a6a55] mt-6 max-w-md mx-auto leading-relaxed">
            Five stages. One continuous context that follows you across the web.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[39px] sm:left-[47px] top-6 bottom-6 w-0.5 bg-[#d8ead2] hidden sm:block">
            <motion.div className="absolute top-0 left-0 right-0 bg-[#2d6a4f] rounded-full" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-5">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  className="flex gap-5 sm:gap-7 items-start"
                >
                  <div className={`shrink-0 w-[52px] h-[52px] rounded-full border-2 ${stage.dark ? "border-[#2d6a4f] bg-[#2d6a4f]" : "border-[#c8ddd0] bg-[#e8f5ee]"} flex items-center justify-center z-10`}>
                    <Icon size={18} className={stage.dark ? "text-white" : "text-[#2d6a4f]"} />
                  </div>

                  <div className={`flex-1 rounded-2xl border ${stage.dark ? "border-[#2d6a4f] bg-[#2d6a4f]" : "border-[#c8ddd0] bg-white"} px-5 py-4`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-mono font-semibold ${stage.dark ? "text-[#a8d4b8]" : "text-[#9ab0a0]"}`}>{stage.n}</span>
                      <span className={`text-[10px] font-semibold uppercase tracking-widest ${stage.dark ? "text-[#a8d4b8]" : "text-[#7a9a85]"}`}>{stage.key}</span>
                    </div>
                    <p className={`font-bold text-sm mb-1 ${stage.dark ? "text-white" : "text-[#1a3a2a]"}`}>{stage.title}</p>
                    <p className={`text-xs leading-relaxed mb-1 ${stage.dark ? "text-[#c8e8d0]" : "text-[#4a6a55]"}`}>{stage.body}</p>
                    <p className={`text-xs leading-relaxed ${stage.dark ? "text-[#a8c8b0]/80" : "text-[#9ab0a0]"}`}>{stage.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0f7f2] text-[#2d6a4f] text-xs font-semibold px-5 py-2.5 rounded-full border border-[#c8ddd0]">
            You stay in control. CLNCH holds the context.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
