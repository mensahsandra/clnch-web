import { motion } from "motion/react";
import { Bell } from "lucide-react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

export default function OpportunityWatch() {
  return (
    <section id="opportunity-watch" className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#2d6a4f] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <Bell size={11} />
            One capability of many
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            Closed today.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            Worth watching tomorrow.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-[#4a6a55] leading-relaxed mb-4">
              Some opportunities return. Annual scholarships. Yearly fellowships. Accelerator cohorts that open again every September.
            </p>
            <p className="text-sm text-[#4a6a55] leading-relaxed mb-6">
              Tell CLNCH when to watch. It monitors and notifies you the moment applications reopen.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Scholarships", "Fellowships", "Accelerators", "Grants", "Programs"].map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-[#4a6a55] border border-[#c8ddd0]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interaction mockup */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5 relative">
              <span className="absolute -top-2 right-2 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>

              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-[#1a3a2a]">Scholarship X</p>
                <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Currently closed</span>
              </div>
              <p className="text-[10px] text-[#9ab0a0] mb-4">Applications closed 4 months ago.</p>

              {/* User request */}
              <div className="flex gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-[#2d6a4f] shrink-0 flex items-center justify-center text-[9px] font-bold text-white">You</div>
                <div className="bg-[#f7faf8] rounded-xl px-3 py-2 border border-[#e8f0ea]">
                  <p className="text-[10px] text-[#1a3a2a]">"Watch this for September."</p>
                </div>
              </div>

              {/* CLNCH watching */}
              <div className="flex gap-2 mb-4">
                <div className="w-6 h-6 shrink-0">
                  <img src={mascotImage} alt="CLNCH companion" className="h-full w-full object-contain" />
                </div>
                <div className="bg-[#e8f5ee] rounded-xl px-3 py-2 border border-[#c8ddd0]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Bell size={9} className="text-[#2d6a4f]" />
                    <span className="text-[10px] font-semibold text-[#2d6a4f]">Watching</span>
                  </div>
                  <p className="text-[10px] text-[#4a6a55]">September 1 – 30</p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1 justify-center my-4">
                {[0, 1, 2, 3, 4].map((d) => (
                  <div key={d} className={`w-1.5 h-1.5 rounded-full ${d === 2 ? "bg-[#2d6a4f]" : "bg-[#c8ddd0]"}`} />
                ))}
              </div>

              {/* Found again */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#2d6a4f] rounded-xl p-3.5 text-white"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 shrink-0">
                    <img src={mascotImage} alt="CLNCH companion" className="h-full w-full object-contain" />
                  </div>
                  <span className="text-[10px] font-bold">CLNCH found it.</span>
                </div>
                <p className="text-[10px] text-[#c8e8d0] mb-2">Applications are open again.</p>
                <div className="flex items-center gap-1.5">
                  <Bell size={10} className="text-[#a8d4b8]" />
                  <span className="text-[9px] text-[#a8d4b8]">September 1 – 30</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
