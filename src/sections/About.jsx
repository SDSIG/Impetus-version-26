import { motion } from 'framer-motion';
import { Target, Award, Users, Zap } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To foster innovation, creativity, and technical excellence among engineering students across India.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: '26 years of delivering world-class technical competitions and industry-leading events.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Bringing together 2500+ participants from 50+ colleges nationwide.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Showcasing cutting-edge technologies in AI, Robotics, Sustainability, and Space.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            About IMPETUS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto leading-relaxed">
            IMPETUS is the annual national-level technical fest organized by IEEE UVCE, 
            celebrating engineering excellence and innovation. Now in its 26th edition, 
            IMPETUS continues to be a platform where the brightest minds converge to compete, 
            learn, and shape the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-space leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
