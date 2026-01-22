import { motion } from 'framer-motion';

export const Sponsors = () => {
  const sponsors = [
    { name: 'TechCorp', tier: 'platinum', logo: 'https://via.placeholder.com/200x100/00f2ff/ffffff?text=TechCorp' },
    { name: 'InnovateLabs', tier: 'platinum', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=InnovateLabs' },
    { name: 'FutureTech', tier: 'gold', logo: 'https://via.placeholder.com/200x100/10b981/ffffff?text=FutureTech' },
    { name: 'CodeForge', tier: 'gold', logo: 'https://via.placeholder.com/200x100/00f2ff/ffffff?text=CodeForge' },
    { name: 'RoboSystems', tier: 'silver', logo: 'https://via.placeholder.com/150x75/8b5cf6/ffffff?text=RoboSystems' },
    { name: 'AISolutions', tier: 'silver', logo: 'https://via.placeholder.com/150x75/10b981/ffffff?text=AISolutions' },
    { name: 'CloudTech', tier: 'silver', logo: 'https://via.placeholder.com/150x75/00f2ff/ffffff?text=CloudTech' },
    { name: 'DataVault', tier: 'silver', logo: 'https://via.placeholder.com/150x75/8b5cf6/ffffff?text=DataVault' }
  ];

  const tiers = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver')
  };

  return (
    <section id="sponsors" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Sponsors
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Proudly supported by industry leaders
          </p>
        </motion.div>

        {/* Platinum */}
        {tiers.platinum.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide text-center mb-8">
              Platinum Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tiers.platinum.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="backdrop-blur-xl bg-white/5 border border-purple-500/40 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/60 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 12px rgba(168, 85, 247, 0.25), 0 0 20px rgba(239, 68, 68, 0.1)',
                  }}
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="h-20 object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gold */}
        {tiers.gold.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}yellow-100
            className="mb-12"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide text-center mb-8">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {tiers.gold.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="h-16 object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver */}
        {tiers.silver.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide text-center mb-8">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {tiers.silver.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
