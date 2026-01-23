import { motion } from "framer-motion";

export const About = () => {
  const cards = [
    {
      title: "ABOUT IEEE UVCE",
      content: `IEEE UVCE is an IEEE student branch at the University of Visvesvaraya College of Engineering,
      under the aegis of the IEEE Bangalore Section. Started in 2001, IEEE UVCE is dedicated to spreading
      knowledge through workshops, symposiums, guest lectures, conferences, and technical interest groups.
      It promotes collaboration with the global IEEE community and has become one of the most recognized
      student branches in IEEE Region 10.

      This year marks a special milestone as IEEE UVCE celebrates its Silver Jubilee — 25 years of fostering
      innovation, professional growth, and academic excellence.`,
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
    <section id="about" className="relative py-12 sm:py-16 md:py-24 lg:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="
                relative
                backdrop-blur-xl
                bg-black
                p-8
                transition-all duration-300
              "
              style={{
                clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)',
                border: '2px solid rgb(168, 85, 247)',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.3), 0 0 25px rgba(239, 68, 68, 0.15)',
              }}
            >
              {/* CARD TITLE */}
              <h3 className="text-2xl font-oxanium font-bold text-white uppercase tracking-wide mb-4">
                {card.title}
              </h3>

              {/* DIVIDER */}
              <div className="w-16 h-[2px] bg-purple-500 mb-6" />

              {/* CARD CONTENT */}
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
