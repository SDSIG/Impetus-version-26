import { useState, useEffect } from "react";
import { ArrowRight, Zap, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const desktopBgImages = [
  "/images/bg3.jpg",
  "/images/bg4.jpg",
  "/images/bg1.jpg",
  "/images/bg2.jpg",
];

const mobileBgImages = [
  "/images/bg5.jpg",
  "/images/bg4.jpg",
  "/images/bg2.jpg",
];

export const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [bgImages, setBgImages] = useState(desktopBgImages);
  const navigate = useNavigate();

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

  const EVENT_DATE = new Date("2026-03-13T09:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = EVENT_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020202]">
      {/* 1. BACKGROUND IMAGES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            filter: "grayscale(30%) contrast(1.2) brightness(0.6)",
          }}
        />
      </AnimatePresence>

      {/* 2. VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 w-full flex justify-center px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl flex flex-col items-center"
        >
          {/* IEEE HEADER */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <p className="font-rajdhani font-bold tracking-[0.5em] text-amber-500 text-[10px] sm:text-xs uppercase">
              IEEE UVCE PRESENTS
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          {/* MAIN TITLE */}
          <h1
            className="font-daggersquare tracking-tighter leading-none text-center text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] bg-gradient-to-b from-[#FFFDF5] via-[#FACC15] to-[#78350f] bg-clip-text text-transparent mb-2"
            style={{
              fontFamily: "'Daggersquare', sans-serif",
              filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.2))",
            }}
          >
            IMPETUS 26.0
          </h1>

          {/* THEME TAGLINE */}
          <div className="flex flex-col items-center mb-12 lg:mb-20">
            <h2 className="font-rajdhani text-2xl sm:text-4xl tracking-[0.3em] text-white font-light uppercase text-center">
              Future<span className="text-amber-500 font-bold">Tech</span>
            </h2>
            <p className="text-amber-200/40 tracking-[0.6em] text-[10px] sm:text-xs uppercase italic mt-2 text-center">
              Engineering Tomorrow
            </p>
          </div>

          {/* CONTENT ROW (Buttons & Countdown) */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 px-4 mb-16">
            {/* ACTION BUTTONS */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-2 lg:order-1">
              <button
                onClick={() => navigate("/events")}
                className="
    group relative w-64 py-4 
    bg-transparent border border-amber-500
    text-amber-500 font-bold tracking-[0.2em] uppercase text-xs rounded-full 
    transition-all duration-500 ease-out
    hover:text-black hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]
    overflow-hidden
  "
              >
                {/* The filling background effect */}
                <span className="absolute inset-0 w-0 bg-amber-500 transition-all duration-500 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Events{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <button className="group relative w-64 py-4 border border-amber-500/30 text-amber-500 font-bold tracking-[0.2em] uppercase text-xs rounded-full transition-all hover:bg-amber-500/10 hover:border-amber-500">
                <span className="flex items-center justify-center gap-3">
                  <Ticket size={16} /> All-In-One Pass
                </span>
              </button>

              <div className="flex items-center gap-2 mt-2 text-white/30 font-rajdhani text-[10px] tracking-[0.2em]">
                <Zap size={10} className="text-amber-500 animate-pulse" />
                <span>
                  ANNUAL NATIONAL-LEVEL TECHNICAL STUDENT EXTRAVAGANZA
                </span>
              </div>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className="flex gap-3 sm:gap-6 order-1 lg:order-2">
              {[
                { label: "DAYS", val: timeLeft.days },
                { label: "HRS", val: timeLeft.hours },
                { label: "MIN", val: timeLeft.minutes },
                { label: "SEC", val: timeLeft.seconds },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 bg-[#0a0a0a]/90 border-t-2 border-amber-500/50 rounded-lg flex items-center justify-center shadow-2xl backdrop-blur-md">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {String(item.val).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="mt-3 text-[9px] tracking-[0.3em] text-amber-500 font-bold uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🔥 LOGO AT THE BOTTOM - Smaller and subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/logo_impetus.png"
                alt="Impetus Logo"
                className="w-24 sm:w-28 md:w-32 opacity-80 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
