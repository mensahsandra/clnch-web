import { motion } from "motion/react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

const interactions = [
  "What does this mean?",
  "Find the deadline.",
  "Do I qualify?",
  "Read this section.",
  "Help me answer this.",
  "What's missing?",
  "Use the information from my profile.",
];

export default function TheSidebar() {
  return (
    <section className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">The sidebar</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            You shouldn't have to leave the page
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            to get help.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center max-w-4xl mx-auto">
          {/* Mobile app mockup with floating mascot */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div
                className="relative bg-white rounded-2xl border border-[#d8ead2] shadow-xl overflow-hidden"
                style={{ width: "260px", height: "440px" }}
              >
                <span className="absolute top-2 right-2 z-20 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept</span>

                {/* App header */}
                <div className="px-4 py-3 bg-[#f7faf8] border-b border-[#e8f0ea]">
                  <p className="text-[10px] font-bold text-[#1a3a2a]">Application Form</p>
                  <p className="text-[8px] text-[#9ab0a0]">UCL MSc Scholarship</p>
                </div>

                {/* Form fields */}
                <div className="p-4 space-y-3">
                  <div>
                    <div className="h-2 bg-[#e8e4d8] rounded w-1/3 mb-1.5" />
                    <div className="h-6 bg-[#f7faf8] rounded border border-[#e8f0ea]" />
                  </div>
                  <div>
                    <div className="h-2 bg-[#e8e4d8] rounded w-1/4 mb-1.5" />
                    <div className="h-6 bg-[#f7faf8] rounded border border-[#e8f0ea]" />
                  </div>
                  <div>
                    <div className="h-2 bg-[#e8e4d8] rounded w-2/5 mb-1.5" />
                    <div className="h-12 bg-[#f7faf8] rounded border border-[#e8f0ea]" />
                  </div>
                  <div>
                    <div className="h-2 bg-[#e8e4d8] rounded w-1/3 mb-1.5" />
                    <div className="h-6 bg-[#f7faf8] rounded border border-[#e8f0ea]" />
                  </div>
                </div>

                {/* Floating mascot button */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                  className="absolute bottom-4 right-4 z-20"
                >
                  <div className="relative w-12 h-12">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#2d6a4f]/20"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="w-12 h-12 rounded-full bg-[#f0f7f2] border-2 border-[#2d6a4f] flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8">
                        <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar open — interactions */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-lg p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e8f0ea]">
                <div className="w-8 h-8 shrink-0">
                  <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1a3a2a]">CLNCH is here</p>
                  <p className="text-[8px] text-[#7a9a85]">Tap to ask anything</p>
                </div>
              </div>

              <p className="text-[9px] font-bold uppercase tracking-wider text-[#7a9a85] mb-3">Try asking:</p>
              <div className="space-y-2">
                {interactions.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-2 bg-[#f7faf8] rounded-lg px-3 py-2 border border-[#e8f0ea]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] shrink-0" />
                    <span className="text-[11px] text-[#1a3a2a] font-medium italic">"{q}"</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-[9px] text-[#9ab0a0] mt-4 leading-relaxed">
                CLNCH is physically beside you through the process. Here when you need it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
