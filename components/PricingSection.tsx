import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essentials',
    price: '$50',
    features: [
      'Basic Skincare Consultation',
      'Personalized Product Recommendations',
      'Sample Products Included',
    ],
  },
  {
    name: 'Deluxe',
    price: '$100',
    features: [
      'Comprehensive Skincare Analysis',
      'Luxury Product Trial Kits',
      'Follow-up Consultation',
    ],
  },
  {
    name: 'Premium',
    price: '$200',
    features: [
      'Full Skincare Regimen Development',
      'Exclusive Access to New Products',
      'One-on-One Luxury Experience',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <div className="flex justify-center space-x-5">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-orange-100 rounded-lg shadow-lg p-5 w-64 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-orange-600">{tier.name}</h3>
              <p className="text-2xl font-bold text-gray-900">{tier.price}</p>
              <ul className="list-disc list-inside text-left text-gray-700 mt-3">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="mt-5 bg-orange-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Choose This Tier
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;