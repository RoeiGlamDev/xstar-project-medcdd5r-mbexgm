import { useState } from 'react';
import React, { useState } from "react";
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    reason: "General Inquiry",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.reason) newErrors.reason = "Reason for contact is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to backend or API
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="bg-white p-10 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <motion.div
        className="text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We’d love to hear from you! Please fill out the form below for any inquiries regarding our luxury cosmetics.
      </motion.p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            className={border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Wholesale Inquiry">Wholesale Inquiry</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white rounded px-4 py-2 hover:bg-orange-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <motion.div
        className="mt-10 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-bold text-lg">Business Information</h3>
        <p>luxury LRP cosmetics</p>
        <p>123 Luxe Ave, Beauty City, BC 45678</p>
        <p>Hours: Mon-Fri 9am - 6pm</p>
        <p>Email: contact@luxurylrpcosmetics.com</p>
      </motion.div>
    </section>
  );
};

export default ContactSection;