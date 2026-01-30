import React from "react";
import { Events } from "../sections/Events";

export const EventsPage = () => {
  return (
    <main className="min-h-screen bg-base text-white">
      <Events />
    </main>
  );
};

export default EventsPage;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "../data/events"; // Ensure this path is correct
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
      content: `IEEE UVCE hosts a variety of flagship events during IMPETUS, bringing together professionals,
industries, and students from diverse domains to network, learn, and share knowledge.

In addition, IMPETUS welcomes external teams and individuals to organize general events aligned with
the fest's mission and values — creating opportunities for creativity, innovation, and community
engagement.`,
    },
    {
      title: "GAMING EVENTS & ARENAS",
      content: `Extending beyond technical events, IMPETUS also hosts Gaming Events and Arenas where gaming
enthusiasts compete with participants from various colleges and universities.

Popular games include BGMI, Valorant, Online Chess, and more — making IMPETUS a complete blend of
technology, competition, and entertainment.`,
    },
  ];

  return (
    <section id="events" className="relative py-24 bg-[#020202]">
      {/* 2. EVENT DETAILS CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-b from-[#0b0b0b] to-black p-8"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: "1.5px solid rgba(251, 191, 36, 0.9)",
              }}
            >
              <h3 className="text-2xl font-oxanium font-bold text-white uppercase tracking-wide mb-4">
                {detail.title}
              </h3>

              <div className="w-16 h-[2px] mb-6 bg-[rgba(251,191,36,0.9)]" />

              <p className="text-gray-300 font-space leading-relaxed whitespace-pre-line">
                {detail.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CATEGORY TABS */}
      {/* THE STICKY BAR - Locked at Top */}
      <div
        className="sticky top-[70px] sm:top-[80px] z-30 w-full py-4 mb-16 
                   bg-black/80 backdrop-blur-xl border-y border-amber-500/20 
                   flex justify-center gap-2 sm:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveTab(cat.id);
              // Small scroll fix to keep user focused on the grid
              const el = document.getElementById("events");
              const offset = 100;
              window.scrollTo({
                top: el.offsetTop - offset,
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

      {/* 4. EVENT GRID CONTENT */}
      <div className="max-w-7xl mx-auto px-4 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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

      {/* 5. VIEW FULL EVENTS BUTTON - Only show on home page */}
      {location.pathname !== "/events" && (
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/events")}
            className="flex items-center gap-3 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-rajdhani font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-lg"
          >
            View All Events
            <span className="text-lg">→</span>
          </motion.button>
        </div>
      )}

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
