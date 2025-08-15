import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Williams',
    review: 'Using luxury LRP cosmetics has transformed my makeup routine. The quality is unmatched, and I feel glamorous every time I apply it!',
    rating: 5,
    photo: '/images/sophia.jpg',
  },
  {
    name: 'Olivia Johnson',
    review: 'I love the luxurious feel and vibrant colors of luxury LRP cosmetics. My skin looks radiant, and I get compliments all the time!',
    rating: 5,
    photo: '/images/olivia.jpg',
  },
  {
    name: 'Emma Brown',
    review: 'The packaging is stunning, and the products deliver incredible results. luxury LRP cosmetics truly embodies elegance and quality.',
    rating: 5,
    photo: '/images/emma.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <p className="text-lg text-gray-700 mb-12">Experience the luxury of our cosmetics through the words of our cherished customers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.882L0 6.618l6.954-1.01L10 0l2.046 5.608L19 6.618l-5.243 4.59 1.121 6.882z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;