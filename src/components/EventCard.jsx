import { useState } from "react";
import { motion } from "framer-motion";
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

  const cyberpunkShape =
    "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="h-[450px] w-full group"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        animate={{ rotateY: showDetails ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ================= FRONT ================= */}
        <div
          className="absolute inset-0 bg-[#0b0b0b] border border-yellow-400/30 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: "hidden", clipPath: cyberpunkShape }}
        >
          <div className="flex-1 overflow-hidden relative">
            <img
              src={`/event-images/${event.image}`}
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-4 left-5">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">
                {event.name}
              </h3>
            </div>
          </div>

          <div className="p-4 bg-black/90 flex gap-3 border-t border-yellow-400/20">
            <button
              onClick={() => setShowDetails(true)}
              className="flex-1 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 transition-colors"
            >
              View Details
            </button>

            {/* Dynamic Registration Link */}
            <a
              href={event.reg_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 border border-yellow-400 text-yellow-400 font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2"
            >
              Register <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div
          className="absolute inset-0 bg-[#0d0d0d] border border-yellow-400/60 p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            clipPath: cyberpunkShape,
          }}
        >
          <div className="flex justify-between items-start mb-4 border-b border-yellow-400/20 pb-4">
            <div>
              <h3 className="text-lg font-black text-yellow-400 uppercase leading-none mb-1">
                {event.name}
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                <Trophy size={10} className="text-yellow-400" />
                {event.cashPrize}
              </div>
            </div>
            <button
              onClick={() => setShowDetails(false)}
              className="p-2 hover:bg-yellow-400/10 rounded-full text-yellow-400 transition"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
            <section>
              <p className="text-gray-300 text-sm leading-relaxed text-justify italic">
                {event.description}
              </p>
            </section>

            <section className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={14} className="text-yellow-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users size={14} className="text-yellow-400" />
                <span>{event.teamSize}</span>
              </div>
            </section>

            {event.contacts?.length > 0 && (
              <section className="pt-4 border-t border-white/10">
                <h4 className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-3">
                  Contact Organizers
                </h4>
                <div className="space-y-3">
                  {event.contacts.map((c, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center group/contact"
                    >
                      <span className="text-xs text-gray-300 font-medium">
                        {c.name}
                      </span>
                      <a
                        href={`tel:${c.phone}`}
                        className="flex items-center gap-2 text-[11px] text-yellow-400 bg-yellow-400/5 px-2 py-1 border border-yellow-400/10 hover:border-yellow-400 transition"
                      >
                        <Phone size={10} /> {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Large Sticky Registration Link */}
          <a
            href={event.reg_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-4 bg-yellow-400 text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_15px_rgba(250,204,21,0.2)] text-center"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
