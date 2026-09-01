import { motion } from "motion/react";

const highlights = [
  {
    title: "CLNCH is an assistant",
    text: "CLNCH provides information, organization, explanations and assistance. It does not guarantee that an application will be accepted or that information provided by an opportunity provider is accurate.",
  },
  {
    title: "You remain in control",
    text: "CLNCH may help prepare information or perform actions you authorize. You are responsible for reviewing important information before submitting an application or making a consequential decision.",
  },
  {
    title: "AI can be wrong",
    text: "CLNCH uses automated systems and AI. Outputs may be incomplete, inaccurate or outdated. Verify important information against the original source.",
  },
  {
    title: "Opportunities belong to their providers",
    text: "CLNCH does not control the organizations offering jobs, scholarships, grants, fellowships or other opportunities.",
  },
  {
    title: "Don't misuse CLNCH",
    text: "No abuse, fraud, impersonation, unauthorized access, automated abuse or attempts to circumvent third-party systems.",
  },
];

const sections = [
  {
    title: "Accounts",
    body: "You are responsible for maintaining the security of your account and for all activity that occurs under it. You must be at least 16 years old to use CLNCH.",
  },
  {
    title: "Acceptable use",
    body: "You agree not to use CLNCH to abuse, harass, or deceive any person or organization; submit false or fraudulent applications; impersonate another person; access unauthorized systems; or attempt to circumvent security or rate limits of CLNCH or any third-party service.",
  },
  {
    title: "Third-party services",
    body: "CLNCH may interact with third-party websites, APIs, and services. CLNCH is not responsible for the content, accuracy, or practices of those services. Your use of third-party services is subject to their terms.",
  },
  {
    title: "Intellectual property",
    body: "CLNCH and its original content, features, and design are owned by Coreaxis and protected by intellectual property laws. Content you provide remains yours; you grant CLNCH a license to process it as needed to provide the service.",
  },
  {
    title: "AI-generated content",
    body: "CLNCH generates summaries, suggestions, and other outputs using AI. These outputs may be incomplete, inaccurate, or outdated. You are responsible for reviewing and verifying AI-generated content before relying on it.",
  },
  {
    title: "User responsibilities",
    body: "You are responsible for the accuracy of information you provide, for reviewing outputs before submission, and for decisions you make based on CLNCH's assistance. CLNCH is a tool to help you navigate opportunities — not a replacement for your judgment.",
  },
  {
    title: "Availability",
    body: "CLNCH is provided on an 'as available' basis. We do not guarantee uninterrupted access and may modify, suspend, or discontinue features at any time without notice.",
  },
  {
    title: "Disclaimers",
    body: "CLNCH is provided 'as is' without warranties of any kind. We do not warrant that CLNCH will be error-free, secure, or that any opportunity information will be accurate or complete.",
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, Coreaxis shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of CLNCH, including loss of opportunities, data, or profits.",
  },
  {
    title: "Termination",
    body: "You may stop using CLNCH at any time. We may suspend or terminate your access if you violate these Terms or we believe your use poses a risk to CLNCH or others.",
  },
  {
    title: "Changes",
    body: "We may update these Terms from time to time. We will post the updated version on this page and update the 'Last updated' date. Continued use of CLNCH after changes constitutes acceptance.",
  },
  {
    title: "Governing law",
    body: "These Terms are governed by applicable laws. Any disputes will be resolved in the appropriate courts based on the jurisdiction of Coreaxis.",
  },
  {
    title: "Contact",
    body: "If you have questions about these Terms, contact us at mensahs@coreaxishq.tech.",
  },
];

export default function Terms() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-semibold text-[#F47316] uppercase tracking-widest mb-6"
          >
            Terms of Use
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1a3a2a] mb-8"
          >
            The short version:
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-[#2d6a4f] font-bold leading-relaxed"
          >
            CLNCH helps you navigate opportunities. You remain responsible for your decisions.
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-16 bg-[#f0f5f0]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-white border border-[#d8ead2]"
              >
                <h3 className="text-base font-bold text-[#1a3a2a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5a8a6a] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full terms */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.04, ease: "easeOut" }}
              >
                <h2 className="text-lg font-bold text-[#1a3a2a] mb-3">{section.title}</h2>
                <p className="text-sm text-[#5a8a6a] leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-[#9ab0a0] mt-16 pt-8 border-t border-[#e8e4d8]">
            Last updated: September 1, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
