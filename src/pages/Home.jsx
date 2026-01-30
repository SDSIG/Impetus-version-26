import { motion } from "framer-motion";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Theme } from "../sections/Theme";
import { Stats } from "../sections/Stats";
import { Events } from "../sections/Events";
import { EventsInfo } from "../sections/EventsInfo";
import { Gallery } from "../sections/Gallery";
import { Sponsors } from "../sections/Sponsors";
import { Contact } from "../sections/Contact";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#020202]"
    >
      <Hero />

      <div className="relative">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full" />
        </div>

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

        <section id="sponsors" className="relative z-10">
          <Sponsors />
        </section>

        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </div>
    </motion.div>
  );
};
