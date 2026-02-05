import { motion } from "framer-motion";
import { useState } from "react";

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  const cards = [
    {
      title: "ABOUT IMPETUS",
      content: `IMPETUS is our Annual National-Level Technical Extravaganza. It is a two-day technical fest happening in UVCE since the year 2001 with a different theme every year, which emphasizes on the particular year's trending and concerning topics. IMPETUS serves as a platform for many participants to showcase their ideas and talents, as this fest is a hub of many Flagship events, General events and Gaming Arenas. With years passing, IMPETUS has witnessed gradual growth in participants count marking the highest of 2472 participants in the year 2023.`,
    },
    {
      title: "ABOUT IEEE UVCE",
      content: `IEEE UVCE is an IEEE student branch at the University of Visvesvaraya College of Engineering, under the aegis of the IEEE Bangalore Section. Started in 2001, IEEE UVCE is dedicated to spreading knowledge through a variety of activities. The branch provides students with opportunities to attend global and national IEEE workshops, symposiums, guest lectures, and conferences. It also supports various technical interest groups, offering guidance and a nurturing platform for students. IEEE UVCE enriches students' experiences with social, cultural, and technical events, encourages the use of IEEE membership benefits, and promotes collaboration with the global IEEE community. It has become one of the most recognized student branches in IEEE Region 10. This year is particularly special as IEEE UVCE celebrates its Silver Jubilee, marking 25 years of fostering innovation, professional growth, and academic excellence among students. To commemorate this milestone, a series of special events and activities are planned. This year aims to honour the legacy of IEEE UVCE and its impact on countless students' lives, highlighting the achievements of its members and their contributions to the engineering field. The Silver Jubilee is a testament to the branch's enduring commitment to excellence and its pivotal role in shaping future engineers.`,
    },
  ];

  const truncatedText =
    cards[1].content.split(" ").slice(0, 70).join(" ") + "...";

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-b from-[#0b0b0b] to-black p-8"
            style={{
              clipPath:
                "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
              border: "1.5px solid rgba(253, 224, 71, 0.9)",
            }}
          >
            <h3 className="text-2xl font-bold text-white uppercase mb-4">
              {card.title}
            </h3>

            <div className="w-16 h-[2px] mb-6 bg-yellow-300" />

            {index === 1 ? (
              <>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {expanded ? card.content : truncatedText}
                </p>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-yellow-300 font-semibold hover:underline"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </>
            ) : (
              <p className="text-gray-300 leading-relaxed text-justify">
                {card.content}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
