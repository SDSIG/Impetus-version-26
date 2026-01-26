/* import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events, getEventsByCategory } from '../data/events';
import { EventCard } from '../components/EventCard';

export const Events = () => {
  const [activeTab, setActiveTab] = useState('flagship');
  const categories = [
    { id: 'flagship', label: 'Flagship', count: getEventsByCategory('flagship').length },
    { id: 'general', label: 'General', count: getEventsByCategory('general').length },
    { id: 'gaming', label: 'Gaming', count: getEventsByCategory('gaming').length }
  ];

  const filteredEvents = events.filter(event => event.category === activeTab);

  return (
    <section id="events" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Events
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Compete in cutting-edge technical competitions and gaming tournaments
          </p>
        </motion.div>

       
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-orbitron font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-white shadow-[0_0_20px_rgba(0,242,255,0.5)]'
                  : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-400/50'
              }`}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </div>

       
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}; */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events, getEventsByCategory } from "../data/events";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("flagship");

  const categories = [
    {
      id: "flagship",
      label: "Flagship",
      count: getEventsByCategory("flagship").length,
    },
    {
      id: "general",
      label: "General",
      count: getEventsByCategory("general").length,
    },
    {
      id: "gaming",
      label: "Gaming",
      count: getEventsByCategory("gaming").length,
    },
  ];

  const filteredEvents = events.filter((event) => event.category === activeTab);

  return (
    <section id="events" className="relative py-12 sm:py-16 md:py-24 bg-base overflow-hidden">
      {/* 🌌 STAR LAYER 1 – CLEAR FLOAT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
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
        animate={{
          x: [0, -30, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-3 sm:mb-4">
            Events
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-2">
            Flagship, technical and gaming events designed for the future.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-orbitron text-xs sm:text-sm uppercase tracking-widest transition-all
                ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-neon-cyan to-neon-violet text-white shadow-lg"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2"
          >
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
