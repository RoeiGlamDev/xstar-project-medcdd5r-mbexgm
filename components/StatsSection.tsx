import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: number;
  satisfiedClients: number;
  productsLaunched: number;
  awardsWon: number;
}

const StatsSection: React.FC<StatsProps> = ({
  achievements,
  satisfiedClients,
  productsLaunched,
  awardsWon,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          luxury LRP cosmetics Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="p-6 bg-orange-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">
              {achievements.toLocaleString()}
            </h3>
            <p className="text-gray-700">Achievements</p>
          </motion.div>

          <motion.div
            className="p-6 bg-orange-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">
              {satisfiedClients.toLocaleString()}
            </h3>
            <p className="text-gray-700">Satisfied Clients</p>
          </motion.div>

          <motion.div
            className="p-6 bg-orange-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">
              {productsLaunched.toLocaleString()}
            </h3>
            <p className="text-gray-700">Products Launched</p>
          </motion.div>

          <motion.div
            className="p-6 bg-orange-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">
              {awardsWon.toLocaleString()}
            </h3>
            <p className="text-gray-700">Awards Won</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;