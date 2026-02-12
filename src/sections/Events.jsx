import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Zap } from "lucide-react";
import eventsData from "../data/events.json";
import { EventCard } from "../components/EventCard";

const categories = [
  { id: "flagship", label: "Flagship Events" },
  { id: "general", label: "General Events" },
  { id: "gaming", label: "Gaming Events" },
];

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const dataMap = {
    flagship: eventsData.flagshipEvents || [],
    general: eventsData.generalEvents || [],
    gaming: eventsData.gamingEvents || [],
  };

  const categoryEvents = dataMap[activeTab] || [];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {/* HEADING SECTION */}
      <div className="relative z-10 text-center mb-16 pt-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mt-12 tracking-tighter"
          style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
        >
          Explore <span style={{ color: colors.brightGold }}>Events</span>
        </motion.h2>
        <p
          className="uppercase tracking-[0.4em] mt-4 text-xs md:text-sm font-bold"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            color: colors.richGold,
          }}
        >
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
              <div
                className="col-span-full text-center py-40 border border-dashed rounded-3xl"
                style={{ borderColor: `${colors.richGold}20` }}
              >
                <p
                  className="uppercase tracking-widest text-lg"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "#4B5563",
                  }}
                >
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
          className="pointer-events-auto px-5 py-4 rounded-full flex items-center gap-2 font-bold uppercase tracking-widest text-xs shadow-2xl transition-all"
          style={{
            backgroundColor: colors.royalBlack,
            color: colors.brightGold,
            border: `1px solid ${colors.richGold}60`,
            fontFamily: "'Rajdhani', sans-serif",
            boxShadow: `0 0 20px ${colors.richGold}40`,
          }}
        >
          <Filter size={18} />
          <span>Filters</span>
          <span
            className="ml-2 px-2 py-1 text-[10px] rounded font-black"
            style={{
              backgroundColor: colors.richGold,
              color: colors.royalBlack,
            }}
          >
            {activeTab}
          </span>
        </motion.button>
      </div>

      {/* NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed bottom-0 left-0 right-0 md:left-auto md:right-10 md:bottom-24 md:w-[360px] backdrop-blur-2xl z-[110] p-6 shadow-2xl"
              style={{
                backgroundColor: `${colors.royalBlack}F2`,
                border: `1px solid ${colors.richGold}40`,
                borderRadius:
                  window.innerWidth > 768 ? "24px" : "24px 24px 0 0",
              }}
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3
                    className="font-bold uppercase tracking-widest text-xl"
                    style={{
                      fontFamily: "'DaggerSquare', sans-serif",
                      color: "white",
                    }}
                  >
                    Filters
                  </h3>
                  <div
                    className="h-[2px] w-12 mt-1"
                    style={{ backgroundColor: colors.richGold }}
                  />
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: colors.richGold,
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className="w-full px-5 py-5 rounded-2xl flex justify-between items-center font-bold uppercase tracking-widest text-sm transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      backgroundColor:
                        activeTab === cat.id
                          ? colors.richGold
                          : "rgba(255,255,255,0.03)",
                      color: activeTab === cat.id ? colors.royalBlack : "white",
                      border: `1px solid ${activeTab === cat.id ? "transparent" : `${colors.richGold}20`}`,
                    }}
                  >
                    {cat.label}
                    {activeTab === cat.id && <Zap size={16} />}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: `${colors.richGold}40` }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
