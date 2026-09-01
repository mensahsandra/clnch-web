import { useRef, useEffect } from "react";
import { motion } from "motion/react";

export type KlyState = "happy" | "thinking" | "excited" | "focused" | "proud";

interface KlyMascotProps {
  state?: KlyState;
  className?: string;
  style?: React.CSSProperties;
}

export default function KlyMascot({ state = "happy", className, style }: KlyMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<SVGGElement>(null);
  const rightPupilRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId: number;
    const MAX_X = 12, MAX_Y = 10;

    function loop() {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      const t = `translate(${currentX.toFixed(2)} ${currentY.toFixed(2)})`;
      leftPupilRef.current?.setAttribute("transform", t);
      rightPupilRef.current?.setAttribute("transform", t);
      rafId = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.47;
      targetX = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width * 0.65))) * MAX_X;
      targetY = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height * 0.60))) * MAX_Y;
    }

    function onLeave() { targetX = 0; targetY = 0; }

    const container = containerRef.current;
    window.addEventListener("pointermove", onMove, { passive: true });
    container?.addEventListener("pointerleave", onLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      container?.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const floatAnimate: Record<string, number | number[]> =
    state === "excited"
      ? { y: [0, -8, 0], rotate: [-1, 1, -1], scale: [1.01, 1.035, 1.01] }
      : state === "focused"
      ? { y: -2, scale: 1.01, rotate: 0 }
      : state === "proud"
      ? { y: -3, scale: 1.015, rotate: 0 }
      : state === "thinking"
      ? { y: 0, scale: 0.99, rotate: -1 }
      : { y: [0, -7, 0], rotate: 0, scale: 1 };

  const floatTransition =
    state === "excited"
      ? { duration: 0.65, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }
      : state === "happy"
      ? { duration: 5, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }
      : { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] as const };

  const mouthHappyOpacity = state === "thinking" ? 0 : 1;
  const mouthThinkingOpacity = state === "thinking" ? 1 : 0;
  const sparkleOpacity = state === "excited" || state === "proud" ? 1 : 0;

  return (
    <div ref={containerRef} className={className} style={style}>
      <motion.svg
        viewBox="0 0 126 150"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        animate={floatAnimate}
        transition={floatTransition}
        style={{ overflow: "visible", transformOrigin: "50% 70%" }}
        aria-label="Kly, the CLNCH mascot"
      >
        <defs>
          <radialGradient id="klyBodyGrad" cx="40%" cy="32%" r="68%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#b4e8b4" />
            <stop offset="55%" stopColor="#7BC67B" />
            <stop offset="100%" stopColor="#52a858" />
          </radialGradient>
          <radialGradient id="klyEyeGrad" cx="35%" cy="30%" r="65%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#edf8ed" />
          </radialGradient>
          <radialGradient id="klyBodySheen" cx="50%" cy="20%" r="55%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <path
          d="M63 22 C94 22 115 45 115 76 C115 110 99 136 80 142 C72 145 54 145 46 142 C27 136 11 110 11 76 C11 45 32 22 63 22 Z"
          fill="url(#klyBodyGrad)"
        />
        <path
          d="M63 22 C94 22 115 45 115 76 C115 110 99 136 80 142 C72 145 54 145 46 142 C27 136 11 110 11 76 C11 45 32 22 63 22 Z"
          fill="url(#klyBodySheen)"
        />

        <line x1="63" y1="22" x2="63" y2="11" stroke="#1E4D2B" strokeWidth="2.2" strokeLinecap="round" />
        <path
          d="M63 4 C57 1 48 6 52 14 C55 19 60 16 63 13 C66 16 71 19 74 14 C78 6 69 1 63 4 Z"
          fill="#2F7A3E"
        />
        <line x1="63" y1="13" x2="63" y2="6" stroke="#1E4D2B" strokeWidth="1" strokeLinecap="round" opacity={0.5} />

        <ellipse cx="44" cy="71" rx="15.5" ry="17" fill="url(#klyEyeGrad)" />
        <ellipse cx="82" cy="71" rx="15.5" ry="17" fill="url(#klyEyeGrad)" />

        <g ref={leftPupilRef}>
          <circle cx="44" cy="71" r="8.5" fill="#1E4D2B" />
          <circle cx="41" cy="68" r="3.2" fill="white" opacity={0.9} />
          <circle cx="47.5" cy="74.5" r="1.4" fill="white" opacity={0.35} />
        </g>

        <g ref={rightPupilRef}>
          <circle cx="82" cy="71" r="8.5" fill="#1E4D2B" />
          <circle cx="79" cy="68" r="3.2" fill="white" opacity={0.9} />
          <circle cx="85.5" cy="74.5" r="1.4" fill="white" opacity={0.35} />
        </g>

        <g style={{ opacity: mouthHappyOpacity, transition: "opacity 0.2s ease" }}>
          <path d="M50 94 Q63 108 76 94" stroke="#1E4D2B" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        </g>

        <g style={{ opacity: mouthThinkingOpacity, transition: "opacity 0.2s ease" }}>
          <circle cx="50" cy="98" r="2.6" fill="#1E4D2B" />
          <circle cx="63" cy="98" r="2.6" fill="#1E4D2B" />
          <circle cx="76" cy="98" r="2.6" fill="#1E4D2B" />
        </g>

        <g style={{ opacity: sparkleOpacity, transition: "opacity 0.2s ease" }}>
          <path d="M106 26 L108 20 L110 26 L116 28 L110 30 L108 36 L106 30 L100 28 Z" fill="#F47316" />
          <path d="M16 36 L17.5 31 L19 36 L24 37.5 L19 39 L17.5 44 L16 39 L11 37.5 Z" fill="#7BC67B" />
          <circle cx="113" cy="52" r="2.5" fill="#F47316" opacity={0.55} />
          <circle cx="13" cy="52" r="2" fill="#7BC67B" opacity={0.55} />
          <circle cx="108" cy="14" r="1.5" fill="#F47316" opacity={0.4} />
        </g>
      </motion.svg>
    </div>
  );
}
