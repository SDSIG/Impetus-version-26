import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const EventsInfo = () => {
  const navigate = useNavigate();

  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

  const eventDetails = [
    {
      title: "FLAGSHIP EVENTS",
      content: `IEEE UVCE hosts a various flagship events in IMPETUS every year, aimed at bringing together professionals, industries from different domains and backgrounds to network, learn, and share knowledge. Our flagship events are designed to provide attendees with valuable insights, practical skills, and industry updates. We offer a wide range of events to cater to different interests and needs, including conferences, workshops, webinars, and more.`,
    },
    {
      title: "GENERAL EVENTS",
      content: `IMPETUS is not just about our flagship events - we also welcome outside teams and individuals to organize events that align with our mission and values. These events are a great opportunity for the wider community to get involved with IMPETUS and showcase their skills and creativity. For IMPETUS 26.0, we have a wide range of exciting events planned that are sure to appeal to a diverse audience. Gear up and get involved - whether you're a developer, entrepreneur, tech enthusiastic, or just someone who loves to have fun, there's a place for you at IMPETUS 26.0!`,
    },
    {
      title: "GAMING EVENTS & ARENAS",
      content: `Extending the boundaries, IEEE UVCE also hosts Gaming events and Arenas as a part of IMPETUS where the gaming enthusiasts get an opportunity to play along with participants from various colleges and universities. This includes games like BGMI, Valorant, Online Chess etc.`,
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
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

      <div className="relative max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-3"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: "white",
              textShadow: `0 0 15px ${colors.richGold}40`,
            }}
          >
            IMPETUS 26.0
          </h2>
          <p
            className="text-lg uppercase tracking-[0.4em]"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              color: colors.richGold,
            }}
          >
            Categories
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {eventDetails.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-b from-[#0b0b0b] to-[#050505] p-8"
              style={{
                clipPath:
                  "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                border: `1.5px solid ${colors.richGold}`,
              }}
            >
              <h3
                className="text-2xl font-bold uppercase mb-4 tracking-wider"
                style={{
                  fontFamily: "'DaggerSquare', sans-serif",
                  color: colors.brightGold,
                }}
              >
                {event.title}
              </h3>

              <div
                className="w-16 h-[2px] mb-6"
                style={{ backgroundColor: colors.richGold }}
              />

              <p
                className="text-gray-300 leading-relaxed text-justify text-lg"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {event.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: colors.richGold,
              color: colors.royalBlack,
              boxShadow: `0 0 25px ${colors.richGold}66`,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/events")}
            className="flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              border: `1px solid ${colors.richGold}`,
              color: colors.richGold,
              backgroundColor: "transparent",
            }}
          >
            Show All Events
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
