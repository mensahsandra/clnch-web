import { motion } from "motion/react";
import { TimelineSection } from "@/components/log/Timeline";
import ActivityStream from "@/components/log/ActivityStream";
import ResearchQuestions from "@/components/log/ResearchQuestions";
import Roadmap from "@/components/log/Roadmap";

export default function TheClncLog() {
  return (
    <div className="pt-28 bg-white">
      {/* Header */}
      <section className="relative px-6 pt-16 pb-20 overflow-hidden">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-semibold text-teal-600 uppercase tracking-[0.2em] mb-6"
          >
            Research Log
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-4"
          >
            Questions in Motion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-500 leading-relaxed max-w-2xl"
          >
            Building in public. Researching in motion.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-base text-slate-600 leading-relaxed max-w-2xl mt-5"
          >
            CLNCH is an evolving exploration of personal context, opportunity intelligence, and human-centered AI. This log documents important product milestones, technical developments, integrations, and research questions shaping the platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 max-w-2xl"
          >
            <p className="text-sm text-slate-600 leading-relaxed">
              CLNCH is built through a combination of product development, technical experimentation, and ongoing research into how people preserve context across fragmented digital environments.
            </p>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed mt-3">
              Every feature begins as a question. Every question becomes a system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <TimelineSection />
        </div>
      </section>

      {/* Activity stream */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <ActivityStream />
        </div>
      </section>

      {/* Research questions */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="inline-block rounded-full border border-teal-200 bg-teal-50/70 px-4 py-1.5 mb-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">Research notebook</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Open Research Questions</h2>
          </motion.div>
          <ResearchQuestions />
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-3">Future vision</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Where this is going</h2>
          </motion.div>
          <Roadmap />
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              CLNCH is not just documenting product development.
            </p>
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-bold max-w-2xl mx-auto mt-2">
              It is documenting an ongoing investigation into how people think, remember, discover opportunities, and make decisions in an increasingly fragmented digital world.
            </p>

            <div className="mt-14 mb-10">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Information is everywhere. Context is not.
              </p>
              <p className="text-base font-semibold text-teal-700 mt-3">
                Building the missing context layer of the web.
              </p>
            </div>

            <a
              href="/#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/15"
            >
              Join the waitlist
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
