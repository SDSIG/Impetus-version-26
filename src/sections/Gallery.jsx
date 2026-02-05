import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TrueFadeGallery = ({ images, colors }) => {
  const slots = 12;
  const [slotImages, setSlotImages] = useState([]);
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setSlotImages(shuffled.slice(0, slots));
  }, [images]);

  useEffect(() => {
    const cycle = () => {
      const slotIndexes = [...Array(slots).keys()].sort(
        () => 0.5 - Math.random(),
      );
      const toReplace = slotIndexes.slice(0, 3);

      setSlotImages((prev) => {
        const used = new Set(prev);
        const available = images.filter((img) => !used.has(img));
        return prev.map((img, idx) => {
          if (!toReplace.includes(idx)) return img;
          const pool = available.length ? available : images;
          let next;
          do {
            next = pool[Math.floor(Math.random() * pool.length)];
          } while (next === img);
          return next;
        });
      });

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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: isHighlight ? 1.03 : 1,
                  boxShadow: isHighlight
                    ? `0 0 40px ${colors.richGold}73` // Using theme gold for highlight
                    : "0 0 0 rgba(0,0,0,0)",
                }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div
              className="absolute inset-0 ring-1 rounded-lg pointer-events-none"
              style={{ borderColor: `${colors.richGold}26` }} // 15% opacity ring
            />
          </div>
        );
      })}
    </div>
  );
};

export const Gallery = () => {
  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
    brightGold: "#F9D976",
  };

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
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Updated Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl uppercase tracking-[0.2em] mb-4"
            style={{
              fontFamily: "'DaggerSquare', sans-serif",
              color: "white",
              textShadow: `0 0 15px ${colors.richGold}40`,
            }}
          >
            Gallery
          </h2>
        </motion.div>

        <TrueFadeGallery images={images} colors={colors} />
      </div>
    </section>
  );
};
