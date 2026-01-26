import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../data/events";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState({
    flagship: false,
    general: false,
    gaming: false,
  });

  // Responsive cards count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else setVisibleCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const categories = [
    { id: "flagship", label: "Flagship" },
    { id: "general", label: "General" },
    { id: "gaming", label: "Gaming" },
  ];

  const categoryEvents = events.filter((event) => event.category === activeTab);
  const isExpanded = expanded[activeTab];

  const visibleEvents = isExpanded
    ? categoryEvents
    : categoryEvents.slice(0, visibleCount);

  const toggleExpand = () => {
    setExpanded((prev) => ({
      ...prev,
      [activeTab]: !prev[activeTab],
    }));
  };

  return (
    <section
      id="events"
      className="relative py-12 sm:py-16 md:py-24 bg-base overflow-hidden"
    >
      {/* 🌌 STAR LAYER 1 – CLEAR FLOAT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(1px 1px at 220px 180px, #fff, transparent),
            radial-gradient(2px 2px at 300px 90px, #fff, transparent),
            radial-gradient(1px 1px at 380px 220px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 460px 40px, #fff, transparent),
            radial-gradient(2px 2px at 520px 160px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.95,
        }}
      />

      {/* 🌌 STAR LAYER 2 – DEEP SPACE DRIFT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, #fff, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent),
            radial-gradient(1px 1px at 280px 240px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 360px 150px, #fff, transparent),
            radial-gradient(2px 2px at 440px 60px, #fff, transparent),
            radial-gradient(1px 1px at 520px 210px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.7,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Events
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Flagship, technical and gaming events designed for the future.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg font-orbitron text-xs sm:text-sm uppercase tracking-widest transition-all
                ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-neon-cyan to-neon-violet text-white shadow-lg"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + isExpanded}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Fade effect when collapsed */}
          {!isExpanded && categoryEvents.length > visibleCount && (
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-base to-transparent" />
          )}
        </div>

        {/* Show More / Less */}
        {categoryEvents.length > visibleCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleExpand}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-orbitron uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
