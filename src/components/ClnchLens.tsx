import { motion } from "motion/react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

export default function ClnchLens() {
  return (
    <section id="clnch-lens" className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#2d6a4f] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            CLNCH Lens
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight mb-3">
            The web is built for pages.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d6a4f] leading-tight">
            CLNCH is built for people.
          </h2>
        </motion.div>

        {/* Browser + sidebar mockup */}
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
                university.ac.uk/scholarships/eligibility
              </div>
            </div>

            <div className="flex">
              {/* Webpage content */}
              <div className="flex-1 p-5 sm:p-6 border-r border-[#e8f0ea]">
                <div className="h-3 bg-[#1a3a2a]/70 rounded w-2/3 mb-3" />
                <div className="h-2 bg-[#c8ddd0] rounded w-1/3 mb-4" />
                <div className="space-y-1.5 mb-4">
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-5/6" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-4/5" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-3/4" />
                </div>
                <div className="h-2.5 bg-[#c8ddd0] rounded w-1/2 mb-3" />
                <div className="space-y-1.5 mb-4">
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-2/3" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-5/6" />
                </div>
                <div className="h-2.5 bg-[#c8ddd0] rounded w-2/5 mb-3" />
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
                  <div className="h-1.5 bg-[#e8e4d8] rounded w-3/4" />
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
                    "What does this mean?"
                  </p>
                </div>

                {/* CLNCH response */}
                <div className="flex gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#7BC67B] shrink-0 flex items-center justify-center">
                    <span className="text-white text-[7px] font-bold">K</span>
                  </div>
                  <div className="bg-white rounded-lg px-2.5 py-2 border border-[#e8f0ea] flex-1">
                    <p className="text-[10px] text-[#4a6a55] leading-relaxed">
                      In simple terms, they are saying you need a bachelor's degree equivalent to a UK 2:1.
                    </p>
                    <p className="text-[10px] text-[#4a6a55] leading-relaxed mt-1.5">
                      Your KNUST degree appears relevant, but this page doesn't specify whether your exact classification qualifies.
                    </p>
                    <p className="text-[10px] text-[#2d6a4f] font-semibold leading-relaxed mt-1.5">
                      Want me to look for their international equivalency requirement?
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-1.5 mt-auto">
                  <button className="text-[9px] font-bold bg-[#2d6a4f] text-white px-2.5 py-1.5 rounded-lg cursor-default">
                    Look for it
                  </button>
                  <button className="text-[9px] font-bold text-[#7a9a85] px-2.5 py-1.5 rounded-lg border border-[#e8f0ea] hover:bg-white cursor-default">
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center mt-4 text-xs text-[#9ab0a0] italic">
            CLNCH understands the page you're looking at. You don't need to leave and open another tool.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
