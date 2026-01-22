// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from '../components/Button';

// export const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'impetus@ieeeuvce.org',
//       href: 'mailto:impetus@ieeeuvce.org',
//       gradientClass: 'from-neon-cyan to-cyan-600'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+91 98765 43210',
//       href: 'tel:+919876543210',
//       gradientClass: 'from-neon-violet to-purple-600'
//     },
//     {
//       icon: MapPin,
//       label: 'Address',
//       value: 'UVCE, Bangalore, Karnataka',
//       href: '#',
//       gradientClass: 'from-neon-green to-emerald-600'
//     }
//   ];

//   return (
//     <section id="contact" className="relative py-24 bg-base">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
//           <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
//             Have questions? We're here to help
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-6">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;
//               return (
//                 <motion.a
//                   key={info.label}
//                   href={info.href}
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
//                 >
//                   <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.gradientClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 font-space uppercase tracking-wide mb-1">
//                       {info.label}
//                     </div>
//                     <div className="text-lg text-white font-space font-semibold">
//                       {info.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               );
//             })}
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert('Thank you for your message! We will get back to you soon.');
//             }}
//           >
//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//                 placeholder="your.email@example.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Message
//               </label>
//               <textarea
//                 required
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all resize-none"
//                 placeholder="Your Message"
//               />
//             </div>
//             <Button variant="primary" className="w-full">
//               <Send className="inline mr-2 w-4 h-4" />
//               Send Message
//             </Button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };


// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from '../components/Button';

// export const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'impetus@ieeeuvce.org',
//       href: 'mailto:impetus@ieeeuvce.org',
//       gradientClass: 'from-neon-cyan to-cyan-600'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+91 98765 43210',
//       href: 'tel:+919876543210',
//       gradientClass: 'from-neon-violet to-purple-600'
//     },
//     {
//       icon: MapPin,
//       label: 'Address',
//       value: 'UVCE, Bangalore, Karnataka',
//       href: '#',
//       gradientClass: 'from-neon-green to-emerald-600'
//     }
//   ];

//   const teamContacts = [
//     {
//       name: 'Mohith Monnappa T A',
//       role: 'Chairperson, IEEE UVCE',
//       phone: '+91 63609 65351',
//       email: 'mohithmonnappa.ta@ieee.org'
//     },
//     {
//       name: 'Bharath P Nambiar',
//       role: 'Vice Chairperson, IEEE UVCE',
//       phone: '+91 91089 40867',
//       email: 'bharathpnambiar@ieee.org'
//     },
//     {
//       name: 'Vaishnavi N Mahadev',
//       role: 'Vice Chairperson, IEEE UVCE',
//       phone: '+91 93803 82355',
//       email: 'vaishnavinm15@ieee.org'
//     }
//   ];

//   return (
//     <section id="contact" className="relative py-24 bg-base">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
//           <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
//             Have questions? We're here to help
//           </p>
//         </motion.div>

//         {/* 🔹 Team Contacts (NOW DIRECTLY BELOW HEADING) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           {teamContacts.map((person, index) => (
//             <motion.div
//               key={person.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-neon-cyan/50 transition-all"
//             >
//               <h3 className="text-lg font-orbitron font-bold text-white mb-1">
//                 {person.name}
//               </h3>

//               <p className="text-sm text-neon-cyan font-space mb-4">
//                 {person.role}
//               </p>

//               <div className="flex flex-col gap-3 text-gray-300 text-sm font-space">
//                 <a
//                   href={`tel:${person.phone.replace(/\s+/g, '')}`}
//                   className="flex items-center justify-center gap-2 hover:text-white transition"
//                 >
//                   <Phone className="w-4 h-4" />
//                   {person.phone}
//                 </a>

//                 <a
//                   href={`mailto:${person.email}`}
//                   className="flex items-center justify-center gap-2 hover:text-white transition"
//                 >
//                   <Mail className="w-4 h-4" />
//                   {person.email}
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//           {/* Contact Info */}
//           <div className="space-y-6">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;
//               return (
//                 <motion.a
//                   key={info.label}
//                   href={info.href}
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
//                 >
//                   <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.gradientClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 font-space uppercase tracking-wide mb-1">
//                       {info.label}
//                     </div>
//                     <div className="text-lg text-white font-space font-semibold">
//                       {info.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               );
//             })}
//           </div>

