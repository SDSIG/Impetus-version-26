import { motion } from "framer-motion";

export const Theme = () => {
  return (
    <section
      id="theme"
      className="relative py-12 sm:py-16 md:py-24 lg:py-28 bg-black overflow-hidden"
    >
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oxanium font-extrabold text-white uppercase tracking-widest mb-3 sm:mb-4">
            Theme
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-purple-300 font-rajdhani">
            FutureTech : Engineering Tomorrow
          </p>
        </motion.div>

        {/* FUTURETECH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl backdrop-blur-xl bg-white/5 p-6 sm:p-8 md:p-10 lg:p-14"
          style={{
            clipPath:
              "polygon(4% 0, 96% 0, 100% 8%, 100% 92%, 96% 100%, 4% 100%, 0 92%, 0 8%)",
            outline: "2px solid rgba(253, 224, 71, 0.9)",
            outlineOffset: "-2px",
            boxShadow:
              "0 0 10px rgba(253,224,71,0.6), 0 0 25px rgba(253,224,71,0.35)",
          }}
        >
          {/* TITLE */}
          <h3 className="font-oxanium text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 sm:mb-8 text-white">
            FutureTech – Engineering Tomorrow
          </h3>

          {/* CONTENT */}
          <p className="font-space text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: "white" }}>
            FutureTech: Engineering Tomorrow represents the vision of technology
            that goes beyond the present and shapes the world ahead. This theme
            focuses on forward-thinking innovations that redefine how humans
            interact with machines, data, and the environment, emphasizing the
            convergence of intelligence, automation, and connectivity across
            industries. It encourages participants to explore ideas that push
            boundaries, challenge conventions, and deliver real-world impact.
            FutureTech highlights adaptability, resilience, and ethical
            technology development while promoting interdisciplinary
            collaboration and creative problem-solving. Engineering Tomorrow is
            about building intelligent, sustainable, and scalable solutions that
            reflect the evolving role of engineers in a rapidly advancing
            digital world — where technology is not just an idea, but a
            responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
