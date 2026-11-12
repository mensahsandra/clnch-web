import { motion } from "motion/react";
import { User, Bot, Wrench, Database, Sparkles, Blocks } from "lucide-react";

const agentLayers = ["Understanding", "Context Resolution", "Tool Dispatch", "Reasoning", "Human Approval"];
const tools = ["Retrieve Web", "Get Profile", "Get Context", "Assess Fit", "Prepare Action", "Composio Actions"];

function FlowNode({
  icon: Icon,
  label,
  sub,
  dark,
}: {
  icon: typeof User;
  label: string;
  sub?: string[];
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-5 py-4 w-full max-w-sm mx-auto shadow-sm ${
        dark ? "border-[#2d6a4f] bg-[#2d6a4f] shadow-lg" : "border-[#d8ead2] bg-white"
      }`}
    >
      <div className="flex items-center justify-center gap-2.5">
        <Icon size={16} className={dark ? "text-[#a8d4b8]" : "text-[#2d6a4f]"} />
        <p className={`text-sm font-bold ${dark ? "text-white" : "text-[#1a3a2a]"}`}>{label}</p>
      </div>
      {sub && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {sub.map((item) => (
            <span
              key={item}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                dark ? "bg-[#2d6a4f]/40 text-[#c8e8d0]" : "bg-[#f0f7f2] text-[#4a6a55] border border-[#e8f0ea]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-2">
      <span className="text-[#b8d4bc] text-lg leading-none">↓</span>
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 bg-[#faf9f5]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-4">Architecture</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-5">
            This isn't a concept. It's built.
          </h2>
          <p className="text-base text-[#4a6a55] leading-relaxed max-w-2xl mx-auto">
            CLNCH runs on an agent architecture with a real tool system, persistent memory, and a human approval step before anything consequential happens.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FlowNode icon={User} label="You" />
            <Arrow />
            <FlowNode icon={Bot} label="ClnchAgent" sub={agentLayers} dark />
            <Arrow />
            <FlowNode icon={Wrench} label="Tool Registry" sub={tools} />
            <Arrow />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2"
          >
            {[
              { icon: Database, label: "Supabase Memory", note: "Personal context store" },
              { icon: Sparkles, label: "Gemini", note: "Understanding engine" },
              { icon: Blocks, label: "Connected Apps", note: "MCP, Gmail, GitHub & more" },
            ].map(({ icon: Icon, label, note }) => (
              <div key={label} className="rounded-2xl border border-[#d8ead2] bg-white p-4 text-center shadow-sm">
                <Icon size={16} className="text-[#2d6a4f] mx-auto mb-2" />
                <p className="text-xs font-bold text-[#1a3a2a]">{label}</p>
                <p className="text-[11px] text-[#7a9a85] mt-0.5">{note}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0f7f2] text-[#2d6a4f] text-xs font-semibold px-5 py-2.5 rounded-full border border-[#c8ddd0]">
            Every consequential action runs through a human approval step.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
