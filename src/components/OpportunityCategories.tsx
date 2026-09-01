import { motion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  UsersRound,
  HandCoins,
  Rocket,
  IdCard,
  University,
  Trophy,
  Globe2,
} from "lucide-react";

const categories = [
  { label: "Scholarships", icon: GraduationCap },
  { label: "Jobs", icon: BriefcaseBusiness },
  { label: "Fellowships", icon: UsersRound },
  { label: "Grants", icon: HandCoins },
  { label: "Accelerators", icon: Rocket },
  { label: "Internships", icon: IdCard },
  { label: "University programs", icon: University },
  { label: "Competitions", icon: Trophy },
  { label: "Remote opportunities", icon: Globe2 },
  { label: "Funding", icon: HandCoins },
];

export default function OpportunityCategories() {
  return (
    <section className="relative overflow-hidden border-y border-[#e8e4d8] bg-[#f0f7f2] py-7">
      <div className="mx-auto mb-4 max-w-6xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7a9a85]">Whatever you're looking for, CLNCH stays with you.</p>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-3 px-6"
          animate={{ x: [0, -900] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {[...categories, ...categories].map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={`${category.label}-${index}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-[#c8ddd0] bg-white px-4 py-2.5 shadow-sm"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f5ee]">
                  <Icon size={13} className="text-[#2d6a4f]" />
                </span>
                <span className="text-sm font-medium text-[#1a3a2a]">{category.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
