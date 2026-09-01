import { motion } from "motion/react";

const summary = [
  {
    title: "What we collect",
    text: "Information you give us, such as your name, email, profile information and information you choose to provide while using CLNCH.",
  },
  {
    title: "Why we collect it",
    text: "To provide CLNCH, personalize opportunities, improve the product, communicate with you and maintain security.",
  },
  {
    title: "What we don't do",
    text: "We don't sell your personal information.",
  },
  {
    title: "Your control",
    text: "You can request access, correction or deletion of your information, subject to applicable law.",
  },
];

const sections = [
  {
    title: "Information we collect",
    body: [
      "We collect information you provide directly to us, such as when you create an account, fill out a profile, use CLNCH to investigate or prepare an opportunity, or communicate with us. This may include your name, email address, educational history, employment history, and information you enter into application forms or documents you ask CLNCH to process.",
      "We also collect information automatically, such as your device type, browser type, IP address, usage data, and pages you interact with while using CLNCH.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use your information to provide and improve CLNCH, personalize opportunity recommendations, help you prepare and track applications, communicate with you about your account or relevant opportunities, maintain security, and comply with legal obligations.",
    ],
  },
  {
    title: "AI processing",
    body: [
      "When you ask CLNCH to read a page, analyze an opportunity, or help prepare an application, your input is processed by AI systems. This processing is used to generate summaries, extract requirements, identify deadlines, suggest preparations, and assist with application content.",
      "You should not enter information you are not authorized to share, and you should review AI-generated content before submitting it as part of any application.",
    ],
  },
  {
    title: "Information from connected services",
    body: [
      "If you connect CLNCH to other services (such as a browser extension or third-party tools), CLNCH may access information from those services based on your authorization. You can revoke access at any time through the connected service's settings.",
    ],
  },
  {
    title: "Sharing and service providers",
    body: [
      "We do not sell your personal information. We may share information with service providers who help us operate CLNCH (such as hosting, analytics, or AI processing), under agreements that require them to protect your information and use it only for the purposes we specify.",
      "We may also disclose information when required by law, to protect our rights, or in connection with a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We retain your information for as long as your account is active, and afterward for as long as needed to provide the service, comply with legal obligations, resolve disputes, and enforce agreements. You can request deletion of your information at any time, subject to applicable law.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organizational measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. No system is perfectly secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "We use cookies and similar technologies to operate CLNCH, remember your preferences, and understand how the product is used. You can control cookies through your browser settings, though disabling them may affect functionality.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on your location, you may have the right to access, correct, delete, or export your personal information, object to certain processing, or withdraw consent. To exercise these rights, contact us at mensahs@coreaxishq.tech.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "CLNCH is not directed at children under 16, and we do not knowingly collect information from them. If you believe a child has provided us with information, contact us and we will take steps to delete it.",
    ],
  },
  {
    title: "International data transfers",
    body: [
      "Your information may be processed in countries other than your own, where data protection laws may differ. We take measures to ensure appropriate protection is in place for such transfers.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy as CLNCH evolves. We will notify you of material changes by posting the updated policy on this page and updating the 'Last updated' date. We encourage you to review it periodically.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this privacy policy or how we handle your information, contact us at mensahs@coreaxishq.tech.",
    ],
  },
];

export default function Privacy() {
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
            Privacy at CLNCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1a3a2a] mb-4"
          >
            Your opportunities are personal.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#2d6a4f] mb-8"
          >
            Your information should be too.
          </motion.h1>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 py-16 bg-[#f0f5f0]">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {summary.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-white border border-[#d8ead2]"
              >
                <h3 className="text-sm font-bold text-[#1a3a2a] mb-3">{item.title}</h3>
                <p className="text-sm text-[#5a8a6a] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full policy */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              >
                <h2 className="text-lg font-bold text-[#1a3a2a] mb-3">{section.title}</h2>
                {section.body.map((para, j) => (
                  <p key={j} className="text-sm text-[#5a8a6a] leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
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
