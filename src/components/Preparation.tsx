import { motion } from "motion/react";
import { Check, Circle, FileText } from "lucide-react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

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
    <section className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Preparation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            Before you apply,
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            know what you're walking into.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5 relative">
              <span className="absolute -top-2 right-2 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>
              <p className="text-xs font-bold text-[#1a3a2a] mb-4">UCL MSc Scholarship</p>
              <div className="space-y-2">
                {checklistItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    {item.done ? (
                      <div className="w-4 h-4 rounded-full bg-[#2d6a4f] flex items-center justify-center shrink-0">
                        <Check size={9} className="text-white" />
                      </div>
                    ) : (
                      <Circle size={16} className="text-[#c8ddd0] shrink-0" />
                    )}
                    <span className={`text-xs ${item.done ? "text-[#3a5a45] font-medium" : "text-[#7a9a85]"}`}>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CLNCH memory interaction */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 shrink-0">
                  <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1a3a2a]">CLNCH</p>
                  <p className="text-[8px] text-[#7a9a85]">Remembers what you've shared</p>
                </div>
              </div>

              <div className="bg-[#f0f7f2] rounded-xl p-3.5 border border-[#c8ddd0] mb-3">
                <div className="flex items-start gap-2 mb-2">
                  <FileText size={12} className="text-[#2d6a4f] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[#1a3a2a] leading-relaxed">
                    "You already uploaded your transcript to CLNCH."
                  </p>
                </div>
                <p className="text-[10px] text-[#2d6a4f] font-semibold leading-relaxed">
                  "Would you like me to use it here?"
                </p>
              </div>

              <div className="flex gap-2">
                <button className="text-[10px] font-bold bg-[#2d6a4f] text-white px-3 py-2 rounded-lg cursor-default">
                  Use it
                </button>
                <button className="text-[10px] font-bold text-[#7a9a85] px-3 py-2 rounded-lg border border-[#e8f0ea] hover:bg-[#f7faf8] cursor-default">
                  Review first
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e8f0ea]">
                <p className="text-[9px] text-[#9ab0a0] leading-relaxed">
                  CLNCH remembers what you've shared and can retrieve it when you need it — without taking action on your behalf.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
