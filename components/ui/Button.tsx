import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-transform duration-300 focus:outline-none';
  const primaryClasses = 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105';
  const secondaryClasses = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105';

  const buttonClasses = variant === 'primary' ? ${baseClasses} ${primaryClasses} : ${baseClasses} ${secondaryClasses};

  return (
    <motion.div
      className="buttonClasses"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for luxury LRP cosmetics - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;