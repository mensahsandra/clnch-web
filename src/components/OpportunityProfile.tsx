import { motion } from "motion/react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

const profileFields = [
  { label: "Education", value: "BSc Computer Science" },
  { label: "Experience", value: "1.5 years" },
  { label: "Skills", value: "Python, React, ML" },
  { label: "Interests", value: "AI, Climate Tech" },
  { label: "Goals", value: "Funded MSc in Europe" },
  { label: "Location", value: "Accra, Ghana" },
  { label: "Funding needs", value: "Full funding required" },
  { label: "Career direction", value: "Research & Engineering" },
];

const matchReasons = [
  "International applicants accepted",
  "Master's level",
  "Relevant field",
  "Funding available",
];

export default function OpportunityProfile() {
  return (
    <section className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Opportunity profile</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            CLNCH knows the opportunity.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            You teach it about you.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5 relative">
              <span className="absolute -top-2 right-2 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a9a85] mb-3">Your Private Profile</p>
              <div className="grid grid-cols-2 gap-2">
                {profileFields.map((field) => (
                  <div key={field.label} className="bg-[#f7faf8] rounded-lg px-2.5 py-2">
                    <p className="text-[8px] text-[#9ab0a0] font-semibold uppercase tracking-wider mb-0.5">{field.label}</p>
                    <p className="text-[10px] text-[#1a3a2a] font-medium">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Match reasoning card */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5 relative">
              <span className="absolute -top-2 right-2 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>

              {/* New opportunity appears */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 shrink-0">
                  <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a3a2a]">UCL MSc Scholarship</p>
                  <p className="text-[10px] text-[#7a9a85]">A new opportunity appeared</p>
                </div>
              </div>

              <p className="text-[10px] text-[#2d6a4f] font-semibold mb-3">"Here's why I think this is relevant to you."</p>

              {/* MATCH */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2d6a4f]">Match</span>
                <span className="bg-[#2d6a4f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Strong fit</span>
              </div>

              {/* WHY */}
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#7a9a85] mb-1.5">Why</p>
              <div className="space-y-1 mb-3">
                {matchReasons.map((r) => (
                  <div key={r} className="flex items-center gap-1.5">
                    <CheckCircle2 size={10} className="text-[#2d6a4f] shrink-0" />
                    <span className="text-[10px] text-[#3a5a45]">{r}</span>
                  </div>
                ))}
              </div>

              {/* CHECK */}
              <div className="border-t border-[#d8ead2] pt-2.5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#F47316] mb-1.5">Check</p>
                <div className="flex items-start gap-1.5 mb-3">
                  <AlertCircle size={10} className="text-[#F47316] shrink-0 mt-0.5" />
                  <span className="text-[10px] text-[#c85a10]">This opportunity appears to require two years of experience.</span>
                </div>
              </div>

              {/* Investigate prompt */}
              <div className="bg-[#f0f7f2] rounded-lg p-2.5 border border-[#c8ddd0]">
                <p className="text-[10px] text-[#2d6a4f] font-semibold mb-2">
                  "Want me to investigate whether there are exceptions?"
                </p>
                <div className="flex gap-1.5">
                  <button className="text-[9px] font-bold bg-[#2d6a4f] text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-default">
                    Investigate <ArrowRight size={8} />
                  </button>
                  <button className="text-[9px] font-bold text-[#7a9a85] px-2.5 py-1.5 rounded-lg border border-[#e8f0ea] hover:bg-white cursor-default">
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 text-sm text-[#7a9a85] max-w-lg mx-auto leading-relaxed"
        >
          The goal is not an impressive AI score. The goal is a better decision.
        </motion.p>
      </div>
    </section>
  );
}
