import { motion } from "framer-motion";

export const Theme = () => {
  return (
    <section
      id="theme"
      className="relative py-16 md:py-24 lg:py-28 bg-black overflow-hidden"
    >
      {/* STAR LAYERS (unchanged vibe) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(1px 1px at 220px 180px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.9,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, #fff, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.6,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-3">
            Theme
          </h2>
          <p className="text-yellow-300 text-lg">
            FutureTech : Engineering Tomorrow
          </p>
        </motion.div>

        {/* MAIN FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-b from-[#0b0b0b] to-black p-10 md:p-14"
          style={{
            clipPath:
              "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
            border: "2px solid rgba(253, 224, 71, 0.9)",
            boxShadow:
              "0 0 12px rgba(253,224,71,0.5), inset 0 0 6px rgba(253,224,71,0.2)",
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
            FutureTech – Engineering Tomorrow
          </h3>

          <div className="w-20 h-[2px] mb-8 bg-yellow-300" />

          <p className="text-gray-300 leading-relaxed text-lg text-justify">
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
