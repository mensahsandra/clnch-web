import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

const contactEmail = "mensahs@coreaxishq.tech";

const intents = [
  "I have a question",
  "Partnership",
  "Feedback",
  "Product idea",
  "Media / press",
  "Investment",
  "Something else",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setError("");

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, intent: intent || null, message });

    if (insertError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    const subject = encodeURIComponent(`[CLNCH Contact] ${intent || "General"} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nIntent: ${intent || "General"}\n\n${message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            Talk to CLNCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1a3a2a] mb-8"
          >
            Have an idea, question, or just want to tell us something?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-[#4a6a55] leading-relaxed"
          >
            We'd like to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Email */}
      <section className="px-6 py-12 bg-[#f0f5f0]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#d8ead2]"
          >
            <div className="w-12 h-12 rounded-full bg-[#2d6a4f] flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1a3a2a]">Sandra Mensah</p>
              <p className="text-xs text-[#5a8a6a] mb-1">Coreaxis</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-[#2d6a4f] font-semibold hover:text-[#1a3a2a] transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-20 bg-[#faf9f5]">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 rounded-full bg-[#e8f5ee] border border-[#c8ddd0] flex items-center justify-center mx-auto mb-8">
                <Check size={28} className="text-[#2d6a4f]" strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-extrabold text-[#1a3a2a] mb-4 tracking-tight">
                Got it.
              </h2>
              <p className="text-lg text-[#4a6a55] mb-2">Your message is with CLNCH.</p>
              <p className="text-base text-[#5a8a6a]">We'll get back to you soon.</p>
              <p className="text-xs text-[#9ab0a0] mt-10">
                We usually respond within 24–48 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-[#1a3a2a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-[#d8ead2] bg-white text-sm text-[#1a3a2a] placeholder:text-[#aac4b0] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 shadow-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a3a2a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-[#d8ead2] bg-white text-sm text-[#1a3a2a] placeholder:text-[#aac4b0] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 shadow-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a3a2a] mb-2">
                  What can we help with?
                </label>
                <div className="flex flex-wrap gap-2">
                  {intents.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setIntent(opt)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        intent === opt
                          ? "bg-[#2d6a4f] text-white border-[#2d6a4f]"
                          : "bg-white text-[#4a6a55] border-[#d8ead2] hover:border-[#2d6a4f]"
                      } border`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a3a2a] mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl border border-[#d8ead2] bg-white text-sm text-[#1a3a2a] placeholder:text-[#aac4b0] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 shadow-sm resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F47316] text-white font-semibold text-sm hover:bg-[#d9651a] transition-colors cursor-pointer shadow-md shadow-orange-200"
              >
                Send message
                <Send size={16} />
              </button>

              <p className="text-xs text-[#9ab0a0] pt-2">
                We usually respond within 24–48 hours.
              </p>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
