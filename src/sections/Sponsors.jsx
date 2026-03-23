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
      {
        name: "Nexteer",
        logo: "/sponsors/nexteer.png",
        url: "https://www.nexteer.com/",
      },
    ],

    silver: [
      {
        name: "Karnataka Power Corporation Limited",
        logo: "/sponsors/kpcl.png",
        url: "https://kpcl.karnataka.gov.in",
      },
    ],

    general: [
      {
        name: "Woodkraft",
        logo: "/sponsors/woodkraft.png",
        url: "https://www.woodkraft.com/",
      },
      {
        name: "CPCT",
        logo: "/sponsors/cpct.png",
        url: "https://cpct.mp.gov.in",
      },
      {
        name: "AstraSilica",
        logo: ["/sponsors/astrasilica.png", "/sponsors/astrasilica2.png"],
        url: "https://www.linkedin.com/company/astrasilica/",
      },
      {
        name: "Med Wali Consultancy",
        logo: "/sponsors/medwali.png",
        url: "#",
      },
    ],

    merchandise: [
      {
        name: "Chumbak",
        logo: "/sponsors/chumbak.png",
        url: "https://chumpay.in/",
      },
    ],

    technical: [
      {
        name: "IEEE Bangalore Section",
        logo: "/sponsors/ieee.png",
        url: "https://ieeebangalore.org",
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

          <TierBlock title="Silver Sponsor" sponsors={sponsors.silver} />

          <TierBlock title="General Sponsor" sponsors={sponsors.general} row />

          <TierBlock
            title="Merchandise Partner"
            sponsors={sponsors.merchandise}
          />

          <TierBlock title="Technical Partner" sponsors={sponsors.technical} />
        </div>
      </div>
    </section>
  );
};

const TierBlock = ({ title, sponsors, large, row }) => {
  const colors = {
    richGold: "#D4AF37",
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

      <div
        className={`flex items-start justify-center gap-10 ${
          row ? "flex-wrap" : "flex-col items-center"
        }`}
      >
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex flex-col items-center gap-4">
            <motion.a
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
              {Array.isArray(sponsor.logo) ? (
                <div className="flex items-center gap-3">
                  <img
                    src={sponsor.logo[0]}
                    alt={sponsor.name}
                    className="w-[70px] h-[70px] object-contain"
                  />

                  <div className="h-10 w-[1px] bg-[#D4AF37]" />

                  <img
                    src={sponsor.logo[1]}
                    alt={sponsor.name}
                    className="w-[70px] h-[70px] object-contain"
                  />
                </div>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`object-contain ${
                    large ? "w-[200px] h-[200px]" : "w-[150px] h-[150px]"
                  }`}
                />
              )}
            </motion.a>

            <a
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
          </div>
        ))}
      </div>
    </div>
  );
};
