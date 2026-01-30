import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* 🎬 TRUE FADE-OUT → SWAP → FADE-IN GALLERY */
const TrueFadeGallery = ({ images }) => {
  const slots = 12;
  const [slotImages, setSlotImages] = useState([]);
  const [highlighted, setHighlighted] = useState([]);

  // init slots
  useEffect(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setSlotImages(shuffled.slice(0, slots));
  }, [images]);

  useEffect(() => {
    const cycle = () => {
      // choose which slots will change
      const slotIndexes = [...Array(slots).keys()].sort(
        () => 0.5 - Math.random(),
      );
      const toReplace = slotIndexes.slice(0, 3); // replace 3 slots only

      setSlotImages((prev) => {
        const used = new Set(prev);
        const available = images.filter((img) => !used.has(img));

        return prev.map((img, idx) => {
          if (!toReplace.includes(idx)) return img;

          // pick a different image
          const pool = available.length ? available : images;
          let next;
          do {
            next = pool[Math.floor(Math.random() * pool.length)];
          } while (next === img);

          return next;
        });
      });

      // pick 2 highlights (independent of swap)
      const glowIndexes = [...Array(slots).keys()].sort(
        () => 0.5 - Math.random(),
      );
      setHighlighted(glowIndexes.slice(0, 2));
    };

    cycle();
    const interval = setInterval(cycle, 1600);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {slotImages.map((img, index) => {
        const isHighlight = highlighted.includes(index);

        return (
          <div
            key={index}
            className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={img}
                src={img}
                alt="Gallery"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: isHighlight ? 1.03 : 1,
                  boxShadow: isHighlight
                    ? "0 0 40px rgba(251,191,36,0.45)"
                    : "0 0 0 rgba(0,0,0,0)",
                }}
                exit={{
                  opacity: 0, // 🔴 FULL FADE TO BLACK
                  scale: 0.92,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            </AnimatePresence>

            {/* subtle golden border */}
            <div className="absolute inset-0 ring-1 ring-yellow-400/15 rounded-lg pointer-events-none" />
          </div>
        );
      })}
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
    "/images/pic7.jpg",
    "/images/pic8.jpg",
    "/images/pic9.jpg",
    "/images/pic10.jpg",
    "/images/pic11.jpg",
    "/images/pic12.jpg",
    "/images/pic13.jpg",
    "/images/pic14.jpg",
  ];

  return (
    <section id="gallery" className="relative py-24 bg-base overflow-hidden">
      {/* 🌌 STAR LAYER 1 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.8,
        }}
      />

      {/* 🌌 STAR LAYER 2 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.55,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Gallery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Moments captured across the IMPETUS journey
          </p>
        </motion.div>

        {/* 🎬 TRUE FADE GALLERY */}
        <TrueFadeGallery images={images} />
      </div>
    </section>
  );
};
