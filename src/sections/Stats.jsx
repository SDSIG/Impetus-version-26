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
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = [
    { value: "2500", suffix: "+", label: "Participants" },
    { value: "50", suffix: "+", label: "Colleges" },
    { value: "20", suffix: "+", label: "Events" },
    { value: "10", suffix: "+ Lakh", label: "Prize Pool" },
  ];

  return (
    <section
      id="stats"
      className="relative py-16 sm:py-24 md:py-28 bg-black border-y border-white/10 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                relative
                backdrop-blur-lg
                bg-white/5
                border border-white/10
                rounded-xl
                px-3 sm:px-6 py-6 sm:py-10
                text-center
                hover:bg-white/10
                transition-all duration-300
              "
              style={{
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.25), 0 0 20px rgba(239, 68, 68, 0.1)',
              }}
            >
              {/* NUMBER */}
              <div className="font-oxanium text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 sm:mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* DIVIDER */}
              <div className="w-8 sm:w-10 h-[2px] bg-purple-500 mx-auto mb-2 sm:mb-3" />

              {/* LABEL */}
              <p className="font-rajdhani text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-300">
                {stat.label}
              </p>

              {/* CORNER ACCENT */}
              <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-purple-500/40 rounded-tr-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
