import { motion } from "framer-motion";
import { useState } from "react";

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const cards = [
    {
      title: "ABOUT IMPETUS",
      content: `IMPETUS is our Annual National-Level Technical Student Extravaganza. It is a two-day technical fest happening in UVCE since the year 2001 with a different theme every year, which emphasizes on the particular year's trending and concerning topics. IMPETUS serves as a platform for many participants to showcase their ideas and talents, as this fest is a hub of many Flagship events, General events and Gaming Arenas. With years passing, IMPETUS has witnessed gradual growth in participants count marking the highest of 2472 participants in the year 2023.`,
    },
    {
      title: "ABOUT IEEE UVCE",
      content: `IEEE UVCE is an IEEE Student Branch at the University of Visvesvaraya 
College of Engineering, under the aegis of the IEEE Bangalore Section. 
Started in 1979 and revived in 2001, IEEE UVCE is dedicated to spreading 
knowledge through a variety of activities. The branch provides students 
with opportunities to attend global and national IEEE workshops, 
symposiums, guest lectures, and conferences. It also supports various 
technical interest groups, offering guidance and a nurturing platform for 
students. IEEE UVCE encourages the use of IEEE membership benefits 
and promotes collaboration with the global IEEE community. It has 
become one of the most recognized student branches in IEEE Region 10.`,
    },
  ];

  const truncatedText =
    cards[1].content.split(" ").slice(0, 70).join(" ") + "...";

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: colors.royalBlack }}
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

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-b from-[#0b0b0b] to-[#050505] p-8"
            style={{
              clipPath:
                "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
              border: `1.5px solid ${colors.richGold}`,
            }}
          >
            <h3
              className="text-2xl uppercase mb-4 tracking-[0.1em]"
              style={{
                fontFamily: "'DaggerSquare', sans-serif",
                color: colors.brightGold,
              }}
            >
              {card.title}
            </h3>

            <div
              className="w-16 h-[2px] mb-6"
              style={{ backgroundColor: colors.richGold }}
            />

            <div
              className="text-gray-300 leading-relaxed text-justify text-lg"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {index === 1 ? (
                <>
                  <p>{expanded ? card.content : truncatedText}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 font-bold uppercase tracking-widest cursor-pointer"
                    style={{ color: colors.richGold }}
                  >
                    {expanded ? "[ Read Less ]" : "[ Read More ]"}
                  </motion.button>
                </>
              ) : (
                <p>{card.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
