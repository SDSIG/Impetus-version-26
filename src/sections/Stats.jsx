import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const endValue = parseInt(value.replace(/\D/g, ""));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1750),
        1,
      );

      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(endValue);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="!text-white">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = [
    { value: "23", label: "Events" },
    { value: "2249", label: "Participants" },
    { value: "125000", label: "Prize Pool" },
    { value: "50", suffix: "+", label: "Colleges" },
  ];

  return (
    <section
      id="stats"
      className="relative py-16 sm:py-24 md:py-28 bg-black border-y border-white/10 px-4 sm:px-6 overflow-hidden"
    >
      {/* 🌌 STAR LAYER 1 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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

      {/* 🌌 STAR LAYER 2 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
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

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            IMPETUS 25.0 STATS
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            A glimpse into the scale, reach, and impact of IMPETUS.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-black px-3 sm:px-6 py-6 sm:py-10 text-center !text-white"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: "1.5px solid rgba(253, 224, 71, 0.9)",
              }}
            >
              <div className="font-oxanium text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-3">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix || ""}
                />
              </div>

              <div className="w-8 sm:w-10 h-[2px] mx-auto mb-2 sm:mb-3 bg-[rgba(253,224,71,0.9)]" />

              <p className="font-rajdhani text-xs sm:text-sm md:text-base uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
