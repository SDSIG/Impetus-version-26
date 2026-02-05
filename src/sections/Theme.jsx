import { motion } from "framer-motion";

export const Theme = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
    burntGold: "#78350F",
  };

  return (
    <section
      id="theme"
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
      {/* STAR LAYERS */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, ${colors.brightGold}, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(1px 1px at 220px 180px, ${colors.richGold}, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.8,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, ${colors.richGold}, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl uppercase tracking-[0.2em] mb-3"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: colors.brightGold,
              textShadow: `0 0 15px ${colors.richGold}40`,
            }}
          >
            Theme
          </h2>
        </motion.div>

        {/* MAIN FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-b from-[#0b0b0b] to-[#050505] p-10 md:p-14"
          style={{
            clipPath:
              "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
            border: `2px solid ${colors.richGold}`,
            boxShadow: `0 0 20px ${colors.richGold}33, inset 0 0 10px ${colors.richGold}1A`,
          }}
        >
          <h3
            className="text-2xl md:text-4xl uppercase mb-6 tracking-wide"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: "white",
            }}
          >
            FutureTech – Engineering Tomorrow
          </h3>

          <div
            className="w-20 h-[2px] mb-8"
            style={{ backgroundColor: colors.richGold }}
          />

          <p
            className="text-gray-300 leading-relaxed text-lg md:text-xl text-justify tracking-wide"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            FutureTech: Engineering Tomorrow represents a vision of technology
            that shapes the world beyond the present. It focuses on innovations
            that transform how humans interact with machines, data, and the
            environment, blending intelligence, automation, and connectivity.
            The theme encourages bold ideas that challenge conventions and
            create real-world impact while promoting ethical, sustainable, and
            scalable engineering. FutureTech reflects the evolving
            responsibility of engineers to build solutions for a rapidly
            advancing digital future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
