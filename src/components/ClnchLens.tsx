import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const lines = ["Eligibility", "Funding", "Deadline", "What you need", "What matters"];

export default function ClnchLens() {
  return (
    <section id="clnch-lens" className="bg-[#121212] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-[650px] text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#898989]">CLNCH Lens</p>
          <h2 className="font-editorial text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.025em]">The web is built for pages.<span className="block text-[#898989]">CLNCH is built for people.</span></h2>
          <p className="mt-7 text-base leading-relaxed text-[#898989]">A layer beside the page that helps you ask better questions without losing the thing you were trying to do.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mt-20 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a1a1a] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4"><span className="h-2 w-2 rounded-full bg-[#7652a8]" /><span className="h-2 w-2 rounded-full bg-[#78bae6]" /><span className="h-2 w-2 rounded-full bg-[#5e5e5e]" /><div className="ml-4 max-w-[460px] flex-1 rounded-full bg-[#121212] px-4 py-2 font-mono text-[10px] text-[#5e5e5e]">university.ac.uk/scholarships/eligibility</div><span className="text-[10px] uppercase tracking-[0.12em] text-[#5e5e5e]">Concept preview</span></div>
          <div className="grid min-h-[430px] md:grid-cols-[1fr_330px]">
            <div className="border-r border-white/[0.06] p-8 sm:p-12"><div className="mb-12 h-5 w-2/3 bg-white/80" /><div className="mb-5 h-2 w-1/3 bg-white/20" /><div className="space-y-3">{Array.from({ length: 10 }, (_, i) => <div key={i} className="h-2 rounded-full bg-white/[0.08]" style={{ width: `${100 - (i % 4) * 9}%` }} />)}</div><div className="mt-12 h-3 w-1/2 bg-white/20" /><div className="mt-4 space-y-3">{Array.from({ length: 5 }, (_, i) => <div key={i} className="h-2 rounded-full bg-white/[0.08]" style={{ width: `${85 - i * 8}%` }} />)}</div></div>
            <div className="bg-[#222] p-6 sm:p-8"><div className="flex items-center justify-between border-b border-white/[0.08] pb-5"><div><p className="text-sm text-white">CLNCH</p><p className="mt-1 text-[10px] text-[#898989]">Reading this page</p></div><span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#78bae6] via-[#7652a8] to-[#f06ba8]" /></div><div className="mt-7 space-y-5"><p className="ml-auto w-fit rounded-xl bg-white/[0.08] px-3 py-2 text-xs text-[#cfcfcf]">What does this mean?</p><div className="rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-4"><p className="text-xs leading-relaxed text-[#cfcfcf]">In simple terms, they are asking for a degree equivalent to a UK 2:1.</p><p className="mt-3 text-xs leading-relaxed text-[#898989]">Your degree appears relevant, but the exact classification is unclear.</p><p className="mt-4 text-xs text-[#78bae6]">Want me to look for the international requirement?</p></div></div><div className="mt-8 flex gap-2"><button className="rounded-full bg-white px-4 py-2 text-[11px] text-black">Look for it</button><button className="rounded-full border border-white/15 px-4 py-2 text-[11px] text-[#a0a0a0]">Not now</button></div></div>
          </div>
        </motion.div>
        <div className="mt-5 flex items-center justify-between text-xs text-[#5e5e5e]"><span>Understand the page without leaving it.</span><a href="#insight" className="inline-flex items-center gap-2 hover:text-white">Read the idea <ArrowUpRight size={13} /></a></div>
      </div>
    </section>
  );
}
