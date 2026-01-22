import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, Users, DollarSign, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { getEventById } from '../data/events';
import { Button } from '../components/Button';
import { useState } from 'react';

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);
  const [expandedRule, setExpandedRule] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">Event Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-neon-cyan hover:text-neon-violet font-space font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Events
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-widest mb-4"
            >
              {event.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <div className="px-4 py-2 rounded-lg bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan/50">
                <span className="text-sm font-orbitron font-bold text-neon-cyan uppercase">
                  {event.category}
                </span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-neon-violet/20 backdrop-blur-sm border border-neon-violet/50">
                <span className="text-sm font-orbitron font-bold text-neon-violet">
                  Prize: {event.prizePool}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide mb-4">
                About This Event
              </h2>
              <p className="text-gray-300 font-space leading-relaxed">
                {event.description}
              </p>
            </motion.div>

            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <button
                onClick={() => setExpandedRule(!expandedRule)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wide">
                  Rules & Guidelines
                </h2>
                {expandedRule ? (
                  <ChevronUp className="w-6 h-6 text-neon-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-neon-cyan" />
                )}
              </button>
              {expandedRule && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 font-space">
                      <span className="text-neon-cyan mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 space-y-4"
            >
              <h3 className="text-xl font-orbitron font-bold text-white uppercase tracking-wide mb-4">
                Event Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-neon-cyan mt-1" />
                  <div>
                    <div className="text-xs text-gray-400 font-space uppercase tracking-wide">Date</div>
                    <div className="text-white font-space font-semibold">{event.date}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neon-violet mt-1" />
                  <div>
                    <div className="text-xs text-gray-400 font-space uppercase tracking-wide">Time</div>
                    <div className="text-white font-space font-semibold">{event.time}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neon-green mt-1" />
                  <div>
                    <div className="text-xs text-gray-400 font-space uppercase tracking-wide">Venue</div>
                    <div className="text-white font-space font-semibold">{event.venue}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-neon-cyan mt-1" />
                  <div>
                    <div className="text-xs text-gray-400 font-space uppercase tracking-wide">Team Size</div>
                    <div className="text-white font-space font-semibold">{event.teamSize}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-neon-violet mt-1" />
                  <div>
                    <div className="text-xs text-gray-400 font-space uppercase tracking-wide">Registration Fee</div>
                    <div className="text-white font-space font-semibold">{event.fee}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button variant="primary" className="w-full" onClick={() => window.open('#register', '_self')}>
                  Register Now
                </Button>
              </div>
            </motion.div>

            {/* Coordinators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-orbitron font-bold text-white uppercase tracking-wide mb-4">
                Event Coordinators
              </h3>
              <div className="space-y-3">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-space font-semibold">{coordinator.name}</div>
                      <a
                        href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                        className="text-sm text-neon-cyan hover:text-neon-violet font-space flex items-center gap-2 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
