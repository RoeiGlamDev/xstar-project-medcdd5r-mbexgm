import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality Ingredients',
    description: 'At luxury LRP cosmetics, we source only the finest ingredients for our products, ensuring a luxurious experience with every application.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our products come in elegantly designed packaging, reflecting the luxury and sophistication of luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Personalized Consultations',
    description: 'Experience bespoke beauty consultations tailored to your unique needs, guided by our expert beauty advisors.',
    icon: <i className="fas fa-user-md text-orange-500"></i>,
  },
  {
    title: 'Innovative Formulations',
    description: 'Our cutting-edge formulations are designed to enhance your natural beauty while providing long-lasting results.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Discover Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;