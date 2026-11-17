import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HandCoins, Rocket, UsersRound } from "lucide-react";

const categories = [
  { label: "Jobs", icon: BriefcaseBusiness },
  { label: "Scholarships", icon: GraduationCap },
  { label: "Fellowships", icon: UsersRound },
  { label: "Grants", icon: HandCoins },
  { label: "Programs", icon: Rocket },
];

const stages = [
  { number: "01", title: "Understand", detail: "what matters" },
  { number: "02", title: "Prepare", detail: "what you need" },
  { number: "03", title: "Complete", detail: "the process" },
];

export default function OpportunityWedge() {
  return (
    <section className="relative overflow-hidden bg-[#e5e4e0] px-5 py-28 sm:px-8 sm:py-36 text-[#1d1d1d]">
      <div className="mx-auto max-w-[1165px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-[0.7fr_1.8fr]"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#1d1d1d]/55">03 / Starting point</p>
            <div className="mt-10 flex flex-wrap gap-2 max-w-[210px]">
              {categories.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#1d1d1d]/25 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-[#1d1d1d]/70">
                  <Icon size={11} /> {label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(3.2rem,7.5vw,7rem)] font-normal uppercase leading-[0.86] tracking-[-0.065em]">
              Start with
              <span className="ml-[13%] block text-[#1d1d1d]/45">an opportunity.</span>
              <span className="mt-3 block">CLNCH stays with you.</span>
            </h2>
            <p className="mt-8 max-w-[520px] text-base leading-relaxed text-[#1d1d1d]/65 md:ml-[13%]">
              Opportunities are where fragmented context becomes visible. Jobs, scholarships, grants, fellowships, university applications, accelerators, and funding programs ask you to understand, prepare, remember, decide, and act.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-24 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-stretch"
        >
          <div className="relative min-h-[390px] overflow-hidden rounded-[10px] border border-[#6f6f6f]/20 bg-[#f1f0ec] p-6 sm:p-9">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 75% 30%, rgba(240,107,168,0.35), transparent 27%), radial-gradient(circle at 20% 80%, rgba(120,186,230,0.4), transparent 30%), linear-gradient(135deg, transparent 48%, rgba(250,203,14,0.3) 100%)" }} />
            <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#1d1d1d]/55">
                <span>One continuous process</span>
                <span>CLNCH / 001</span>
              </div>
              <div>
                <p className="text-[clamp(2.5rem,5vw,5rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em]">From found</p>
                <p className="ml-[16%] text-[clamp(2.5rem,5vw,5rem)] font-normal uppercase leading-[0.88] tracking-[-0.06em] text-[#1d1d1d]/45">to progress.</p>
              </div>
              <p className="max-w-[260px] text-xs leading-relaxed text-[#1d1d1d]/60">The opportunity is only the beginning. The work after finding it is where context matters most.</p>
            </div>
          </div>

          <div className="rounded-[10px] border border-[#6f6f6f]/20 bg-[#f1f0ec] p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#1d1d1d]/55">The process</p>
            <div className="mt-10 space-y-0">
              {stages.map((stage, i) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group flex items-center justify-between border-t border-[#6f6f6f]/20 py-6 last:border-b"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#1d1d1d]/45">{stage.number}</span>
                    <div>
                      <p className="text-xl font-normal uppercase tracking-[-0.03em]">{stage.title}</p>
                      <p className="mt-1 text-xs text-[#1d1d1d]/50">{stage.detail}</p>
                    </div>
                  </div>
                  <ArrowRight size={17} className="text-[#1d1d1d]/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1d1d1d]" />
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[#1d1d1d]/65">CLNCH stays with you through the process — explaining, retrieving, organizing, and preparing while you make the decisions.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 flex items-center justify-between border-t border-[#6f6f6f]/25 pt-5 text-[11px] uppercase tracking-[0.15em] text-[#1d1d1d]/55"
        >
          <span>Find something worth pursuing</span>
          <span className="hidden sm:inline">—</span>
          <span>CLNCH stays with you</span>
        </motion.div>
      </div>
    </section>
  );
}
