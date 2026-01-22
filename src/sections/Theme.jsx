import { motion } from 'framer-motion';
import { Brain, Cpu, Leaf, Rocket } from 'lucide-react';

export const Theme = () => {
  const themes = [
    {
      icon: Brain,
      title: 'AI',
      subtitle: 'Artificial Intelligence',
      description: 'Exploring the frontiers of machine learning, neural networks, and intelligent systems.',
      gradientClass: 'from-neon-cyan to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      subtitle: 'Automation & Control',
      description: 'Building autonomous systems, drones, and intelligent machines that transform industries.',
      gradientClass: 'from-neon-violet to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      subtitle: 'Green Technology',
      description: 'Developing eco-friendly solutions and renewable energy systems for a sustainable future.',
      gradientClass: 'from-neon-green to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Space',
      subtitle: 'Aerospace & Beyond',
      description: 'Venturing into space technology, satellite systems, and interplanetary exploration.',
      gradientClass: 'from-cyan-400 to-neon-violet'
    }
  ];

  return (
    <section id="theme" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Themes 2024
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Four pillars of innovation driving this year's events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientClass} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${theme.gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-black text-white uppercase tracking-wider mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-neon-cyan font-space font-semibold uppercase tracking-wide mb-3">
                    {theme.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 font-space leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
