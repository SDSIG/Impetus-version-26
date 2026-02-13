import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Trophy, Calendar, ExternalLink, Info } from "lucide-react";

export const EventCard = ({ event, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  // UPDATED SHAPE: Clean top (no cuts), mirrored cyber-cuts on both bottom corners
  const techShape =
    "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px))";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="w-full group transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        animate={{ rotateY: showDetails ? 180 : 0 }}
        whileHover={!showDetails ? { rotateX: 4, rotateY: -4 } : {}}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 90,
          damping: 20,
        }}
        className="relative w-full min-h-[520px] cursor-default"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ================= FRONT: THE DISPLAY CASE ================= */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            clipPath: techShape,
            backgroundColor: colors.royalBlack,
            border: `1px solid ${colors.richGold}40`,
          }}
        >
          {/* 1. Poster Area (Maximized Spacing) */}
          <div className="w-full aspect-square bg-black p-3 border-b border-white/5">
            <div className="w-full h-full border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
              <img
                src={`/event-images/${event.image}`}
                alt={event.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 2. Content Area (Tightened Spacing) */}
          <div className="flex-1 flex flex-col justify-between p-5 bg-[#0a0a0a]">
            <h3
              className="text-2xl  font-bold uppercase text-center leading-tight line-clamp-2"
              style={{
                fontFamily: "'DaggerSquare', sans-serif",
                color: colors.brightGold,
              }}
            >
              {event.name}
            </h3>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => setShowDetails(true)}
                className="py-3 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all bg-white/5 border border-[#D4AF37] hover:bg-[#D4AF37]10"
                style={{
                  color: colors.brightGold,
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                <Info size={14} /> Details
              </button>

              <a
                href={event.reg_link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-center transition-all hover:brightness-110 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: colors.richGold,
                  color: colors.royalBlack,
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                Register <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= BACK: THE DOSSIER ================= */}
        <div
          className="absolute inset-0 p-7 flex flex-col bg-[#0a0a0a]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            clipPath: techShape,
            border: `1.5px solid ${colors.richGold}`,
          }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="border-l-2 border-[#D4AF37] pl-4">
              <h3
                className="text-xl font-bold uppercase mb-1"
                style={{
                  fontFamily: "'DaggerSquare', sans-serif",
                  color: colors.brightGold,
                }}
              >
                {event.name}
              </h3>
            </div>

            <button
              onClick={() => setShowDetails(false)}
              className="p-1.5 transition-colors hover:bg-white/5 rounded-full"
              style={{ color: colors.richGold }}
            >
              <ArrowLeft size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <p className="text-gray-400 text-sm leading-relaxed text-justify font-rajdhani border-l border-white/10 pl-4 italic">
              {event.description}
            </p>
          </div>

          <a
            href={event.reg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-4 text-xs font-bold uppercase tracking-[0.4em] text-center transition-all shadow-lg"
            style={{
              backgroundColor: colors.richGold,
              color: colors.royalBlack,
              fontFamily: "'Rajdhani', sans-serif",
            }}
          >
            Confirm Entry
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
