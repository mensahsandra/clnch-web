import { motion } from "motion/react";
import { CheckSquare, Cpu, Eye, Zap } from "lucide-react";

const agentVideo = "https://www.dropbox.com/scl/fi/wea119byh8v3dqxi3zaos/Sora_and_Cly_launch_SaaS_202608251955.mp4?rlkey=4hgfjwizfsepi7ct6t8q8bmkg&st=bqu537je&dl=1";
const modes = [
  { icon: Eye, key: "OBSERVE", title: "Observe", body: "Read pages. Understand information. Notice requirements." },
  { icon: Cpu, key: "ASSIST", title: "Assist", body: "Find information. Organize it. Prepare responses." },
  { icon: CheckSquare, key: "APPROVE", title: "Approve", body: "Ask before consequential actions. Nothing moves without your sign-off." },
  { icon: Zap, key: "AUTOMATE", title: "Automate", body: "Handle repetitive, low-risk work while you keep the decision." },
];

export default function TheAgent() {
  return (
    <section className="bg-[#121212] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-40"><div className="mx-auto max-w-[1200px]"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#898989]">The agent</p><h2 className="font-editorial text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">Let CLNCH do more. Keep the decision yours.</h2></motion.div><p className="max-w-[450px] text-lg leading-relaxed text-[#898989] lg:pt-12">Assistance should expand your capacity without quietly taking away your agency.</p></div><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a1a1a]"><video src={agentVideo} autoPlay loop muted playsInline controls className="block max-h-[560px] w-full object-cover opacity-90" /></motion.div><div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-4">{modes.map(({ icon: Icon, key, title, body }, i) => <motion.div key={key} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="border-r border-white/[0.08] pr-6 last:border-0"><Icon size={20} strokeWidth={1.2} className="mb-8 text-[#78bae6]" /><p className="text-[10px] uppercase tracking-[0.16em] text-[#898989]">{key}</p><p className="mt-3 text-lg text-[#e7e7e7]">{title}</p><p className="mt-3 text-sm leading-relaxed text-[#898989]">{body}</p></motion.div>)}</div><p className="mt-16 text-center font-editorial text-3xl text-[#e7e7e7] sm:text-4xl">The user remains in control.</p></div></section>
  );
}
