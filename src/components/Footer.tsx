export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-[#e8e4d8] bg-[#faf9f5] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#2d6a4f] flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <div className="leading-none">
                <p className="text-sm font-bold text-[#1a3a2a] tracking-wide">CLNCH</p>
                <p className="text-[10px] text-[#5a8a6a] font-medium">From Found to Filed.</p>
              </div>
            </div>
            <p className="text-xs text-[#7a9a85] leading-relaxed max-w-[200px]">
              An AI opportunity assistant that helps you move from discovery to completion.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4">Product</p>
            <div className="space-y-2.5">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "CLNCH Lens", href: "#clnch-lens" },
                { label: "Opportunity Watch", href: "#opportunity-watch" },
                { label: "Roadmap", href: "#vision" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4">Company</p>
            <div className="space-y-2.5">
              {["About", "Contact", "Privacy", "Terms"].map((l) => (
                <a key={l} href="#" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4">Connect</p>
            <div className="flex gap-3">
              {["LinkedIn", "X"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="h-8 px-3 rounded-full border border-[#d8ead2] bg-white flex items-center justify-center text-xs text-[#4a6a55] hover:bg-[#e8f5ee] transition-colors cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#e8e4d8] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#9ab0a0]">&copy; {year} CLNCH. All rights reserved.</p>
          <p className="text-[11px] text-[#9ab0a0]">Built by Coreaxis.</p>
        </div>
      </div>
    </footer>
  );
}
