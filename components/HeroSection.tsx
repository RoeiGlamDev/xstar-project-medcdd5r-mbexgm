import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-orange-500 to-white flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: ''url(/path-to-your-luxury-background-image.jpg)' '}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 p-5">
        <motion.div
          className="text-6xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the elegance of luxury LRP cosmetics, where beauty meets sophistication.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/shop"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-orange-600"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="inline-block bg-white text-orange-500 font-semibold py-3 px-6 ml-4 rounded-lg border border-orange-500 transition duration-300 transform hover:scale-105 hover:bg-orange-100"
          >
            Learn More
          </a>
        </motion.div>
        <div className="mt-10 text-white">
          <p className="text-sm">Trusted by beauty enthusiasts worldwide.</p>
          <p className="text-sm">Indulge in our exclusive, high-end products.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;