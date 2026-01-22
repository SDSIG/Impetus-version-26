import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../components/Button';
import { Scene } from '../canvas/Scene';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const letters = 'IMPETUS 26.0'.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      {/* Animated Grid Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        <source src="/videos/hero-background.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-orbitron font-black text-white uppercase tracking-wider inline-block"
                    style={{
                      textShadow:
                        "0 0 20px rgba(0, 242, 255, 0.5), 0 0 40px rgba(0, 242, 255, 0.3)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-space font-light leading-relaxed"
            >
              National technical Fest
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("events")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Events
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("#register", "_self")}
              >
                <Play className="inline mr-2 w-4 h-4" />
                get lost
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-orbitron font-bold text-neon-cyan">
                  26
                </div>
                <div className="text-sm text-gray-400 font-space uppercase tracking-wide">
                  Years
                </div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-neon-violet">
                  20+
                </div>
                <div className="text-sm text-gray-400 font-space uppercase tracking-wide">
                  Events
                </div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-neon-green">
                  ₹10L+
                </div>
                <div className="text-sm text-gray-400 font-space uppercase tracking-wide">
                  Prize Pool
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Scene */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block h-[500px]"
          >
            <Scene corePosition={[0, 0, 0]} coreScale={2} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
