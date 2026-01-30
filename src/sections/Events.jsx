import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "../data/events";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { id: "flagship", label: "Flagship" },
    { id: "general", label: "General" },
    { id: "gaming", label: "Gaming" },
  ];

  const categoryEvents = events.filter((event) => event.category === activeTab);

  const eventDetails = [
    {
      title: "FLAGSHIP & GENERAL EVENTS",
      content: `IEEE UVCE hosts a variety of flagship events during IMPETUS, bringing together professionals, industries, and students from diverse domains to network, learn, and share knowledge.\n\nIn addition, IMPETUS welcomes external teams and individuals to organize general events aligned with the fest's mission and values — creating opportunities for creativity and community engagement.`,
    },
    {
      title: "GAMING EVENTS & ARENAS",
      content: `Extending beyond technical events, IMPETUS also hosts Gaming Events and Arenas where enthusiasts compete with participants from various universities.\n\nPopular games include BGMI, Valorant, and Online Chess — making IMPETUS a complete blend of technology, competition, and entertainment.`,
    },
  ];

  return (
    <section id="events" className="relative py-20 bg-[#020202]">
      {/*  1. SECTION HEADING  */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-16">
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
      {/* 3. STICKY CATEGORY TABS */}
      <div
        className="sticky top-[70px] sm:top-[80px] z-30 w-full py-4 mb-12 
                   bg-black/90 backdrop-blur-xl border-y border-amber-500/20 
                   flex justify-center gap-2 sm:gap-6 shadow-2xl"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveTab(cat.id);
              // Scroll to grid top slightly for better UX on long lists
              const el = document.getElementById("event-grid-anchor");
              if (el)
                window.scrollTo({
                  top: el.offsetTop - 150,
                  behavior: "smooth",
                });
            }}
            className={`relative px-4 sm:px-8 py-2 font-rajdhani text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300
              ${activeTab === cat.id ? "text-black" : "text-amber-500/60 hover:text-amber-400"}
            `}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>
      <div id="event-grid-anchor" />
      {/* 4. EVENT GRID CONTENT */}
      <div className="max-w-7xl mx-auto px-4 min-h-[500px]">
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
                {/* Subtle outer glow on card hover */}
                <div className="absolute -inset-1 bg-amber-500/0 group-hover:bg-amber-500/5 blur-2xl transition-all duration-500" />
                <EventCard event={event} index={index} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* 5. NAVIGATION BUTTON (Only on Home) */}
      {location.pathname !== "/events" && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate("/events")}
            className="group w-64 py-4 bg-amber-500 text-black font-bold tracking-[0.2em] uppercase text-xs rounded-full transition-all hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] flex items-center justify-center gap-3"
          >
            Explore All Events
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      )}
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
