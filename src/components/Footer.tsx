import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8e4d8] bg-[#faf9f5] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/images/ChatGPT_Image_Aug_26,_2026,_06_51_45_AM.png"
                alt="CLNCH logo"
                className="h-10 w-10 object-contain"
              />
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
                { label: "How it works", href: "/#how-it-works" },
                { label: "CLNCH Lens", href: "/#clnch-lens" },
                { label: "Opportunity Watch", href: "/#opportunity-watch" },
                { label: "Roadmap", href: "/#vision" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4">Explore</p>
            <div className="space-y-2.5">
              <Link to="/log" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                The CLNCH Log
              </Link>
              <Link to="/about" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                About
              </Link>
              <Link to="/contact" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4 mt-8">Trust</p>
            <div className="space-y-2.5">
              <Link to="/privacy" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                Privacy
              </Link>
              <Link to="/terms" className="block text-xs text-[#5a8a6a] hover:text-[#1a3a2a] transition-colors cursor-pointer">
                Terms
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a2a] mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-8 px-3 rounded-full border border-[#d8ead2] bg-white flex items-center justify-center text-xs text-[#4a6a55] hover:bg-[#e8f5ee] transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/clnch_app"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3 rounded-full border border-[#d8ead2] bg-white flex items-center justify-center text-xs text-[#4a6a55] hover:bg-[#e8f5ee] transition-colors cursor-pointer"
              >
                X
              </a>
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
