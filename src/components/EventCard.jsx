/*import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EventCard = ({ event, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative backdrop-blur-xl bg-white/5 border border-purple-500/40 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-400/60 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/event/${event.id}`)}
      style={{
        boxShadow: '0 0 12px rgba(168, 85, 247, 0.25), 0 0 20px rgba(239, 68, 68, 0.1)',
      }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan/50">
          <span className="text-xs font-orbitron font-bold text-neon-cyan uppercase">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white uppercase tracking-wide line-clamp-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neon-cyan flex-shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-neon-violet flex-shrink-0" />
            <span className="truncate">{event.teamSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-neon-green flex-shrink-0" />
            <span className="font-bold text-neon-green truncate">{event.prizePool}</span>
          </div>
        </div>
        
        <motion.div
          className="flex items-center gap-2 text-neon-cyan group-hover:gap-4 transition-all text-xs sm:text-sm"
          whileHover={{ x: 5 }}
        >
          <span className="font-orbitron font-bold uppercase">View Details</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 border-2 border-neon-cyan/0 group-hover:border-purple-400/40 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};
*/

import { useState } from "react";
import { motion } from "framer-motion";

export const EventCard = ({ event, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="h-[450px] sm:h-[500px] md:h-[520px] w-full"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{ rotateY: showDetails ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 rounded-xl backdrop-blur-xl bg-white/5 border border-purple-500/40 overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Square Poster */}
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white uppercase">
              {event.title}
            </h3>

            {/* Buttons */}
            <div className="flex gap-3 flex-col">
              <button
                onClick={() => setShowDetails(true)}
                className="w-full py-2 sm:py-3 rounded-lg bg-neon-cyan font-orbitron font-bold text-sm sm:text-base hover:scale-105 transition"
                style={{ color: "white" }}
              >
                Know More
              </button>

              <a
                href={event.registerLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 sm:py-3 rounded-lg border border-neon-violet font-orbitron font-bold text-sm sm:text-base text-center hover:bg-neon-violet transition"
                style={{ color: "white" }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900/90 to-black border border-purple-400 p-4 sm:p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white mb-4 uppercase">
              About Event
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {event.description}
            </p>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="w-full mt-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white font-orbitron font-bold text-sm sm:text-base hover:bg-white/20 transition"
          >
            Back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
