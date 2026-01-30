import { motion } from "framer-motion";

export const About = () => {
  const cards = [
    {
      title: "ABOUT IEEE UVCE",
      content: `IEEE UVCE is an IEEE student branch at the University of Visvesvaraya College of Engineering, under the aegis of the IEEE Bangalore Section. Started in 2001, IEEE UVCE is dedicated to spreading knowledge through a variety of activities. The branch provides students with opportunities to attend global and national IEEE workshops, symposiums, guest lectures, and conferences. It also supports various technical interest groups, offering guidance and a nurturing platform for students. IEEE UVCE enriches students’ experiences with social, cultural, and technical events, encourages the use of IEEE membership benefits, and promotes collaboration with the global IEEE community.`,
    },
    {
      title: "ABOUT IMPETUS",
      content: `IMPETUS is the Annual National-Level Technical Extravaganza of IEEE UVCE, conducted since 2001.
Held over two days with a unique theme every year, IMPETUS focuses on trending and relevant
technological domains.

The fest serves as a platform for participants to showcase ideas and talent through flagship events,
general events, and gaming arenas. Over the years, IMPETUS has grown significantly, witnessing a peak
participation of 2472 students in 2023.`,
    },
    {
      title: "FLAGSHIP & GENERAL EVENTS",
      content: `IEEE UVCE hosts a variety of flagship events during IMPETUS, bringing together professionals,
industries, and students from diverse domains to network, learn, and share knowledge.

In addition, IMPETUS welcomes external teams and individuals to organize general events aligned with
the fest’s mission and values — creating opportunities for creativity, innovation, and community
engagement.`,
    },
    {
      title: "GAMING EVENTS & ARENAS",
      content: `Extending beyond technical events, IMPETUS also hosts Gaming Events and Arenas where gaming
enthusiasts compete with participants from various colleges and universities.

Popular games include BGMI, Valorant, Online Chess, and more — making IMPETUS a complete blend of
technology, competition, and entertainment.`,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-24 lg:py-28 bg-black overflow-hidden"
    >
      {/* 🌌 STAR LAYER 1 – CLEAR FLOAT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
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

      {/* 🌌 STAR LAYER 2 – DEEP SPACE DRIFT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oxanium font-extrabold text-white uppercase tracking-widest mb-3 sm:mb-4">
            About IMPETUS
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-rajdhani max-w-3xl mx-auto px-2">
            Discover the legacy, vision, and events that make IMPETUS a
            national-level technical extravaganza.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-b from-[#0b0b0b] to-black p-8"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: "1.5px solid rgba(253, 224, 71, 0.9)",
              }}
            >
              <h3 className="text-2xl font-oxanium font-bold text-white uppercase tracking-wide mb-4">
                {card.title}
              </h3>

              <div className="w-16 h-[2px] mb-6 bg-[rgba(253,224,71,0.9)]" />

              <p className="text-gray-300 font-space leading-relaxed whitespace-pre-line">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
