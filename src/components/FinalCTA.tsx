import { useState } from "react";
import { motion } from "motion/react";
import { supabase } from "@/lib/supabase";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");

    const { error: insertError } = supabase
      ? await supabase.from("waitlist").insert({ email })
      : { error: { message: "Database not configured" } } as any;

    if (insertError) {
      if (insertError.code === "23505") {
        setSubmitted(true);
        return;
      }
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-32 px-6 bg-[#faf9f5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-[0.035]">
          <defs>
            <pattern id="dots3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#2d6a4f" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots3)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Green airplane video */}
          <div className="flex justify-center mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <video
                src="/videos/green-airplane.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-32 h-auto"
              />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a3a2a] leading-tight tracking-tight mb-3">
            You found it.
          </h2>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2d6a4f] leading-tight tracking-tight mb-6">
            CLNCH it.
          </h2>

          <p className="text-base text-[#4a6a55] mb-2 max-w-md mx-auto leading-relaxed">
            The opportunity is yours to pursue.
          </p>
          <p className="text-base text-[#4a6a55] mb-10 max-w-md mx-auto leading-relaxed">
            The process is ours to make easier.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full border border-[#d8ead2] bg-white text-sm text-[#1a3a2a] placeholder:text-[#aac4b0] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#F47316] text-white font-semibold text-sm hover:bg-[#d9651a] transition-colors cursor-pointer shadow-md shadow-orange-200 whitespace-nowrap"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            <div className="mb-8 bg-[#e8f5ee] border border-[#c8ddd0] rounded-2xl px-6 py-4 inline-block">
              <p className="text-sm font-semibold text-[#2d6a4f]">You're on the waitlist!</p>
              <p className="text-xs text-[#5a8a6a]">We'll reach out when CLNCH is ready for you.</p>
            </div>
          )}
          {error && (
            <p className="text-sm text-red-600 mb-4">{error}</p>
          )}

          <p className="mt-10 text-xs text-[#9ab0a0] font-medium tracking-wide">From Found to Filed.</p>
        </motion.div>
      </div>
    </section>
  );
}
