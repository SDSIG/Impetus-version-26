import { motion } from "framer-motion";

export const Button = ({ children, variant = "arrow" }) => {
  const base =
    "px-10 py-4 uppercase tracking-widest font-semibold backdrop-blur-md transition-all";

  const variants = {
    arrow: `
      bg-purple-700 text-white
      clip-path-[polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,6%_50%)]
      hover:bg-purple-800
    `,
    "arrow-outline": `
      bg-black/40 text-purple-300
      border border-purple-500
      clip-path-[polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,6%_50%)]
      hover:bg-purple-600/20
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
};
