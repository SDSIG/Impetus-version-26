// import { useState } from "react";
import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";
// import { Filter, X, Zap } from "lucide-react";
// import eventsData from "../data/events.json";
// import { EventCard } from "../components/EventCard";

// const categories = [
//   { id: "flagship", label: "Flagship Events" },
//   { id: "general", label: "General Events" },
//   { id: "gaming", label: "Gaming Events" },
// ];

export const TempEvents = () => {
  // const [activeTab, setActiveTab] = useState("flagship");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  // const dataMap = {
  //   flagship: eventsData.flagshipEvents || [],
  //   general: eventsData.generalEvents || [],
  //   gaming: eventsData.gamingEvents || [],
  // };
  // const categoryEvents = dataMap[activeTab] || [];
  // const handleTabChange = (id) => {
  //   setActiveTab(id);
  //   setIsMenuOpen(false);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <section
      className="relative py-10 min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
      {/* STAR BACKGROUND */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20px 30px, ${colors.brightGold}, transparent),
            radial-gradient(1px 1px at 80px 120px, #fff, transparent),
            radial-gradient(2px 2px at 150px 60px, ${colors.richGold}, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.8,
        }}
      />

      {/* TEMPORARY "COMING SOON" DISPLAY */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex justify-center"
        >
          <div
            className="p-4 rounded-full border border-dashed"
            style={{
              borderColor: colors.richGold,
              backgroundColor: `${colors.richGold}10`,
            }}
          >
            <Timer
              size={40}
              className="animate-pulse"
              color={colors.brightGold}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl  uppercase tracking-wide  "
          style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
        >
          Events <span style={{ color: colors.brightGold }}>Coming Soon</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[0.5em] mt-6 text-sm md:text-lg font-bold"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            color: colors.richGold,
          }}
        >
          Registrations will open shortly • Stay Tuned
        </motion.p>

        <div className="mt-12 h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      </div>

      {/* HEADING SECTION - commented out
      <div className="relative z-10 text-center mb-16 pt-10 px-4">
        <motion.h2 ...>Explore <span>Events</span></motion.h2>
        <p>Select a sector to view challenges</p>
      </div>
      */}

      {/* GRID SECTION - commented out
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} className="grid ...">
            {categoryEvents.map(...) / empty state}
          </motion.div>
        </AnimatePresence>
      </div>
      */}

      {/* FLOATING ACTION BUTTON - commented out
      <div className="fixed bottom-6 right-6 ..."><motion.button>Filters</motion.button></div>
      */}

      {/* NAVIGATION DRAWER - commented out
      <AnimatePresence>{isMenuOpen && ( drawer UI )}</AnimatePresence>
      */}
    </section>
  );
};
