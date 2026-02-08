import { useState, useEffect } from "react";
import { ArrowRight, Ticket } from "lucide-react";
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

  // THEME COLORS AS CONSTANTS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
    burntGold: "#78350F",
    glass: "rgba(255, 255, 255, 0.03)",
  };

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
    }, 4000);
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
      {/* 1. BACKGROUND IMAGES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }} // Slightly lower opacity for deeper black feel
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            filter: "grayscale(60%) contrast(1.3) brightness(0.5)", // Increased grayscale for royal look
          }}
        />
      </AnimatePresence>

      {/* 2. VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(5,5,5,0.1) 0%, ${colors.royalBlack} 100%)`,
        }}
      />

      <div className="relative z-10 w-full flex justify-center px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl flex flex-col items-center"
        >
          {/* IEEE PRESENTS */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="flex items-center flex-nowrap gap-2 sm:gap-4 mb-4 w-full justify-center px-1 min-w-0">
              <div
                className="h-[1px] w-6 sm:w-12 flex-shrink-0"
                style={{
                  background: `linear-gradient(to right, transparent, ${colors.richGold})`,
                }}
              />
              <p
                className="font-orbitron font-bold tracking-[0.2em] sm:tracking-[0.5em] text-[10px] sm:text-xs uppercase whitespace-nowrap flex-shrink-0"
                style={{ color: colors.richGold }}
              >
                IEEE UVCE PRESENTS
              </p>
              <div
                className="h-[1px] w-6 sm:w-12 flex-shrink-0"
                style={{
                  background: `linear-gradient(to left, transparent, ${colors.richGold})`,
                }}
              />
            </div>

            <div className="flex items-center gap-2 text-white/40 font-rajdhani text-[10px] sm:text-xs tracking-[0.15em] uppercase text-center">
              <span>Annual National-Level Technical Student Extravaganza</span>
            </div>
          </div>

          {/* MAIN TITLE */}
          <h1
            className="font-daggersquare text-center text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-none tracking-[-0.046m] bg-clip-text text-transparent mb-6 px-2"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              backgroundImage: `linear-gradient(to bottom, #FFFDF5, ${colors.brightGold}, ${colors.richGold}, ${colors.burntGold})`,
              filter: `drop-shadow(0 0 20px rgba(212, 175, 55, 0.25))`,
            }}
          >
            IMPETUS&nbsp;26.0
          </h1>

          {/* THEME LOCKUP */}
          <div className="flex flex-col items-center mb-12 lg:mb-20">
            <h2 className="font-rajdhani text-2xl sm:text-4xl tracking-[0.3em] text-white font-light uppercase text-center">
              Future
              <span style={{ color: colors.richGold }} className="font-bold">
                Tech
              </span>
            </h2>
            <p
              className="tracking-[0.6em] text-[10px] sm:text-xs uppercase italic mt-2 text-center"
              style={{ color: `${colors.brightGold}66` }} // 40% opacity hex
            >
              Engineering Tomorrow
            </p>
          </div>

          {/* CONTENT ROW (Countdown centered) */}
          <div className="flex justify-center w-full px-4 mb-16">
            {/* CONTENT ROW (Buttons & Countdown) */}
            {/* <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 px-4 mb-16">
              <div className="flex flex-col items-center lg:items-start gap-4 order-2 lg:order-1">
                <button
                  onClick={() => navigate("/events")}
                  className="w-64 py-4 font-orbitron font-bold uppercase tracking-[0.18em] text-xs rounded-full transition-all duration-300 ease-out active:scale-95 flex items-center justify-center gap-3"
                  style={{
                    border: `1px solid ${colors.richGold}`,
                    color: colors.richGold,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.richGold;
                    e.currentTarget.style.color = colors.royalBlack;
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(212, 175, 55, 0.35)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.richGold;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Explore Events
                  <ArrowRight size={16} />
                </button>

                <button
                  className="w-64 py-4 font-orbitron font-bold uppercase tracking-[0.18em] text-xs rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
                  style={{
                    border: `1px solid ${colors.richGold}4D`, // 30% opacity
                    color: colors.richGold,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors.richGold;
                    e.currentTarget.style.backgroundColor = `${colors.richGold}1A`; // 10% opacity
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = `${colors.richGold}4D`;
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Ticket size={16} />
                  All-In-One Pass
                </button>
              </div>
            </div> */}

            {/* COUNTDOWN TIMER */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3 sm:gap-6">
                {[
                  { label: "DAYS", val: timeLeft.days },
                  { label: "HRS", val: timeLeft.hours },
                  { label: "MIN", val: timeLeft.minutes },
                  { label: "SEC", val: timeLeft.seconds },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-16 h-20 sm:w-20 sm:h-24 rounded-lg flex items-center justify-center shadow-2xl backdrop-blur-md"
                      style={{
                        backgroundColor: `${colors.royalBlack}E6`, // 90% opacity
                        borderTop: `2px solid ${colors.richGold}80`, // 50% opacity
                      }}
                    >
                      <span className="text-3xl sm:text-4xl font-oxanium font-black text-white">
                        {String(item.val).padStart(2, "0")}
                      </span>
                    </div>
                    <span
                      className="mt-3 text-[9px] tracking-[0.3em] font-orbitron font-bold uppercase"
                      style={{ color: colors.richGold }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-[15px] sm:text-sm tracking-[0.2em] uppercase text-center"
                style={{
                  color: `${colors.richGold}99`,
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                Registrations open soon…
              </p>
            </div>
          </div>

          {/* LOGO AT THE BOTTOM */}
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
                className="w-24 sm:w-28 md:w-32 opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  filter: `drop-shadow(0 0 15px rgba(212, 175, 55, 0.3))`,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
