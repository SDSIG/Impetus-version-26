import { motion } from "framer-motion";

export const Theme = () => {
  return (
    <section id="theme" className="relative py-12 sm:py-16 md:py-24 lg:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="
            relative
            mx-auto
            max-w-5xl
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            p-6 sm:p-8 md:p-10 lg:p-14
            text-gray-200
          "
          style={{
            clipPath:
              "polygon(4% 0, 96% 0, 100% 8%, 100% 92%, 96% 100%, 4% 100%, 0 92%, 0 8%)",
          }}
        >
          {/* TECH BORDER ACCENTS */}
          <span className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t border-l border-purple-500/50" />
          <span className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b border-r border-purple-500/50" />

          {/* TITLE */}
          <h3 className="font-oxanium text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-6 sm:mb-8">
            FutureTech – Engineering Tomorrow
          </h3>

          {/* CONTENT – SINGLE PARAGRAPH */}
          <p className="font-space text-sm sm:text-base md:text-lg leading-relaxed text-gray-100">
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
