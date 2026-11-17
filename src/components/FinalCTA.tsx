import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setError("");
    const { error: insertError } = supabase ? await supabase.from("waitlist").insert({ email }) : { error: { message: "Database not configured" } } as any;
    if (insertError && insertError.code !== "23505") {
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return <section id="waitlist" className="bg-[#1a1a1a] px-5 py-32 text-[#e7e7e7] sm:px-8 sm:py-48"><div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_0.7fr] lg:items-center"><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-[#898989]">A new way through</p><h2 className="font-editorial text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[1] tracking-[-0.025em]">Ready to move through the web differently?</h2><p className="mt-8 max-w-[470px] text-lg leading-relaxed text-[#898989]">Join the waitlist for the personal context layer of the web.</p>{!submitted ? <form onSubmit={handleSubmit} className="mt-10 flex max-w-[510px] flex-col gap-3 sm:flex-row"><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="your@email.com" required className="h-11 flex-1 rounded-full border border-white/[0.14] bg-[#121212] px-5 text-sm text-white placeholder:text-[#5e5e5e] focus:outline-none focus:ring-2 focus:ring-[#78bae6]/40" /><button type="submit" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm text-black transition-opacity hover:opacity-90">Join the waitlist <ArrowRight size={14} /></button></form> : <div className="mt-10 rounded-2xl border border-[#78bae6]/30 bg-[#78bae6]/10 px-6 py-4"><p className="text-sm text-[#e7e7e7]">You’re on the waitlist.</p><p className="mt-1 text-xs text-[#898989]">We’ll reach out when CLNCH is ready for you.</p></div>}{error && <p className="mt-4 text-sm text-[#f06ba8]">{error}</p>}</motion.div><motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12 }} className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#121212]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(120,186,230,0.28),transparent_20%),radial-gradient(circle_at_30%_70%,rgba(240,107,168,0.24),transparent_22%),radial-gradient(circle_at_75%_72%,rgba(250,203,14,0.16),transparent_20%)]" /><svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 420" fill="none" aria-hidden><path d="M130 340V108h210v232M130 108l105-57 105 57M235 51v289M170 340h130" stroke="#e7e7e7" strokeOpacity=".7" /><path d="M235 155l72-38v170l-72 53z" fill="url(#doorGlow)" fillOpacity=".7" stroke="#e7e7e7" strokeOpacity=".7" /><circle cx="284" cy="204" r="4" fill="#fff" /><path d="M70 340h360" stroke="#e7e7e7" strokeOpacity=".45" /><path d="M395 65l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#fff" fillOpacity=".75" /><defs><linearGradient id="doorGlow" x1="235" y1="120" x2="315" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#f06ba8" /><stop offset=".5" stopColor="#7652a8" /><stop offset="1" stopColor="#78bae6" /></linearGradient></defs></svg><p className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.16em] text-[#898989]">Open a new way through</p></motion.div></div></section>;
}
