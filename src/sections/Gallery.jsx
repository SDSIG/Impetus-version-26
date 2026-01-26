import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const GalleryCircle = ({ images, delay = 0 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000 + delay);

    return () => clearInterval(interval);
  }, [images.length, delay]);

  return (
    <div className="gallery-circle-wrapper">
      {/* Outer rotating ring */}
      <motion.div
        className="circle-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner rotating ring */}
      <motion.div
        className="circle-ring inner"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Center Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="center-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={images[current]}
            alt="Gallery highlight"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Gallery = () => {
  const images = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
    "/images/pic5.jpg",
    "/images/pic6.png",
  ];

  return (
    <section id="gallery" className="relative py-24 bg-base overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Gallery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Moments captured across the IMPETUS journey
          </p>
        </motion.div>

        {/* 3-in-a-row layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <GalleryCircle images={images} delay={0} />
          <GalleryCircle images={images} delay={400} />
          <GalleryCircle images={images} delay={800} />
        </div>
      </div>
    </section>
  );
};
