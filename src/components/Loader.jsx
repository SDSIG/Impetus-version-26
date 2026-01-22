// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Scene } from '../canvas/Scene';

// export const Loader = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsComplete(true);
//             setTimeout(() => onComplete(), 500);
//           }, 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {!isComplete && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-base flex items-center justify-center"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="flex flex-col items-center justify-center space-y-8"
//           >
//             <div className="w-64 h-64">
//               <Scene coreScale={1.5} />
//             </div>
//             <div className="text-center space-y-4">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-2xl font-orbitron font-bold text-neon-cyan uppercase tracking-widest"
//               >
//                 INITIALIZING IMPETUS 26.0...
//               </motion.h2>
//               {/* <div className="w-[32rem] h-1.5 bg-white/10 rounded-full overflow-hidden"> */}
//               <div className="w-[85vw] max-w-[32rem] h-1.5 bg-white/10 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-3xl font-orbitron font-bold text-neon-cyan"
//               >
//                 {progress}%
//               </motion.p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Scene } from '../canvas/Scene';

// /* Sparkle component */
// const Sparkles = () => {
//   const sparkles = Array.from({ length: 300 });

//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {sparkles.map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-0.5 h-0.5 rounded-full bg-white"
//           initial={{
//             opacity: 0,
//             scale: 0,
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           animate={{
//             opacity: [0, 1, 0],
//             scale: [0, 1.2, 0],
//           }}
//           transition={{
//             duration: 2 + Math.random() * 3,
//             repeat: Infinity,
//             delay: 0,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export const Loader = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsComplete(true);
//             setTimeout(() => onComplete(), 500);
//           }, 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       {!isComplete && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-base flex items-center justify-center"
//         >
//           {/* ✨ FULLSCREEN SPARKLES */}
//           <Sparkles />

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             className="relative z-10 flex flex-col items-center justify-center space-y-8"
//           >
//             <div className="w-64 h-64">
//               <Scene coreScale={1.5} />
//             </div>

//             <div className="text-center space-y-4">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-2xl font-orbitron font-bold text-neon-cyan uppercase tracking-widest"
//               >
//                 INITIALIZING IMPETUS 26.0...
//               </motion.h2>

//               <div className="w-[85vw] max-w-[32rem] h-1.5 bg-white/10 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ duration: 1 }}
//                 />
//               </div>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-3xl font-orbitron font-bold text-neon-cyan"
//               >
//                 {progress}%
//               </motion.p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene } from '../canvas/Scene';

/* Sparkle component */
const Sparkles = () => {
  const sparkles = Array.from({ length: 300 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-[2px] sm:h-[2px] rounded-full bg-white"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: 0,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onComplete(), 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-base flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8"
        >
          {/* ✨ FULLSCREEN SPARKLES */}
          <Sparkles />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-[95vw] sm:max-w-[40rem]"
          >
            {/* Scene */}
            <div className="w-[70vw] max-w-[28rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem]">
              <Scene coreScale={1.5} />
            </div>

            {/* Text + Progress */}
            <div className="text-center space-y-4 w-full px-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-2xl md:text-3xl font-orbitron font-bold text-neon-cyan uppercase tracking-widest"
              >
                INITIALIZING IMPETUS 26.0...
              </motion.h2>

              {/* Progress Bar */}
              <div className="w-full max-w-[90%] sm:max-w-[32rem] h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Percentage */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl sm:text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan"
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
