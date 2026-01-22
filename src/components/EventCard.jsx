import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EventCard = ({ event, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan/50">
          <span className="text-xs font-orbitron font-bold text-neon-cyan uppercase">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-orbitron font-bold text-white uppercase tracking-wide">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neon-cyan" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-neon-violet" />
            <span>{event.teamSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-neon-green" />
            <span className="font-bold text-neon-green">{event.prizePool}</span>
          </div>
        </div>
        
        <motion.div
          className="flex items-center gap-2 text-neon-cyan group-hover:gap-4 transition-all"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-orbitron font-bold uppercase">View Details</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 border-2 border-neon-cyan/0 group-hover:border-neon-cyan/50 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};
