import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";

const areas = [
  "Human Computer Interaction",
  "Information Retrieval",
  "Personal Knowledge Management",
  "Knowledge Graphs",
  "AI Memory Systems",
  "Human-AI Collaboration",
  "Decision Support Systems",
];

export default function ResearchFoundation() {
  return (
    <section id="research" className="bg-[#1a1a1a] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#898989]"><FlaskConical size={14} strokeWidth={1.2} /> Research foundation</div>
            <h2 className="font-editorial text-5xl leading-[1.08] tracking-[-0.02em] text-[#e7e7e7] sm:text-6xl">A product built from questions.</h2>
            <p className="mt-8 max-w-[340px] text-base leading-relaxed text-[#898989]">CLNCH draws from fields that study how people work with information — and applies them to the problem of keeping context alive.</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area, i) => (
              <motion.div key={area} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group flex min-h-[112px] flex-col justify-between border-t border-[#252525] py-4 transition-colors hover:border-[#78bae6]">
                <div className="flex items-start justify-between gap-4"><BookOpen size={16} strokeWidth={1.2} className="mt-1 text-[#7652a8]" /><span className="font-mono text-[10px] text-[#5e5e5e]">0{i + 1}</span></div>
                <p className="text-base text-[#cfcfcf] transition-colors group-hover:text-white">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }} className="relative mt-32 overflow-hidden rounded-3xl border border-[#252525] bg-[#121212] p-8 sm:p-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-[470px] w-[470px] rounded-full border border-[#7652a8]/30" />
          <div className="pointer-events-none absolute -right-44 -top-48 h-[700px] w-[700px] rounded-full border border-[#78bae6]/20" />
          <div className="relative z-10 max-w-[760px]">
            <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-[#898989]">Core research question</p>
            <p className="font-editorial text-[clamp(2.3rem,4.5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] text-[#e7e7e7]">How can personal context be captured, represented, and retrieved across fragmented digital environments?</p>
            <a href="#architecture" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#a0a0a0] transition-colors hover:text-white">See the system <ArrowUpRight size={14} className="text-[#78bae6]" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
