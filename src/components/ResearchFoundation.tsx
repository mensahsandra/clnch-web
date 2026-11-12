import { motion } from "motion/react";
import { BookOpen, FlaskConical } from "lucide-react";

const areas = [
  "Human Computer Interaction",
  "Information Retrieval",
  "Personal Knowledge Management",
  "Knowledge Graphs",
  "AI Memory Systems",
  "Human-AI Collaboration",
  "Decision Support Systems",
];

export default function ResearchFoundation() {
  return (
    <section id="research" className="py-24 px-6 bg-[#f0f7f2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FlaskConical size={14} className="text-[#7a9a85]" />
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85]">Research foundation</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-6">
            CLNCH is a research project before it's a product.
          </h2>
          <p className="text-base text-[#4a6a55] leading-relaxed max-w-2xl mx-auto">
            CLNCH draws from established fields that study how people work with information — and applies them to the problem of keeping context alive.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-16">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-2 rounded-full border border-[#c8ddd0] bg-white px-4 py-2.5 shadow-sm"
            >
              <BookOpen size={14} className="text-[#2d6a4f]" />
              <span className="text-sm font-semibold text-[#1a3a2a]">{area}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto rounded-2xl border-2 border-[#2d6a4f] bg-[#2d6a4f] p-8 sm:p-10 shadow-lg"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#a8d4b8] mb-4">Core research question</p>
          <p className="text-lg sm:text-xl text-white font-bold leading-relaxed">
            How can personal context be captured, represented, and retrieved across fragmented digital environments to improve understanding, decision-making, and opportunity discovery?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
