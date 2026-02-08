import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  color,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const endValue = parseInt(value.replace(/\D/g, ""), 10);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
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
    <span ref={ref} style={{ color }}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const stats = [
    { value: "23", label: "Events" },
    { value: "2249", label: "Participants" },
    { value: "1,25,000", prefix: "₹", label: "Prize Pool" },
    { value: "50", suffix: "+", label: "Colleges" },
  ];

  return (
    <section
      id="stats"
      className="relative py-16 sm:py-24 md:py-28 overflow-hidden border-y"
      style={{
        backgroundColor: colors.royalBlack,
        borderColor: `${colors.richGold}33`,
      }}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'DaggerSquare', sans-serif", color: "white" }}
          >
            IMPETUS 25.0 STATS
          </h2>
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
              className="relative px-3 sm:px-6 py-6 sm:py-10 text-center"
              style={{
                backgroundColor: "#0b0b0b",
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: `1.5px solid ${colors.richGold}`,
              }}
            >
              <div
                className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 sm:mb-3"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <AnimatedCounter
                  prefix={stat.prefix || ""}
                  value={stat.value}
                  suffix={stat.suffix || ""}
                  color={colors.brightGold}
                />
              </div>

              <div
                className="w-8 sm:w-10 h-[2px] mx-auto mb-2 sm:mb-3"
                style={{ backgroundColor: colors.richGold }}
              />

              <p
                className="uppercase tracking-widest text-xs sm:text-sm md:text-base "
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  color: "#E5E7EB",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
