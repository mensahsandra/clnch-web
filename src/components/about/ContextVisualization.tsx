import { motion } from "motion/react";

const items = [
  { label: "Website", x: 12, y: 18, r: -6 },
  { label: "AI tool", x: 70, y: 8, r: 4 },
  { label: "Email", x: 4, y: 46, r: 3 },
  { label: "Document", x: 76, y: 40, r: -4 },
  { label: "Tab", x: 16, y: 72, r: 5 },
  { label: "Opportunity", x: 68, y: 74, r: -3 },
];

const center = { x: 43, y: 46 };

export default function ContextVisualization() {
  return (
    <div className="relative h-[320px] sm:h-[380px] w-full select-none" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {items.map((item, i) => (
          <motion.line
            key={item.label}
            x1={item.x + 7}
            y1={item.y + 5}
            x2={center.x}
            y2={center.y}
            stroke="#2d6a4f"
            strokeWidth={0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: 1.2 + i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {items.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
          className="absolute rounded-full border border-[#d8ead2] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#4a6a55] shadow-sm"
          style={{ left: `${item.x}%`, top: `${item.y}%`, rotate: `${item.r}deg` }}
        >
          {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
        className="absolute flex h-28 w-28 items-center justify-center rounded-full bg-[#2d6a4f] shadow-xl shadow-green-900/20"
        style={{ left: `${center.x}%`, top: `${center.y}%`, transform: "translate(-50%, -50%)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-sm font-bold tracking-wide text-white"
        >
          CLNCH
        </motion.p>
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#2d6a4f]"
          animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#7a9a85]"
      >
        Fragments, becoming one picture.
      </motion.p>
    </div>
  );
}
