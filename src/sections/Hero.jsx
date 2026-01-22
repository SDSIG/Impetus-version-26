import { ArrowRight, Ticket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export const Hero = () => {
  // ✅ DEFINE LETTERS
  const letters = "IMPETUS 26.0".split("");

  // ✅ DEFINE VARIANTS
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center space-y-10"
        >
          {/* TITLE */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-center flex-wrap gap-2">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase tracking-wider inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* SUBTITLE */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 font-space font-light"
          >
            One and only fest
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Button variant="primary">
              Explore Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button variant="outline">
              <Play className="mr-2 w-4 h-4" />
              Get Lost
            </Button>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center pt-10"
          >
            <img
              src="/images/logo.png"
              alt="Impetus Logo"
              className="w-64 sm:w-72 md:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
