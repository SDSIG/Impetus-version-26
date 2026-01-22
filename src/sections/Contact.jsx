import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'impetus@ieeeuvce.org',
      href: 'mailto:impetus@ieeeuvce.org',
      gradientClass: 'from-neon-cyan to-cyan-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      gradientClass: 'from-neon-violet to-purple-600'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'UVCE, Bangalore, Karnataka',
      href: '#',
      gradientClass: 'from-neon-green to-emerald-600'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
          <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Have questions? We're here to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.gradientClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-space uppercase tracking-wide mb-1">
                      {info.label}
                    </div>
                    <div className="text-lg text-white font-space font-semibold">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! We will get back to you soon.');
            }}
          >
            <div>
              <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all resize-none"
                placeholder="Your Message"
              />
            </div>
            <Button variant="primary" className="w-full">
              <Send className="inline mr-2 w-4 h-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
