import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      onSubmit(email);
      setEmail('');
    }, 2000);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the luxury LRP cosmetics Family
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8">
          Sign up for our newsletter to receive exclusive updates, special offers, and beauty tips tailored for you.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="border-2 border-orange-500 rounded-lg p-3 mr-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
          />
          <motion.div
            type="submit"
            disabled={isSubmitting}
            className={bg-orange-500 text-white font-semibold rounded-lg py-3 px-6 transition duration-300 hover:bg-orange-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </motion.button>
        </form>
        {success && (
          <motion.div
            className="mt-4 text-green-500"
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury LRP cosmetics!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;