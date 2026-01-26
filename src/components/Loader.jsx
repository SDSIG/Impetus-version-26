import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ onComplete }) => {
  const [exit, setExit] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/background1.mp4");
  const videoRef = useRef(null);

  // 🎥 Handle responsive video switching
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleVideoChange = (e) => {
      setVideoSrc(
        e.matches
          ? "/videos/background2.mp4" // tablet & laptop
          : "/videos/background1.mp4", // mobile
      );
    };

    // Initial check
    handleVideoChange(mediaQuery);

    // Listen for screen resize
    mediaQuery.addEventListener("change", handleVideoChange);

    return () => {
      mediaQuery.removeEventListener("change", handleVideoChange);
    };
  }, []);

  // Slow down video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [videoSrc]);

  const handleDiveClick = () => {
    setExit(true);
    setTimeout(() => {
      onComplete();
      const hero = document.getElementById("hero");
      hero?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  };

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* 🎥 RESPONSIVE BACKGROUND VIDEO */}
          <video
            key={videoSrc} // forces reload when src changes
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* 🚀 CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-end w-full h-full px-4 pb-12 sm:pb-24">
            <motion.button
              onClick={handleDiveClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(0,180,255,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              exit={{
                y: -900,
                opacity: 0,
                scale: 0.7,
                transition: { duration: 0.9, ease: "easeIn" },
              }}
              className="
                relative
                px-5 py-2.5
                sm:px-8 sm:py-3.5
                md:px-12 md:py-5
                rounded-xl
                border border-sky-400/50
                bg-gradient-to-r from-sky-500/90 to-indigo-600/90
                text-white
                text-sm sm:text-lg md:text-2xl
                font-orbitron tracking-wide
                backdrop-blur-sm
                overflow-hidden
              "
            >
              <span className="absolute inset-0 bg-white/10 blur-xl" />
              <span className="relative z-10">
                Ready to dive into future tech??
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
