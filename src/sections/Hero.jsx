import { useState, useEffect } from "react";
import { ArrowRight, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const desktopBgImages = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
];

const mobileBgImages = [
  "/images/bg2.jpg",
  "/images/bg4.jpg",
  "/images/bg5.jpg",
];

export const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [bgImages, setBgImages] = useState(desktopBgImages);

  useEffect(() => {
    const updateBgImages = () => {
      if (window.innerWidth < 640) {
        setBgImages(mobileBgImages);
      } else {
        setBgImages(desktopBgImages);
      }
      setCurrentBg(0);
    };

    updateBgImages();
    window.addEventListener("resize", updateBgImages);
    return () => window.removeEventListener("resize", updateBgImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            filter: "grayscale(100%) brightness(0.85)",
          }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div className="relative z-10 w-full flex justify-center px-4 pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl"
        >
          <div className="text-center mb-10 px-2">
            <p
              className="font-rajdhani text-xs sm:text-base md:text-lg lg:text-xl mb-3 text-white"
              style={{
                textShadow: "0 3px 12px rgba(0,0,0,0.9)",
              }}
            >
              IEEE UVCE presents annual national-level <br />
              Technical Student Extravaganza
            </p>

            {/* 🔥 CYBER / SECURITY STYLE TITLE */}
            <h1
              className="
                font-extrabold
                whitespace-nowrap
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-[9rem]
                text-white
              "
              style={{
                fontFamily: "'Orbitron', 'Oxanium', sans-serif",
                letterSpacing: "0.04em",
                textShadow:
                  "0 2px 0 rgba(255,255,255,0.05), 0 10px 35px rgba(0,0,0,0.9)",
              }}
            >
              IMPETUS 26.0
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <div className="flex flex-col gap-5 items-center md:items-start">
              <button
  className="px-8 py-3 text-sm sm:text-base font-semibold tracking-wider bg-white text-black rounded-full hover:bg-neutral-200 transition-all flex items-center shadow-xl"
  style={{
    fontFamily: "'Rajdhani', sans-serif",
    boxShadow:
      "0 0 14px rgba(253,224,71,0.35), 0 6px 14px rgba(0,0,0,0.25)",
  }}
>
  REGISTER NOW
  <ArrowRight className="ml-3" />
</button>

<button
  className="px-8 py-3 text-sm sm:text-base font-semibold tracking-wider bg-white text-black rounded-full hover:bg-neutral-200 transition-all flex items-center shadow-xl"
  style={{
    fontFamily: "'Rajdhani', sans-serif",
    boxShadow:
      "0 0 14px rgba(253,224,71,0.35), 0 6px 14px rgba(0,0,0,0.25)",
  }}
>
  <Ticket className="mr-3" />
  ALL-IN-ONE PASS
</button>
            </div>

            <div className="flex justify-center mt-6 md:mt-0">
              <img
                src="/images/logo.png"
                alt="Impetus Logo"
                className="w-40 sm:w-48 md:w-56 lg:w-72 drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
