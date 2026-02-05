import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  ArrowLeft,
  Trophy,
  Calendar,
  Users,
  ExternalLink,
} from "lucide-react";

export const EventCard = ({ event, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
    burntGold: "#78350F",
  };

  const royalShape =
    "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="h-[480px] w-full group"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        animate={{ rotateY: showDetails ? 180 : 0 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ================= FRONT ================= */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            clipPath: royalShape,
            backgroundColor: colors.royalBlack,
            border: `1px solid ${colors.richGold}40`,
          }}
        >
          <div className="flex-1 overflow-hidden relative">
            <img
              src={`/event-images/${event.image}`}
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gold Overlay Wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3
                className="text-2xl font-bold uppercase tracking-tight"
                style={{
                  fontFamily: "'DaggerSquare', sans-serif",
                  color: "white",
                }}
              >
                {event.name}
              </h3>
            </div>
          </div>

          <div
            className="p-4 bg-[#0a0a0a] flex gap-3 border-t"
            style={{ borderColor: `${colors.richGold}20` }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
              className="flex-1 py-3 font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                backgroundColor: colors.richGold,
                color: colors.royalBlack,
              }}
            >
              View Info
            </button>

            <a
              href={event.reg_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 py-3 border font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                borderColor: colors.richGold,
                color: colors.richGold,
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = `${colors.richGold}1A`;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Register <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div
          className="absolute inset-0 p-8 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            clipPath: royalShape,
            backgroundColor: "#0a0a0a",
            border: `1px solid ${colors.richGold}`,
          }}
        >
          <div
            className="flex justify-between items-start mb-6 border-b pb-4"
            style={{ borderColor: `${colors.richGold}33` }}
          >
            <div>
              <h3
                className="text-xl font-bold uppercase leading-none mb-2"
                style={{
                  fontFamily: "'DaggerSquare', sans-serif",
                  color: colors.brightGold,
                }}
              >
                {event.name}
              </h3>
              <div
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: colors.richGold }}
              >
                <Trophy size={12} />
                {event.cashPrize}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(false);
              }}
              className="p-2 transition-colors rounded-full"
              style={{
                color: colors.richGold,
                backgroundColor: `${colors.richGold}10`,
              }}
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6 font-rajdhani">
            <p className="text-gray-300 text-base leading-relaxed text-justify opacity-80">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: colors.brightGold }}
              >
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: colors.brightGold }}
              >
                <Users size={14} />
                <span>{event.teamSize}</span>
              </div>
            </div>

            {event.contacts?.length > 0 && (
              <div
                className="pt-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <h4
                  className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
                  style={{ color: colors.richGold }}
                >
                  Liaison Officers
                </h4>
                <div className="space-y-4">
                  {event.contacts.map((c, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center group/contact"
                    >
                      <span className="text-sm text-gray-200 font-medium tracking-wide">
                        {c.name}
                      </span>
                      <a
                        href={`tel:${c.phone}`}
                        className="flex items-center gap-2 text-[11px] font-bold px-3 py-1.5 border transition-all"
                        style={{
                          borderColor: `${colors.richGold}40`,
                          color: colors.brightGold,
                          fontFamily: "'Orbitron', sans-serif",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.borderColor = colors.richGold)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.borderColor = `${colors.richGold}40`)
                        }
                      >
                        <Phone size={10} /> {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={event.reg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 font-bold text-xs uppercase tracking-[0.3em] transition-all text-center shadow-lg"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              backgroundColor: colors.richGold,
              color: colors.royalBlack,
            }}
          >
            Confirm Registration
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
