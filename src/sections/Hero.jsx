import { ArrowRight, Ticket } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* IEEE UVCE — NOW CLEAR & VISIBLE */}
          <p className="font-rajdhani text-lg md:text-xl uppercase tracking-[0.25em] text-white mb-6">
            IEEE UVCE PRESENTS ANNUAL NATIONAL-LEVEL <br />
            <span className="text-purple-400">
              TECHNICAL STUDENT EXTRAVAGANZA
            </span>
          </p>

          {/* IMPETUS TITLE — NOT WIDE */}
          <h1 className="font-oxanium text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-normal">
            IMPETUS 26.0
          </h1>
        </motion.div>

        {/* ================= BUTTONS + LOGO ================= */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-6 items-start"
          >
            <button className="arrow-btn primary">
              REGISTER NOW <ArrowRight />
            </button>

            <button className="arrow-btn primary">
              <Ticket /> ALL-IN-ONE PASS
            </button>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src="/images/logo.png"
              alt="Impetus Logo"
              className="w-64 sm:w-72 md:w-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
