import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  // 🎯 Responsive video selection
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

  // ▶️ Start video WITH sound (user interaction)
  const startExperience = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasStarted(true);
    video.muted = false;
    video.playbackRate = 0.6;
    video.play();
  };

  // 🚀 Exit loader
  const finishLoading = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-black overflow-hidden"
        >
          {/* 🎬 VIDEO */}
          {videoSrc && (
            <video
              ref={videoRef}
              playsInline
              onEnded={finishLoading}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {/* 🟢 ENTER EXPERIENCE (before start) */}
          {!hasStarted && (
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <motion.button
                onClick={startExperience}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-14 py-4
                  rounded-full
                  border border-white/30
                  bg-black/40
                  text-white
                  font-orbitron
                  tracking-[0.35em]
                  text-xs
                  uppercase
                  hover:border-white
                  transition-all
                  duration-500
                "
              >
                Enter Experience
              </motion.button>
            </div>
          )}

          {/* ⏭️ SKIP INTRO (after start) */}
          {hasStarted && (
            <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-12 sm:pb-20">
              <motion.button
                onClick={finishLoading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="
                  px-10 py-3
                  rounded-full
                  border border-white/20
                  bg-black/20
                  text-white/70
                  hover:text-white
                  font-orbitron
                  tracking-[0.3em]
                  text-[10px]
                  uppercase
                  transition-all
                "
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
