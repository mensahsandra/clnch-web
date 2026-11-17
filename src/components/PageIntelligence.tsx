import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function PageIntelligence() {
  return (
    <section className="bg-[#1a1a1a] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#898989]">Page intelligence</p><h2 className="font-editorial text-5xl leading-[1.06] tracking-[-0.02em] sm:text-6xl">When the page gets complicated, ask CLNCH.</h2><p className="mt-8 max-w-[340px] text-base leading-relaxed text-[#898989]">The relevant answer is often buried in the section you almost skipped.</p><a href="#architecture" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#a0a0a0] hover:text-white">Trace the answer <ArrowUpRight size={14} className="text-[#78bae6]" /></a></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="rounded-2xl border border-white/[0.08] bg-[#121212] p-5 sm:p-8"><div className="flex items-center gap-2 border-b border-white/[0.07] pb-4"><span className="h-2 w-2 rounded-full bg-[#f06ba8]" /><span className="h-2 w-2 rounded-full bg-[#facb0e]" /><span className="h-2 w-2 rounded-full bg-[#78bae6]" /><span className="ml-3 font-mono text-[10px] text-[#5e5e5e]">scholarship.org/terms-and-conditions</span></div><div className="grid gap-6 pt-8 md:grid-cols-[1fr_280px]"><div><p className="mb-5 text-sm text-[#e7e7e7]">Terms and Conditions</p>{Array.from({ length: 9 }, (_, i) => <div key={i} className={`mb-3 h-2 rounded-full ${i === 5 ? "bg-[#7652a8]/70" : "bg-white/[0.08]"}`} style={{ width: `${98 - (i % 5) * 10}%` }} />)}<div className="mt-10 rounded-lg border border-[#7652a8]/40 bg-[#7652a8]/10 p-4"><p className="text-[10px] uppercase tracking-[0.15em] text-[#f06ba8]">Section 7</p><p className="mt-2 text-xs leading-relaxed text-[#cfcfcf]">The part that changes how your information is stored after you submit.</p></div></div><div className="border-l border-white/[0.07] pl-6"><p className="text-xs text-[#5e5e5e]">Here’s what matters:</p><ul className="mt-5 space-y-4 text-xs leading-relaxed text-[#a0a0a0]"><li>They may share information you provide.</li><li>This section affects your application data.</li><li>Nothing here appears to require payment.</li></ul><p className="mt-7 text-xs text-[#78bae6]">Want me to explain section 7?</p></div></div></motion.div>
        </div>
      </div>
    </section>
  );
}
