import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Sponsors = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
    burntGold: "#78350F",
  };

  const sponsors = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=TechCorp",
    },
    {
      name: "InnovateLabs",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=InnovateLabs",
    },
    {
      name: "FutureTech",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=FutureTech",
    },
    {
      name: "CodeForge",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=CodeForge",
    },
    {
      name: "RoboSystems",
      logo: "https://via.placeholder.com/150x75/fbbf24/000000?text=RoboSystems",
    },
    {
      name: "AISolutions",
      logo: "https://via.placeholder.com/150x75/fbbf24/000000?text=AISolutions",
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
      {/* 🌌 ATMOSPHERIC BACKGROUND */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[160px] rounded-full pointer-events-none opacity-15"
        style={{
          background: `radial-gradient(circle, ${colors.burntGold}, ${colors.royalBlack})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UNIFIED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl uppercase tracking-[0.2em] mb-4"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: "white",
              textShadow: `0 0 15px ${colors.richGold}40`,
            }}
          >
            Sponsors
          </h2>
        </motion.div>

        {/* UNIFIED SPONSOR WALL */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative group p-[1px]"
            >
              {/* Outer Glow on Hover */}
              <div
                className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: colors.richGold }}
              />

              <div
                className="relative bg-[#0a0a0a]/80 backdrop-blur-md rounded-xl p-6 sm:p-8 flex items-center justify-center h-28 w-56 sm:h-36 sm:w-72 transition-all duration-500 overflow-hidden"
                style={{ border: `1px solid ${colors.richGold}33` }}
              >
                {/* Subtle Internal Gradient */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${colors.brightGold}, transparent)`,
                  }}
                />

                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 sm:h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
