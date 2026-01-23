import { ArrowRight, Ticket } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* 🏫 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/clg.png')" }}
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🪟 CONTENT */}
      <div className="relative z-10 w-full flex justify-center px-3 sm:px-4 mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            w-full max-w-6xl
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-xl
            px-4 sm:px-6 py-4 sm:py-6
            md:px-10 md:py-8
            lg:px-14 lg:py-10
            shadow-[0_0_30px_rgba(255,255,255,0.08)]
          "
        >
          {/* ================= HEADER ================= */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="font-rajdhani text-xs sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-black/80">
              IEEE UVCE presents annual national-level <br />
              Technical Student Extravaganza
            </p>

            <h1
              className="
                font-extrabold
                tracking-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                text-white
              "
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 0 18px rgba(255,255,255,0.25)",
              }}
            >
              IMPETUS 26.0
            </h1>
          </div>

          {/* ================= BUTTONS + LOGO ================= */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* BUTTONS */}
            <div className="flex flex-col gap-5 items-start">
              {/* REGISTER BUTTON */}
              <button
                className="
                  px-8 py-3
                  text-sm sm:text-base
                  font-semibold
                  tracking-wider
                  bg-black
                  rounded-full
                  hover:bg-neutral-800
                  transition-all
                  flex items-center
                  shadow-lg
                "
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "white" }}
              >
                REGISTER NOW
                <ArrowRight className="ml-3" style={{ color: "white" }} />
              </button>

              {/* PASS BUTTON */}
              <button
                className="
                  px-8 py-3
                  text-sm sm:text-base
                  font-semibold
                  tracking-wider
                  bg-black
                  rounded-full
                  hover:bg-neutral-800
                  transition-all
                  flex items-center
                  shadow-lg
                "
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "white" }}
              >
                <Ticket className="mr-3" style={{ color: "white" }} />
                ALL-IN-ONE PASS
              </button>
            </div>

            {/* LOGO */}
            <div className="flex justify-center">
              <img
                src="/images/logo.png"
                alt="Impetus Logo"
                className="w-44 sm:w-52 md:w-60 lg:w-72 drop-shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
