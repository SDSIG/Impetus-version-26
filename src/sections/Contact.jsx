import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const teamContacts = [
    {
      name: 'Mohith Monnappa T A',
      role: 'Chairperson, IEEE UVCE',
      phone: '+91 63609 65351',
      email: 'mohithmonnappa.ta@ieee.org'
    },
    {
      name: 'Bharath P Nambiar',
      role: 'Vice Chairperson, IEEE UVCE',
      phone: '+91 91089 40867',
      email: 'bharathpnambiar@ieee.org'
    },
    {
      name: 'Vaishnavi N Mahadev',
      role: 'Vice Chairperson, IEEE UVCE',
      phone: '+91 93803 82355',
      email: 'vaishnavinm15@ieee.org'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',     // 🔴 replace
        'YOUR_TEMPLATE_ID',    // 🔴 replace
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ieeeuvce26@gmail.com'
        },
        'YOUR_PUBLIC_KEY'      // 🔴 replace
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-base overflow-hidden">
      {/* 🌌 STAR LAYER 1 – CLEAR FLOAT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 80px 120px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 150px 60px, #fff, transparent),
            radial-gradient(1px 1px at 220px 180px, #fff, transparent),
            radial-gradient(2px 2px at 300px 90px, #fff, transparent),
            radial-gradient(1px 1px at 380px 220px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 460px 40px, #fff, transparent),
            radial-gradient(2px 2px at 520px 160px, #fff, transparent)
          `,
          backgroundSize: "260px 260px",
          opacity: 0.95,
        }}
      />

      {/* 🌌 STAR LAYER 2 – DEEP SPACE DRIFT */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 40px 70px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 120px 200px, #fff, transparent),
            radial-gradient(2px 2px at 200px 100px, #fff, transparent),
            radial-gradient(1px 1px at 280px 240px, #fff, transparent),
            radial-gradient(1.5px 1.5px at 360px 150px, #fff, transparent),
            radial-gradient(2px 2px at 440px 60px, #fff, transparent),
            radial-gradient(1px 1px at 520px 210px, #fff, transparent)
          `,
          backgroundSize: "320px 320px",
          opacity: 0.7,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
            Contact Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-lg text-gray-300 font-space max-w-3xl mx-auto">
            Have questions? We're here to help
          </p>
        </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {teamContacts.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-neon-cyan/50 transition-all"
            >
              <h3 className="text-base sm:text-lg font-orbitron font-bold text-white mb-1 line-clamp-2">
                {person.name}
              </h3>

              <p className="text-xs sm:text-sm text-neon-cyan font-space mb-3 sm:mb-4">
                {person.role}
              </p>

              <div className="flex flex-col gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm font-space">
                <a
                  href={`tel:${person.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 hover:text-white transition truncate"
                >
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{person.phone}</span>
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center justify-center gap-2 hover:text-white transition truncate"
                >
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                  <span className="truncate text-xs">{person.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM + MAP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form (LEFT) */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-400 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:border-neon-cyan/50 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:border-neon-cyan/50 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 uppercase mb-2">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white resize-none focus:border-neon-cyan/50 outline-none"
                placeholder="Your Message"
              />
            </div>

            <Button variant="primary" className="w-full" disabled={loading}>
              <Send className="inline mr-2 w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* MAP (RIGHT) */}
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://www.google.com/maps?q=University+Visvesvaraya+College+of+Engineering+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition"
          >
            <iframe
              title="UVCE Map"
              src="https://www.google.com/maps?q=University+Visvesvaraya+College+of+Engineering+Bangalore&output=embed"
              className="w-full h-full min-h-[420px] pointer-events-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

