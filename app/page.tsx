import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-orange-500 flex items-center justify-center">
      <motion.div
        className="text-white text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-orange-500 text-4xl font-bold text-center mb-10">Our Luxurious Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'High-End Skincare', description: 'Experience the epitome of skincare with our premium products.' },
            { title: 'Exquisite Makeup', description: 'Enhance your beauty with our luxurious makeup collections.' },
            { title: 'Signature Fragrances', description: 'Indulge in our captivating scents that embody elegance.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
            >
              <h3 className="text-orange-500 text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmetics;