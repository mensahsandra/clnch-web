import { motion } from "motion/react";
import { Check, Circle, FileText } from "lucide-react";

const checklistItems = [
  { label: "Eligibility checked", done: true },
  { label: "Funding understood", done: true },
  { label: "Deadline confirmed", done: true },
  { label: "CV required", done: true },
  { label: "Personal statement required", done: true },
  { label: "Reference required", done: false },
  { label: "Transcript required", done: false },
  { label: "Application question 4", done: false },
];

export default function Preparation() {
  return (
    <section className="bg-[#1a1a1a] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#898989]">Preparation</p><h2 className="font-editorial text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">Before you apply, know what you’re walking into.</h2></motion.div><p className="max-w-[460px] text-lg leading-relaxed text-[#898989] lg:pt-12">CLNCH turns a complicated opportunity into a sequence you can understand, check, and move through at your own pace.</p></div>
        <div className="mt-24 grid gap-5 lg:grid-cols-[1fr_0.85fr]"><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-2xl border border-white/[0.08] bg-[#121212] p-6 sm:p-8"><div className="flex items-center justify-between border-b border-white/[0.07] pb-5"><p className="text-base text-[#e7e7e7]">UCL MSc Scholarship</p><span className="text-[10px] uppercase tracking-[0.12em] text-[#f06ba8]">In progress</span></div><div className="mt-7 space-y-4">{checklistItems.map((item, i) => <motion.div key={item.label} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="flex items-center gap-3"><span className={`flex h-5 w-5 items-center justify-center rounded-full border ${item.done ? "border-[#78bae6] bg-[#78bae6]/15" : "border-[#5e5e5e]"}`}>{item.done ? <Check size={11} className="text-[#78bae6]" /> : <Circle size={10} className="text-[#5e5e5e]" />}</span><span className={`text-sm ${item.done ? "text-[#cfcfcf]" : "text-[#898989]"}`}>{item.label}</span></motion.div>)}</div></motion.div><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#222] p-6 sm:p-8"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7652a8]/20 blur-3xl" /><div className="relative"><div className="flex items-center justify-between border-b border-white/[0.07] pb-5"><div><p className="text-sm text-[#e7e7e7]">A remembered detail</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#898989]">From your context</p></div><FileText size={18} strokeWidth={1.2} className="text-[#78bae6]" /></div><div className="mt-12"><p className="font-editorial text-3xl leading-tight text-[#e7e7e7]">“You already uploaded your transcript to CLNCH.”</p><p className="mt-5 text-base leading-relaxed text-[#a0a0a0]">Would you like me to use it here?</p></div><div className="mt-12 flex gap-3"><button className="rounded-full bg-white px-5 py-2.5 text-xs text-black">Use it</button><button className="rounded-full border border-white/15 px-5 py-2.5 text-xs text-[#a0a0a0]">Review first</button></div></div></motion.div></div>
      </div>
    </section>
  );
}
