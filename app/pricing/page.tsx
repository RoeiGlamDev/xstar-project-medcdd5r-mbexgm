import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Glow Package',
    price: '$99',
    description: 'Elevate your beauty routine with our Luxury Glow Package, featuring premium skincare and makeup.',
    features: ['Premium skincare products', 'Professional makeup application', 'Personalized consultation'],
  },
  {
    title: 'Ultimate Radiance Experience',
    price: '$149',
    description: 'Indulge in the Ultimate Radiance Experience for a complete transformation.',
    features: ['Full skincare regimen', 'Luxury makeup application', 'Exclusive gift set'],
  },
  {
    title: 'Signature Beauty Package',
    price: '$199',
    description: 'Our Signature Beauty Package offers the ultimate luxury experience for your special occasions.',
    features: ['Custom skincare analysis', 'Event-ready makeup', 'Follow-up consultation'],
  },
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use only the highest quality, luxury brands in the cosmetics industry, ensuring the best for your skin.',
  },
  {
    question: 'How do I book a service?',
    answer: 'You can easily book a service through our website or contact our customer service for assistance.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require a 24-hour notice for any cancellations or rescheduling of appointments.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <motion.header
        className="text-center p-10 bg-orange-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white">Luxury LRP Cosmetics Pricing</h1>
        <p className="mt-4 text-lg text-white">Discover our luxurious beauty packages designed just for you.</p>
      </motion.header>

      <div className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-2xl font-semibold text-orange-500 mb-5">Our Pricing Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-orange-600">{option.title}</h3>
              <p className="text-2xl font-bold text-orange-600">{option.price}</p>
              <p className="mt-2">{option.description}</p>
              <ul className="mt-3 list-disc list-inside">
                {option.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-orange-500 mt-10 mb-5">Frequently Asked Questions</h2>
        <div className="bg-orange-100 p-5 rounded-lg">
          {FAQ.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-orange-600">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;