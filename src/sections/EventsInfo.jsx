import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const EventsInfo = () => {
  const navigate = useNavigate();

  const eventDetails = [
    {
      title: "FLAGSHIP EVENTS",
      content: `IEEE UVCE hosts a various flagship events in IMPETUS every year, aimed at bringing together professionals, industries from different domains and backgrounds to network, learn, and share knowledge. Our flagship events are designed to provide attendees with valuable insights, practical skills, and industry updates. We offer a wide range of events to cater to different interests and needs, including conferences, workshops, webinars, and more.`,
    },
    {
      title: "GENERAL EVENTS",
      content: `IMPETUS is not just about our flagship events - we also welcome outside teams and individuals to organize events that align with our mission and values. These events are a great opportunity for the wider community to get involved with IMPETUS and showcase their skills and creativity. For IMPETUS 25.0, we have a wide range of exciting events planned that are sure to appeal to a diverse audience. Gear up and get involved - whether you're a developer, entrepreneur, tech enthusiastic, or just someone who loves to have fun, there's a place for you at IMPETUS 25.0!`,
    },
    {
      title: "GAMING EVENTS & ARENAS",
      content: `Extending the boundaries, IEEE UVCE also hosts Gaming events and Arenas as a part of IMPETUS where the gaming enthusiasts get an opportunity to play along with participants from various colleges and universities. This includes games like BGMI, Valorant, Online Chess etc.`,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-black overflow-hidden">
      {/* STAR BACKGROUND — same as About */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.9,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-3">
            IMPETUS 25.0
          </h2>
          <p className="text-yellow-300 text-lg uppercase tracking-wider">
            Events
          </p>
        </motion.div>

        {/* GRID — SAME AS ABOUT */}
        <div className="grid md:grid-cols-3 gap-8">
          {eventDetails.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-b from-[#0b0b0b] to-black p-8"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: "2px solid rgba(253, 224, 71, 0.9)",
              }}
            >
              <h3 className="text-2xl font-bold text-white uppercase mb-4">
                {event.title}
              </h3>

              <div className="w-16 h-[2px] mb-6 bg-yellow-300" />

              <p className="text-gray-300 leading-relaxed text-justify">
                {event.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/events")}
            className="flex items-center gap-3 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold uppercase tracking-wider transition"
          >
            Show All Events
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
