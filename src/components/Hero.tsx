import { motion } from "motion/react";
import IPhoneMockup from "./IPhoneMockup";

const productDemoVideo = "https://www.dropbox.com/scl/fi/df5sw9ggevhhim3q77aqc/CLNCH_app_product_demo_video_202608311843.mp4?rlkey=k6s0ndrzc8mja8c8bjsg4iyc3&st=82znydpl&dl=1";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#faf9f5]">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-[0.04]">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#2d6a4f" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7a9a85] mb-5"
            >
              The AI assistant between you and the web
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-[#1a3a2a] mb-3"
            >
              Get things done
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.23, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-[#2d6a4f] mb-7"
            >
              without switching between tabs, tools, or apps.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.31, ease: "easeOut" }}
              className="text-base text-[#4a6a55] leading-relaxed max-w-md mb-3"
            >
              CLNCH sits in the middle. It understands what you're trying to do and helps you move through the web without piecing the process together yourself.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
              className="text-sm text-[#5a8a6a] leading-relaxed max-w-md mb-8"
            >
              From finding an opportunity to understanding it, preparing for it, and completing it — CLNCH stays with you through the process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.39, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F47316] text-white font-semibold text-sm hover:bg-[#d9651a] transition-colors cursor-pointer shadow-md shadow-orange-200"
              >
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#c8ddd0] text-[#2d6a4f] font-semibold text-sm hover:bg-[#e8f5ee] transition-colors cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full border border-[#2d6a4f] flex items-center justify-center">
                  <span className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-[#2d6a4f] border-b-[4px] border-b-transparent ml-0.5" />
                </span>
                See how it works
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative min-h-[620px] flex items-center justify-center lg:justify-center lg:-ml-4"
          >
            <IPhoneMockup videoSrc={productDemoVideo} size="hero" className="z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
