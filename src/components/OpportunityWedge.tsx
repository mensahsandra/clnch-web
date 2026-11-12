import { motion } from "motion/react";
import { ArrowRight, BriefcaseBusiness, GraduationCap, HandCoins, Rocket, UsersRound } from "lucide-react";

const categories = [
  { label: "Jobs", icon: BriefcaseBusiness },
  { label: "Scholarships", icon: GraduationCap },
  { label: "Fellowships", icon: UsersRound },
  { label: "Grants", icon: HandCoins },
  { label: "Programs", icon: Rocket },
];

export default function OpportunityWedge() {
  return (
    <section className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Why we started with opportunities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-4">
            Opportunities are where fragmented context becomes visible.
          </h2>
          <p className="text-base text-[#4a6a55] leading-relaxed max-w-2xl mx-auto mb-8">
            Jobs, scholarships, grants, fellowships, university applications, accelerators, and funding programs require understanding, preparation, memory, decisions, and action. They are the first domain where CLNCH is being applied.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="flex items-center gap-2 rounded-full border border-[#c8ddd0] bg-white px-4 py-2.5 shadow-sm"
            >
              <Icon size={15} className="text-[#2d6a4f]" />
              <span className="text-sm font-semibold text-[#1a3a2a]">{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-bold"
        >
          {[
            ["Understand it", "what matters"],
            ["Prepare for it", "what you need"],
            ["Complete it", "the process"],
          ].map(([title, detail], index) => (
            <div key={title} className="flex items-center gap-3">
              <div className="rounded-xl bg-[#e8f5ee] border border-[#c8ddd0] px-4 py-3 text-left">
                <p className="text-[#2d6a4f]">{title}</p>
                <p className="text-xs font-medium text-[#7a9a85] mt-0.5">{detail}</p>
              </div>
              {index < 2 && <ArrowRight size={16} className="text-[#b8d4bc] rotate-90 sm:rotate-0" />}
            </div>
          ))}
        </motion.div>

        <p className="mt-10 text-lg font-bold text-[#1a3a2a]">From finding an opportunity to moving through it.</p>
      </div>
    </section>
  );
}
