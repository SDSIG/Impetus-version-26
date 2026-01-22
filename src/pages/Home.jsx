import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Theme } from '../sections/Theme';
import { Stats } from '../sections/Stats';
import { Events } from '../sections/Events';
import { Gallery } from '../sections/Gallery';
import { Sponsors } from '../sections/Sponsors';
import { Contact } from '../sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <Stats />
      <Events />
      <Gallery />
      <Sponsors />
      <Contact />
    </>
  );
};