//           {/* Contact Form (UNCHANGED) */}
//           <motion.form
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert('Thank you for your message! We will get back to you soon.');
//             }}
//           >
//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//                 Message
//               </label>
//               <textarea
//                 required
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all resize-none"
//                 placeholder="Your Message"
//               />
//             </div>

//             <Button variant="primary" className="w-full">
//               <Send className="inline mr-2 w-4 h-4" />
//               Send Message
//             </Button>
//           </motion.form>

//         </div>
//       </div>
//     </section>
//   );
// };


// import { motion } from 'framer-motion';
// import { Mail, Phone, Send } from 'lucide-react';
// import { Button } from '../components/Button';

// export const Contact = () => {
//   const teamContacts = [
//     {
//       name: 'Mohith Monnappa T A',
//       role: 'Chairperson, IEEE UVCE',
//       phone: '+91 63609 65351',
//       email: 'mohithmonnappa.ta@ieee.org'
//     },
//     {
//       name: 'Bharath P Nambiar',
//       role: 'Vice Chairperson, IEEE UVCE',
//       phone: '+91 91089 40867',
//       email: 'bharathpnambiar@ieee.org'
//     },
//     {
//       name: 'Vaishnavi N Mahadev',
//       role: 'Vice Chairperson, IEEE UVCE',
//       phone: '+91 93803 82355',
//       email: 'vaishnavinm15@ieee.org'
//     }
//   ];

//   return (
//     <section id="contact" className="relative py-24 bg-base">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-widest mb-4">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto mb-6" />
//           <p className="text-lg text-gray-300 font-space max-w-3xl mx-auto">
//             Have questions? We're here to help
//           </p>
//         </motion.div>

//         {/* Team Contacts */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
//           {teamContacts.map((person, index) => (
//             <motion.div
//               key={person.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-neon-cyan/50 transition-all"
//             >
//               <h3 className="text-lg font-orbitron font-bold text-white mb-1">
//                 {person.name}
//               </h3>

//               <p className="text-sm text-neon-cyan font-space mb-4">
//                 {person.role}
//               </p>

//               <div className="flex flex-col gap-3 text-gray-300 text-sm font-space">
//                 <a
//                   href={`tel:${person.phone.replace(/\s+/g, '')}`}
//                   className="flex items-center justify-center gap-2 hover:text-white transition"
//                 >
//                   <Phone className="w-4 h-4" />
//                   {person.phone}
//                 </a>

//                 <a
//                   href={`mailto:${person.email}`}
//                   className="flex items-center justify-center gap-2 hover:text-white transition"
//                 >
//                   <Mail className="w-4 h-4" />
//                   {person.email}
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Centered Contact Form */}
//         <motion.form
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert('Thank you for your message! We will get back to you soon.');
//           }}
//         >
//           <div>
//             <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//               placeholder="Your Name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all"
//               placeholder="your.email@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 font-space uppercase tracking-wide mb-2">
//               Message
//             </label>
//             <textarea
//               required
//               rows={5}
//               className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 font-space focus:outline-none focus:border-neon-cyan/50 transition-all resize-none"
//               placeholder="Your Message"
//             />
//           </div>

//           <Button variant="primary" className="w-full">
//             <Send className="inline mr-2 w-4 h-4" />
//             Send Message
//           </Button>
//         </motion.form>

//       </div>
//     </section>
//   );
// };


import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" className="relative py-16 sm:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
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

        {/* Team Contacts */}
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

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs sm:text-sm text-gray-400 font-space uppercase mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan/50 transition-all"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-400 font-space uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan/50 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-400 font-space uppercase mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/10 text-white text-sm resize-none focus:outline-none focus:border-neon-cyan/50 transition-all"
              placeholder="Your Message"
            />
          </div>

          <Button variant="primary" className="w-full text-sm sm:text-base" disabled={loading}>
            <Send className="inline mr-2 w-3 sm:w-4 h-3 sm:h-4" />
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>

      </div>
    </section>
  );
};
