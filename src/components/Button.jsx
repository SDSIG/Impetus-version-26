import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  disabled = false 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-orbitron font-bold text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-cyan to-neon-violet text-white shadow-[0_0_20px_rgba(0,242,255,0.5)] hover:shadow-[0_0_30px_rgba(0,242,255,0.8)]',
    outline: 'border-2 border-neon-cyan text-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]',
    ghost: 'text-neon-cyan hover:bg-white/5'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
