import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Sponsors = () => {
  const sponsors = [
    {
      name: "TechCorp",
      tier: "platinum",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=TechCorp",
    },
    {
      name: "InnovateLabs",
      tier: "platinum",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=InnovateLabs",
    },
    {
      name: "FutureTech",
      tier: "gold",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=FutureTech",
    },
    {
      name: "CodeForge",
      tier: "gold",
      logo: "https://via.placeholder.com/200x100/fbbf24/000000?text=CodeForge",
    },
    {
      name: "RoboSystems",
      tier: "silver",
      logo: "https://via.placeholder.com/150x75/fbbf24/000000?text=RoboSystems",
    },
    {
      name: "AISolutions",
      tier: "silver",
      logo: "https://via.placeholder.com/150x75/fbbf24/000000?text=AISolutions",
    },
  ];

  const tiers = {
    platinum: sponsors.filter((s) => s.tier === "platinum"),
    gold: sponsors.filter((s) => s.tier === "gold"),
    silver: sponsors.filter((s) => s.tier === "silver"),
  };

  return (
    <section
      id="sponsors"
      className="relative py-24 bg-[#020202] overflow-hidden"
    >
      {/* 🌌 SOLAR BACKGROUND ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(1px 1px at 10% 20%, #fbbf24, transparent), radial-gradient(1.5px 1.5px at 90% 80%, #fff, transparent)`,
          backgroundSize: "250px 250px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-rajdhani font-bold tracking-[0.4em] text-xs uppercase text-glow-amber">
              Partnerships
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white uppercase tracking-tighter mb-4">
            Our{" "}
            <span className="bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>

        {/* PLATINUM TIER */}
        {tiers.platinum.length > 0 && (
          <div className="mb-20">
            <h3 className="text-amber-500 font-rajdhani font-bold text-center tracking-[0.5em] text-sm uppercase mb-10">
              // Platinum Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {tiers.platinum.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group p-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-amber-700 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-[#0a0a0a] border border-amber-500/30 backdrop-blur-xl rounded-2xl p-8 sm:p-10 flex items-center justify-center h-32 w-64 sm:h-40 sm:w-80 shadow-2xl">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-16 sm:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* GOLD TIER */}
        {tiers.gold.length > 0 && (
          <div className="mb-20">
            <h3 className="text-gray-400 font-rajdhani font-bold text-center tracking-[0.4em] text-xs uppercase mb-8">
              // Gold Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tiers.gold.map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  whileHover={{ y: -5 }}
                  className="bg-[#0f0f0f] border border-white/5 hover:border-amber-500/40 rounded-xl p-6 h-24 w-48 sm:h-28 sm:w-56 flex items-center justify-center transition-all shadow-xl"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 sm:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* SILVER TIER */}
        {tiers.silver.length > 0 && (
          <div>
            <h3 className="text-gray-500 font-rajdhani font-bold text-center tracking-[0.4em] text-[10px] uppercase mb-8">
              // Silver Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tiers.silver.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-[#050505] border border-white/5 rounded-lg p-4 h-16 w-32 sm:h-20 sm:w-40 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-amber-500/20 transition-all"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-8 sm:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
