import { motion } from "motion/react";
import { ArrowRight, Globe2, Send, UserRound } from "lucide-react";

const obstacles = [
  "five tabs for one task",
  "information scattered across tools",
  "forms that ask for context you already gave",
  "terms that take time to understand",
  "work you have to repeat",
];

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
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">What is CLNCH?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#1a3a2a] mb-5">
            The web is powerful.
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#2d6a4f] mb-5">
            It's also fragmented.
          </h2>
          <p className="text-base text-[#4a6a55] max-w-2xl mx-auto leading-relaxed">
            One task can mean opening five tabs, copying information between apps, figuring out what something means, and remembering what you were doing in the first place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-16"
        >
          {obstacles.map((obstacle, i) => (
            <motion.div
              key={obstacle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 bg-white border border-[#d8ead2] rounded-full px-4 py-2.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47316] shrink-0" />
              <span className="text-sm text-[#4a6a55] font-medium">{obstacle}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3">
            <div className="w-full sm:w-44 rounded-2xl border border-[#d8ead2] bg-white p-5 text-center shadow-sm">
              <UserRound size={22} className="text-[#2d6a4f] mx-auto mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#7a9a85] mb-1">You</p>
              <p className="text-sm font-semibold text-[#1a3a2a]">Your goal</p>
            </div>
            <ArrowRight size={20} className="text-[#b8d4bc] rotate-90 sm:rotate-0" />
            <div className="w-full sm:w-48 rounded-2xl border-2 border-[#2d6a4f] bg-[#2d6a4f] p-5 text-center shadow-lg">
              <Send size={22} className="text-[#a8d4b8] mx-auto mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#a8d4b8] mb-1">CLNCH</p>
              <p className="text-sm font-semibold text-white">The layer in the middle</p>
            </div>
            <ArrowRight size={20} className="text-[#b8d4bc] rotate-90 sm:rotate-0" />
            <div className="w-full sm:w-44 rounded-2xl border border-[#d8ead2] bg-white p-5 text-center shadow-sm">
              <Globe2 size={22} className="text-[#2d6a4f] mx-auto mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#7a9a85] mb-1">The web</p>
              <p className="text-sm font-semibold text-[#1a3a2a]">All the moving parts</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14 text-lg font-bold text-[#1a3a2a]"
        >
          CLNCH helps you move through the web without constantly piecing the process together yourself.
        </motion.p>
      </div>
    </section>
  );
}
