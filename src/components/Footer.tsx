import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const groups = [
  { title: "Explore", links: [{ label: "How It Works", href: "/#how-it-works" }, { label: "About", href: "/about" }, { label: "Log", href: "/log" }] },
  { title: "Product", links: [{ label: "CLNCH Lens", href: "/#clnch-lens" }, { label: "Architecture", href: "/#architecture" }, { label: "Waitlist", href: "/#waitlist" }] },
  { title: "Connect", links: [{ label: "Email", href: "mailto:mensahs@coreaxishq.tech" }, { label: "LinkedIn", href: "#" }, { label: "X", href: "https://x.com/clnch_app" }] },
  { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
];

export default function Footer() {
  return <footer className="bg-[#121212] px-5 py-20 text-[#e7e7e7] sm:px-8 sm:py-24"><div className="mx-auto max-w-[1200px]"><div className="grid gap-12 border-b border-white/[0.08] pb-16 md:grid-cols-[0.8fr_1.2fr]"><div><div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#78bae6] via-[#7652a8] to-[#f06ba8] text-[10px] font-semibold text-black">C</div><p className="text-lg text-[#e7e7e7]">CLNCH</p></div><p className="mt-6 max-w-[260px] text-sm leading-relaxed text-[#898989]">Building the missing context layer of the web.</p><p className="mt-10 text-[10px] uppercase tracking-[0.16em] text-[#5e5e5e]">Built by Coreaxis HQ</p></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{groups.map((group) => <div key={group.title}><p className="mb-5 text-[10px] uppercase tracking-[0.16em] text-[#e7e7e7]">{group.title}</p><div className="space-y-4">{group.links.map((link) => link.href.startsWith("/") ? <Link key={link.label} to={link.href} className="block text-sm text-[#898989] transition-colors hover:text-white">{link.label}</Link> : <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-1 text-sm text-[#898989] transition-colors hover:text-white">{link.label}{link.href.startsWith("http") && <ArrowUpRight size={12} />}</a>)}</div></div>)}</div></div><div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center"><p className="text-[11px] text-[#5e5e5e]">© 2026 Coreaxis HQ</p><p className="font-editorial text-xl text-[#a0a0a0]">Information is everywhere. Context is not.</p></div></div></footer>;
}
