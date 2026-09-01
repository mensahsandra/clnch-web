import { motion } from "motion/react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

export default function PageIntelligence() {
  return (
    <section className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Page intelligence</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            When the page gets complicated,
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            ask CLNCH.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-[#d8ead2] shadow-xl overflow-hidden relative">
            <span className="absolute top-2 right-2 z-20 text-[8px] font-medium text-[#9ab0a0] bg-[#f7faf8] border border-[#e8f0ea] px-1.5 py-0.5 rounded-full">Concept preview</span>

            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f7faf8] border-b border-[#e8f0ea]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#e8e4d8]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e8e4d8]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e8e4d8]" />
              <div className="ml-2 bg-[#edf4f0] rounded px-3 py-1 text-[10px] text-[#9ab0a0] flex-1 max-w-md">
                scholarship.org/terms-and-conditions
              </div>
            </div>

            <div className="flex">
              {/* Terms page */}
              <div className="flex-1 p-5 sm:p-6 border-r border-[#e8f0ea]">
                <p className="text-[10px] font-bold text-[#1a3a2a] mb-3">Terms and Conditions</p>
                <div className="space-y-1.5 mb-3">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="h-1.5 bg-[#e8e4d8] rounded" style={{ width: `${100 - n * 5}%` }} />
                  ))}
                </div>
                <div className="h-2.5 bg-[#c8ddd0] rounded w-1/2 mb-3" />
                <div className="space-y-1.5 mb-3">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="h-1.5 bg-[#e8e4d8] rounded" style={{ width: `${95 - n * 8}%` }} />
                  ))}
                </div>
                {/* Section 7 highlighted */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="bg-[#F47316]/8 border border-[#F47316]/20 rounded-lg p-2.5 mb-3"
                >
                  <p className="text-[9px] font-bold text-[#F47316] mb-1">Section 7</p>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
                    <div className="h-1.5 bg-[#e8e4d8] rounded w-4/5" />
                    <div className="h-1.5 bg-[#e8e4d8] rounded w-3/4" />
                  </div>
                </motion.div>
                <div className="space-y-1.5">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-1.5 bg-[#e8e4d8] rounded" style={{ width: `${90 - n * 10}%` }} />
                  ))}
                </div>
              </div>

              {/* CLNCH sidebar */}
              <div className="w-full sm:w-64 bg-[#f7faf8] p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 shrink-0">
                    <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#1a3a2a]">CLNCH</p>
                    <p className="text-[8px] text-[#7a9a85]">Reading this page</p>
                  </div>
                </div>

                {/* User question */}
                <div className="flex gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#2d6a4f] shrink-0 flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">You</span>
                  </div>
                  <p className="text-[10px] text-[#1a3a2a] bg-[#e8f5ee] rounded-lg px-2.5 py-1.5 leading-snug">
                    "Read this for me."
                  </p>
                </div>

                {/* CLNCH response */}
                <div className="flex gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#7BC67B] shrink-0 flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">K</span>
                  </div>
                  <div className="bg-white rounded-lg px-2.5 py-2 border border-[#e8f0ea] flex-1">
                    <p className="text-[9px] font-bold text-[#1a3a2a] mb-1.5">Here's what matters:</p>
                    <ul className="space-y-1">
                      <li className="text-[10px] text-[#4a6a55] leading-snug">• They collect and may share information you provide.</li>
                      <li className="text-[10px] text-[#4a6a55] leading-snug">• This section affects how your application information is handled.</li>
                      <li className="text-[10px] text-[#4a6a55] leading-snug">• Nothing here appears to require payment.</li>
                    </ul>
                    <p className="text-[10px] text-[#2d6a4f] font-semibold mt-2">
                      Want me to explain section 7?
                    </p>
                  </div>
                </div>

                {/* Section 7 explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="bg-[#e8f5ee] rounded-lg p-2.5 border border-[#c8ddd0]"
                >
                  <p className="text-[8px] font-bold text-[#F47316] uppercase tracking-wider mb-1">Section 7</p>
                  <p className="text-[9px] text-[#3a5a45] leading-relaxed">
                    This section explains how your data is stored after you submit. You can request deletion.
                  </p>
                </motion.div>

                <p className="text-[8px] text-[#7a9a85] italic mt-3 text-center">
                  Read by CLNCH. You decide.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <p className="text-xs text-[#9ab0a0] italic">
              CLNCH does not provide legal advice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
