import { motion } from 'framer-motion';
import { useState } from 'react';

export const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800'
  ];

  return (
    <section id="gallery" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Moments from previous editions of IMPETUS
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="relative overflow-hidden rounded-lg backdrop-blur-xl bg-white/5 border border-purple-500/40 group cursor-pointer aspect-square hover:shadow-lg transition-all"
              style={{
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.25), 0 0 20px rgba(239, 68, 68, 0.1)',
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
