import { motion } from "framer-motion";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Theme } from "../sections/Theme";
import { Stats } from "../sections/Stats";
import { EventsInfo } from "../sections/EventsInfo";
import { Gallery } from "../sections/Gallery";
import { Sponsors } from "../sections/Sponsors";
import { Contact } from "../sections/Contact";

export const Home = () => {
  // THEME COLORS
  const colors = {
    royalBlack: "#050505",
    burntGold: "#78350F",
    richGold: "#D4AF37",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
      style={{ backgroundColor: colors.royalBlack }}
    >
      <Hero />

      <div className="relative">
        {/* --- GLOBAL ROYAL GLOWS --- */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Right Glow */}
          <div
            className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] blur-[140px] rounded-full opacity-10"
            style={{ background: colors.burntGold }}
          />
          {/* Bottom Left Glow */}
          <div
            className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] blur-[140px] rounded-full opacity-10"
            style={{ background: colors.richGold }}
          />
        </div>

        {/* --- SECTIONS --- */}
        <section id="about" className="relative z-10">
          <About />
        </section>

        <Theme />

        <Stats />

        <section id="events-info" className="relative z-10">
          <EventsInfo />
        </section>

        <section id="gallery" className="relative z-10">
          <Gallery />
        </section>

        {/* <section id="sponsors" className="relative z-10">
          <Sponsors />
        </section> */}

        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </div>
    </motion.div>
  );
};
