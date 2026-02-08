import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const handleResize = useCallback(() => {
    const isDesktop = window.innerWidth >= 768;
    const nextSrc = isDesktop
      ? "/videos/ani_horizontal.mp4"
      : "/videos/ani_vertical.mp4";
    setVideoSrc(nextSrc);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const startExperience = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    video.muted = false;
    video.playbackRate = 0.6;
    video.play();
  };

  const finishLoading = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 800);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ backgroundColor: colors.royalBlack }}
        >
          {/* 🎬 VIDEO */}
          {videoSrc && (
            <video
              ref={videoRef}
              playsInline
              onEnded={finishLoading}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {/* 🟢 ENTER EXPERIENCE (The Royal Gateway) */}
          {!hasStarted && (
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <motion.button
                onClick={startExperience}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  borderColor: colors.brightGold,
                  boxShadow: `0 0 30px ${colors.richGold}40`,
                }}
                whileTap={{ scale: 0.98 }}
                className="px-14 py-4 rounded-full border bg-black/40 text-white uppercase tracking-[0.4em] text-xs transition-all duration-500"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  borderColor: `${colors.richGold}60`,
                  color: colors.brightGold,
                }}
              >
                Initiate Experience
              </motion.button>
            </div>
          )}

          {/* ⏭️ SKIP INTRO (Subtle Utility) */}
          {hasStarted && (
            <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-12 sm:pb-20">
              <motion.button
                onClick={finishLoading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, color: colors.brightGold }}
                transition={{ delay: 1, duration: 0.8 }}
                className="px-10 py-3 rounded-full border bg-black/20 font-rajdhani tracking-[0.3em] text-[10px] uppercase transition-all"
                style={{
                  borderColor: `${colors.richGold}30`,
                  color: colors.richGold,
                }}
              >
                Skip Intro
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
