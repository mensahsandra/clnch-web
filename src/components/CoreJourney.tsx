import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Brain, Download, Network, Search, TrendingUp } from "lucide-react";

const stages = [
  { n: "01", key: "CAPTURE", icon: Download, title: "Capture", body: "Everything you come across, in one place.", detail: "Web pages, emails, documents, conversations, research, opportunities." },
  { n: "02", key: "UNDERSTAND", icon: Search, title: "Understand", body: "Meaning, not just content.", detail: "Requirements, deadlines, intent — made legible." },
  { n: "03", key: "CONNECT", icon: Network, title: "Connect", body: "Nothing stands alone.", detail: "Fragments link back to your projects, people, goals, and knowledge." },
  { n: "04", key: "REMEMBER", icon: Brain, title: "Remember", body: "Context that survives time.", detail: "Ask why you saved something, what it was for, and where you left off." },
  { n: "05", key: "PROGRESS", icon: TrendingUp, title: "Progress", body: "From understanding to action.", detail: "You decide. CLNCH keeps the thread." },
];

export default function CoreJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.08, 0.82], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={ref} className="relative overflow-hidden bg-[#121212] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(77,47,135,0.24),transparent_28%),radial-gradient(circle_at_15%_70%,rgba(32,111,121,0.14),transparent_24%)]" />
      <div className="steep-grain pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[650px] text-center"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#898989]">How CLNCH works</p>
          <h2 className="font-editorial text-[clamp(3.1rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.025em] text-[#e7e7e7]">
            Five stages.
            <span className="block text-[#898989]">One continuous context.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[500px] text-base leading-relaxed text-[#a0a0a0]">CLNCH follows the movement from a passing discovery to the understanding and action that make it matter.</p>
        </motion.div>

        <div className="relative mx-auto mt-28 max-w-[920px]">
          <div className="absolute bottom-10 left-[18px] top-10 w-px bg-[#252525] sm:left-[35px]">
            <motion.div className="w-full bg-gradient-to-b from-[#78bae6] via-[#7652a8] to-[#f06ba8]" style={{ height: lineHeight }} />
          </div>
          <div className="space-y-16 sm:space-y-20">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative grid gap-8 pl-12 sm:grid-cols-[100px_1fr] sm:gap-10 sm:pl-0"
                >
                  <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#5d5d5d] bg-[#121212] sm:relative sm:left-auto sm:h-[70px] sm:w-[70px]">
                    <Icon size={18} strokeWidth={1.2} className="text-[#e7e7e7]" />
                  </div>
                  <div className="border-b border-[#252525] pb-10">
                    <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#898989]">
                      <span>{stage.n}</span><span className="text-[#5e5e5e]">/</span><span>{stage.key}</span>
                    </div>
                    <h3 className="font-editorial text-4xl leading-none tracking-[-0.015em] text-[#e7e7e7] sm:text-5xl">{stage.title}</h3>
                    <p className="mt-4 text-xl leading-relaxed text-[#e7e7e7]">{stage.body}</p>
                    <p className="mt-3 max-w-[560px] text-base leading-relaxed text-[#898989]">{stage.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-20 flex items-center justify-center gap-3 text-xs text-[#a0a0a0]">
          <span className="h-px w-8 bg-[#4d2f87]" /> You stay in control. CLNCH holds the context. <ArrowDown size={14} className="text-[#78bae6]" />
        </motion.div>
      </div>
    </section>
  );
}
