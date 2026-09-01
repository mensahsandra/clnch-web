import { motion } from "motion/react";
import { Check, ArrowRight, Send } from "lucide-react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

const completedItems = [
  "Eligibility",
  "Documents",
  "Questions",
  "Profile information",
  "Review",
];

export default function Completion() {
  return (
    <section className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Completion</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            Don't just find it.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            Finish it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-xl p-6 relative">
            <span className="absolute -top-2 right-2 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>

            {/* App header */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-bold text-[#1a3a2a]">UCL MSc Scholarship</p>
              <span className="text-[10px] font-semibold text-[#2d6a4f] bg-[#e8f5ee] px-2 py-0.5 rounded-full">Almost done</span>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 mb-5">
              {completedItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-[#2d6a4f] flex items-center justify-center shrink-0">
                    <Check size={11} className="text-white" />
                  </div>
                  <span className="text-xs text-[#3a5a45] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CLNCH message */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-[#f0f7f2] rounded-xl p-3.5 border border-[#c8ddd0] mb-4"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="w-7 h-7 shrink-0">
                  <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                </div>
                <p className="text-[11px] text-[#1a3a2a] leading-relaxed">
                  "Everything I can verify is complete."
                </p>
              </div>
              <p className="text-[11px] text-[#1a3a2a] leading-relaxed ml-9 mb-2">
                "One required field still needs your answer."
              </p>
              <p className="text-[11px] text-[#2d6a4f] font-semibold ml-9">
                "Ready to review?"
              </p>
            </motion.div>

            {/* Review button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="w-full flex items-center justify-center gap-2 bg-[#2d6a4f] text-white text-sm font-bold py-3 rounded-xl cursor-default hover:bg-[#245a41] transition-colors mb-4"
            >
              Review application <ArrowRight size={14} />
            </motion.button>

            {/* Submitted state */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
              className="border-t border-[#e8f0ea] pt-4"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2d6a4f] flex items-center justify-center">
                  <Send size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-[#2d6a4f] uppercase tracking-wide">Application submitted</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
