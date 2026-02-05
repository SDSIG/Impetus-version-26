import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Scale, X, Zap } from "lucide-react";
import eventsData from "../data/events.json";
import { EventCard } from "../components/EventCard";

// 1. Define Categories to match your JSON keys
const categories = [
  { id: "flagship", label: "Flagship Events" },
  { id: "general", label: "General Events" },
  { id: "gaming", label: "Gaming Events" },
];

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Logic to handle your specific JSON structure safely
  const dataMap = {
    flagship: eventsData.flagshipEvents || [],
    general: eventsData.generalEvents || [],
    gaming: eventsData.gamingEvents || [],
  };

  const categoryEvents = dataMap[activeTab] || [];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    // Smooth scroll to top when changing categories
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-10 bg-[#020202] min-h-screen overflow-hidden">
      {/* STAR BACKGROUND — same as About */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.9,
        }}
      />

      {/* HEADING SECTION */}
      <div className="relative z-10 text-center mb-16 pt-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase mt-12 tracking-tighter"
        >
          Explore <span className="text-yellow-500 text-glow">Events</span>
        </motion.h2>
        <p className="font-rajdhani text-gray-500 uppercase tracking-[0.5em] mt-2 text-xs md:text-sm">
          Select a sector to view challenges
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {categoryEvents.length > 0 ? (
              categoryEvents.map((event, index) => (
                <EventCard
                  key={`${activeTab}-${index}`}
                  event={event}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-40 border border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-600 font-rajdhani uppercase tracking-widest">
                  System Error: No {activeTab} data retrieved.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-6 right-6 md:right-10 z-[60] pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto bg-[#0b0b0b] text-yellow-400 px-4 py-3 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] flex items-center gap-1 font-orbitron font-bold uppercase tracking-widest text-xs "
        >
          <Filter
            size={18}
            className="group-hover:rotate-180 transition-transform duration-500"
          />
          <span>Filters</span>
          <span className="ml-2 px-2 py-1 bg-yellow-400 text-black text-[10px] rounded ">
            {activeTab}
          </span>
        </motion.button>
      </div>

      {/* NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="
          fixed bottom-0 left-0 right-0 
          md:left-auto md:right-10 md:bottom-24 md:w-[360px]
          bg-[#0b0b0b]/95 backdrop-blur-xl
          border border-yellow-500/30
          rounded-t-3xl md:rounded-3xl
          z-[110] p-6 shadow-[0_-20px_40px_rgba(0,0,0,0.6)]
        "
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-white font-orbitron font-bold uppercase tracking-widest text-lg">
                    Filters
                  </h3>
                  <div className="h-[2px] w-10 bg-yellow-500 mt-1" />
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="
              p-2 rounded-full
              bg-white/5 hover:bg-yellow-500
              text-yellow-500 hover:text-black
              transition
            "
                >
                  <X size={18} />
                </button>
              </div>

              {/* CATEGORY LIST */}
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`
                w-full px-5 py-4 rounded-2xl
                flex justify-between items-center
                font-rajdhani font-bold uppercase tracking-widest text-sm
                transition-all
                ${
                  activeTab === cat.id
                    ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)] scale-[1.02]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
                  >
                    {cat.label}
                    {activeTab === cat.id && (
                      <Zap size={16} className="text-black" />
                    )}
                  </button>
                ))}
              </div>

              {/* FOOTER DECOR */}
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-yellow-500/30 rounded-full" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
