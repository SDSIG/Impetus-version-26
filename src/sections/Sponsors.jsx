import { motion } from "framer-motion";

export const Sponsors = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const sponsors = {
    platinum: [
      {
        name: "HAL",
        logo: "/sponsors/halB.png",
        url: "https://hal-india.co.in",
      },
    ],
    gold: [
      {
        name: "KPTCL",
        logo: "/sponsors/kptclB.png",
        url: "https://kptcl.karnataka.gov.in",
      },
    ],
    general: [
      {
        name: "Woodkraft",
        logo: "/sponsors/woodkraft.png",
        url: "https://www.woodkraft.com/",
      },
    ],

    // ✅ ADDED MERCHANDISE SPONSOR
    merchandise: [
      {
        name: "Chumbak",
        logo: "/sponsors/chumbak.png", // ⬅️ Put your uploaded image here
        url: "https://www.chumbak.com",
      },
    ],
  };

  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
    >
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

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-3"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: "white",
              textShadow: `0 0 15px ${colors.richGold}40`,
            }}
          >
            SPONSORS
          </h2>

          <div
            className="w-40 h-[2px] mx-auto mt-6"
            style={{ backgroundColor: colors.richGold }}
          />
        </motion.div>

        <div className="space-y-16">
          <TierBlock
            title="Platinum Sponsor"
            sponsors={sponsors.platinum}
            large
          />

          <TierBlock title="Gold Sponsor" sponsors={sponsors.gold} />

          <TierBlock title="General Sponsor" sponsors={sponsors.general} />

          {/* ✅ NEW TIER ADDED BELOW GENERAL */}
          <TierBlock
            title="Merchandise Sponsor"
            sponsors={sponsors.merchandise}
          />
        </div>
      </div>
    </section>
  );
};

const TierBlock = ({ title, sponsors, large }) => {
  const colors = {
    richGold: "#D4AF37",
    royalBlack: "#050505",
  };

  return (
    <div className="text-center">
      <h3
        className="text-2xl uppercase mb-8 tracking-wider"
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          color: colors.richGold,
        }}
      >
        {title}
      </h3>

      <div className="flex flex-col items-center gap-6">
        {sponsors.map((sponsor) => (
          <motion.a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`
              relative bg-gradient-to-b from-[#0b0b0b] to-[#050505]
              ${large ? "w-[240px] h-[240px]" : "w-[200px] h-[200px]"}
              flex items-center justify-center
              transition-all duration-300
            `}
            style={{
              clipPath:
                "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
              border: `1.5px solid ${colors.richGold}`,
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`
                object-contain
                ${large ? "w-[200px] h-[200px]" : "w-[150px] h-[150px]"}
              `}
            />
          </motion.a>
        ))}

        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name + "-btn"}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:tracking-[0.4em]"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              color: colors.richGold,
            }}
          >
            Visit Website ↗
          </a>
        ))}
      </div>
    </div>
  );
};
