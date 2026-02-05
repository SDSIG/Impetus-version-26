import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Filter, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "../data/events";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Unified state for all screens
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { id: "flagship", label: "Flagship" },
    { id: "general", label: "General" },
    { id: "gaming", label: "Gaming" },
  ];

  const categoryEvents = events.filter((event) => event.category === activeTab);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    // Scroll to top of grid for better UX
    const el = document.getElementById("events");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="events"
      className="relative py-10 bg-[#020202] min-h-screen overflow-x-hidden"
    >
      {/* 1. SECTION HEADING */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-rajdhani font-bold tracking-[0.4em] text-xs uppercase">
              The Arena
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter mb-4">
            Explore{" "}
            <span className="bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>
      </div>

      <div id="event-grid-anchor" className="scroll-mt-28" />

      {/* 2. EVENT GRID CONTENT */}
      <div className="max-w-7xl mx-auto px-4 min-h-[500px] pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {categoryEvents.map((event, index) => (
              <div key={event.id} className="relative group">
                <div className="absolute -inset-1 bg-amber-500/0 group-hover:bg-amber-500/5 blur-2xl transition-all duration-500" />
                <EventCard event={event} index={index} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. UNIFIED FLOATING ACTION BUTTON (Desktop & Mobile) */}
      <div className="fixed bottom-10 right-10 z-[60] pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto bg-amber-500 text-black px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(251,191,36,0.5)] flex items-center gap-3 font-orbitron font-bold uppercase tracking-widest text-sm hover:bg-amber-400 transition-colors"
        >
          <Filter size={20} />
          <span>Filters</span>
          {/* Badge showing current category */}
          <span className="ml-2 px-2 py-0.5 bg-black text-amber-500 text-[10px] rounded-md">
            {activeTab}
          </span>
        </motion.button>
      </div>

      {/* 4. UNIFIED BOTTOM SHEET / SIDEBAR DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            />

            {/* The "Menu" - Centered on Desktop, Bottom on Mobile */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 md:left-auto md:right-10 md:bottom-28 md:w-96 bg-[#0a0a0a] border border-amber-500/30 rounded-t-[2.5rem] md:rounded-[2rem] z-[110] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-orbitron font-bold uppercase tracking-widest text-lg">
                  Event Categories
                </h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full text-amber-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`group w-full py-4 px-6 rounded-2xl font-rajdhani font-bold uppercase tracking-[0.2em] text-left transition-all flex justify-between items-center
                      ${
                        activeTab === cat.id
                          ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                          : "bg-white/5 text-gray-400 border border-white/10 hover:border-amber-500/50 hover:text-white"
                      }
                    `}
                  >
                    {cat.label}
                    {activeTab === cat.id && (
                      <Zap size={14} className="fill-black" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
