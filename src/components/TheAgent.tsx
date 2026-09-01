import { motion } from "motion/react";
import { Eye, Cpu, CheckSquare, Zap } from "lucide-react";

const agentVideo = "https://www.dropbox.com/scl/fi/wea119byh8v3dqxi3zaos/Sora_and_Cly_launch_SaaS_202608251955.mp4?rlkey=4hgfjwizfsepi7ct6t8q8bmkg&st=bqu537je&dl=1";

const agentModes: { icon: typeof Eye; key: string; title: string; body: string }[] = [
  { icon: Eye, key: "OBSERVE", title: "Observe", body: "Read pages. Understand information. Notice requirements." },
  { icon: Cpu, key: "ASSIST", title: "Assist", body: "Find information. Organize it. Retrieve your details. Prepare responses." },
  { icon: CheckSquare, key: "APPROVE", title: "Approve", body: "Ask before consequential actions. Nothing moves without your sign-off." },
  { icon: Zap, key: "AUTOMATE", title: "Automate", body: "Handle repetitive, low-risk tasks — saving, formatting, copying, organizing documents, preparing fields." },
];

export default function TheAgent() {
  return (
    <section className="bg-[#f0f7f2] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#7a9a85]">The agent</p>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#1a3a2a] sm:text-4xl lg:text-5xl">
            Let CLNCH do more.
          </h2>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#2d6a4f] sm:text-4xl lg:text-5xl">
            Keep the decision yours.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-[#d8ead2] bg-black shadow-xl"
        >
          <video
            src={agentVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="block max-h-[460px] w-full object-cover"
          />
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agentModes.map((mode, i) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="rounded-2xl border border-[#d8ead2] bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f5ee]">
                  <Icon size={17} className="text-[#2d6a4f]" />
                </div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#7a9a85]">{mode.key}</p>
                <p className="mb-2 text-sm font-bold text-[#1a3a2a]">{mode.title}</p>
                <p className="text-xs leading-relaxed text-[#5a8a6a]">{mode.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="mb-3 text-xl font-extrabold text-[#1a3a2a] sm:text-2xl">
            CLNCH doesn't quietly make consequential decisions for you.
          </h3>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8ddd0] bg-[#2d6a4f]/10 px-5 py-2.5 text-xs font-semibold text-[#2d6a4f]">
            The user remains in control.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
