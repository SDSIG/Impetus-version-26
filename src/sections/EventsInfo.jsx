import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const EventsInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-black overflow-hidden">
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
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oxanium font-extrabold text-white uppercase tracking-widest mb-3 sm:mb-4">
            IMPETUS 25.0
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-amber-400 font-rajdhani font-bold tracking-[0.2em] uppercase">
            EVENTS
          </p>
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-8 sm:p-10 md:p-12 lg:p-14"
          style={{
            clipPath:
              "polygon(4% 0, 96% 0, 100% 8%, 100% 92%, 96% 100%, 4% 100%, 0 92%, 0 8%)",
            outline: "2px solid rgba(251, 224, 71, 0.9)",
            outlineOffset: "-2px",
            boxShadow:
              "0 0 10px rgba(251,224,71,0.6), 0 0 25px rgba(251,224,71,0.35)",
          }}
        >
          <p className="text-gray-300 font-space leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line mb-8">
            IMPETUS serves as a platform for various talents to showcase their
            abilities and skills. IMPETUS hosts flagship events, general events,
            and gaming events. Flagship events help participants compete over
            their technical skills and knowledge to solve real-world problems.
            General events provide a platform for participants to showcase their
            skills and talents in other domains while entertaining them with
            creative rounds. Gaming events encourage all gaming enthusiasts to
            showcase their strategies and planning skills.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/events")}
              className="flex items-center gap-3 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-rajdhani font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-lg"
            >
              Show All Events
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
