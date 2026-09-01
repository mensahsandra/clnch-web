import { motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";
const mascotImage = "/images/ChatGPT_Image_Aug_26,_2026,_05_48_57_AM.png";

const obstacles = [
  "the website",
  "the requirements",
  "the eligibility rules",
  "the forms",
  "the questions",
  "the documents",
  "the deadlines",
  "the terms",
  "the links hiding behind other links",
];

const dropOffSteps = ["finding", "understanding", "deciding", "preparing", "submitting"];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1a3a2a] mb-4">
            The opportunity isn't always the hard part.
          </h2>
          <p className="text-base text-[#4a6a55] font-medium mb-2">You found it.</p>
          <p className="text-sm text-[#7a9a85]">Then comes —</p>
        </motion.div>

        {/* Obstacle list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {obstacles.map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-1.5 bg-white border border-[#d8ead2] rounded-full px-3.5 py-2 shadow-sm"
            >
              <X size={12} className="text-[#F47316] shrink-0" />
              <span className="text-sm text-[#4a6a55] font-medium">{o}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Drop-off sequence */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-[#7a9a85] mb-4">And somewhere between —</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {dropOffSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#1a3a2a]">{step}</span>
                {i < dropOffSteps.length - 1 && (
                  <ArrowRight size={12} className="text-[#b8d4bc]" />
                )}
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-[#1a3a2a]">people drop off.</p>
        </motion.div>

        {/* Visual transition: messy → CLNCH → structured */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Messy page */}
          <div className="bg-white rounded-xl border border-[#d8ead2] shadow-sm p-3 w-44">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e8e4d8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#e8e4d8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#e8e4d8]" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
              <div className="h-1.5 bg-[#e8e4d8] rounded w-3/4" />
              <div className="h-1.5 bg-[#e8e4d8] rounded w-5/6" />
              <div className="h-1.5 bg-[#e8e4d8] rounded w-2/3" />
              <div className="h-1.5 bg-[#e8e4d8] rounded w-full" />
              <div className="h-1.5 bg-[#e8e4d8] rounded w-4/5" />
            </div>
            <p className="text-[8px] text-[#9ab0a0] mt-2 text-center font-medium uppercase tracking-wider">Messy</p>
          </div>

          {/* CLNCH enters */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12">
              <img src={mascotImage} alt="CLNCH companion" className="w-full h-full object-contain" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#2d6a4f]">CLNCH</span>
          </div>

          {/* Arrow */}
          <ArrowRight size={20} className="text-[#b8d4bc] hidden sm:block" />

          {/* Structured */}
          <div className="bg-white rounded-xl border border-[#c8ddd0] shadow-sm p-3 w-44">
            <div className="space-y-1.5">
              {["Eligibility", "Deadline", "Funding", "Requirements"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#2d6a4f]" />
                  <span className="text-[10px] font-semibold text-[#1a3a2a]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-[#2d6a4f] mt-2 text-center font-bold uppercase tracking-wider">Structured</p>
          </div>

          {/* Arrow */}
          <ArrowRight size={20} className="text-[#b8d4bc] hidden sm:block" />

          {/* User continues */}
          <div className="bg-[#2d6a4f] rounded-xl shadow-sm p-3 w-32 text-center">
            <p className="text-[10px] font-bold text-white">You continue</p>
            <p className="text-[8px] text-[#a8d4b8] mt-0.5">in control</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14 text-lg font-bold text-[#1a3a2a]"
        >
          CLNCH is built to stay with you through that gap.
        </motion.p>
      </div>
    </section>
  );
}
