import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us at luxury LRP cosmetics
      </motion.h1>
      <p className="text-lg text-gray-600 mb-8">
        We would love to hear from you! Reach out with any inquiries or feedback.
      </p>
      <form onSubmit={handleSubmit} className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-orange-500 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-500 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-orange-500 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-500 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-orange-500 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            className="w-full p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-500 transition duration-200"
            rows={4}
          />
        </div>
        <motion.div
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-gray-600">
        <h2 className="text-2xl font-semibold text-orange-500">Our Location</h2>
        <p className="mt-2">Visit us at:</p>
        <p>123 Luxury Lane, Glamour City, CA 90210</p>
        <h2 className="text-2xl font-semibold text-orange-500 mt-4">Business Hours</h2>
        <p className="mt-2">Monday - Friday: 9 AM - 6 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;