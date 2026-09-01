import { motion } from "motion/react";

interface IPhoneMockupProps {
  videoSrc: string;
  className?: string;
  size?: "default" | "hero";
}

export default function IPhoneMockup({ videoSrc, className = "", size = "default" }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateZ: 0 }}
      animate={{ opacity: 1, y: 0, rotateZ: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className={`relative ${className}`}
      style={{ perspective: "1200px" }}
    >
      <div
        style={{
          transform: "rotateY(0deg) rotateX(0deg) rotateZ(0deg)",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Phone frame */}
        <div
          className="relative mx-auto"
          style={{
            width: size === "hero" ? "320px" : "300px",
            height: size === "hero" ? "660px" : "620px",
            background: "linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 40%, #0d0d0f 100%)",
            borderRadius: size === "hero" ? "50px" : "48px",
            padding: size === "hero" ? "11px" : "10px",
            boxShadow:
              "0 0 0 1.5px #3a3a3e, 0 30px 60px -15px rgba(0,0,0,0.5), 0 50px 80px -20px rgba(0,0,0,0.3), inset 0 0 2px rgba(255,255,255,0.06)",
          }}
        >
          {/* Side buttons */}
          <div
            style={{
              position: "absolute",
              left: "-2px",
              top: "130px",
              width: "3px",
              height: "32px",
              background: "linear-gradient(90deg, #1a1a1e, #3a3a3e)",
              borderRadius: "2px 0 0 2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-2px",
              top: "175px",
              width: "3px",
              height: "50px",
              background: "linear-gradient(90deg, #1a1a1e, #3a3a3e)",
              borderRadius: "2px 0 0 2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-2px",
              top: "240px",
              width: "3px",
              height: "50px",
              background: "linear-gradient(90deg, #1a1a1e, #3a3a3e)",
              borderRadius: "2px 0 0 2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-2px",
              top: "180px",
              width: "3px",
              height: "80px",
              background: "linear-gradient(270deg, #1a1a1e, #3a3a3e)",
              borderRadius: "0 2px 2px 0",
            }}
          />

          {/* Screen */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: size === "hero" ? "41px" : "40px",
              background: "#000",
              overflow: "hidden",
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: size === "hero" ? "118px" : "100px",
                height: size === "hero" ? "31px" : "28px",
                background: "#000",
                borderRadius: "20px",
                zIndex: 20,
              }}
            />

            {/* Video */}
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />

            {/* Screen reflection overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.03) 100%)",
                pointerEvents: "none",
                zIndex: 10,
                borderRadius: size === "hero" ? "41px" : "40px",
              }}
            />
          </div>
        </div>

        {/* Diffused shadow beneath */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: size === "hero" ? "290px" : "240px",
            height: size === "hero" ? "48px" : "40px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)",
            filter: "blur(15px)",
            zIndex: -1,
          }}
        />
      </div>
    </motion.div>
  );
}
