import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    bio: 'With over a decade in the cosmetics industry, Sophia brings her passion for beauty and excellence to luxury LRP cosmetics.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Lee',
    role: 'Head of Product Development',
    bio: 'An expert in formulation science, James ensures that every product meets our luxury standards while being effective and safe.',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    bio: 'Olivia’s innovative approach to marketing has helped establish luxury LRP cosmetics as a leader in the luxury cosmetics industry.',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg text-center mb-6">
          At luxury LRP cosmetics, we believe that beauty is an art. Our journey began with a vision to create high-end cosmetics that not only enhance natural beauty but also celebrate individuality. With meticulously sourced ingredients and luxurious formulations, our products embody elegance and sophistication.
        </p>
        <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
        <p className="text-lg text-center mb-6">
          Our mission at luxury LRP cosmetics is to empower individuals by providing them with luxurious, high-performance cosmetics that inspire confidence and self-expression. We are committed to sustainability, innovation, and excellence in every aspect of our business.
        </p>

        <h3 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mt-8 mb-4">Our Values & Achievements</h3>
        <p className="text-lg text-center mb-6">
          At luxury LRP cosmetics, we value quality, innovation, and community. Our commitment to excellence has earned us numerous awards in the cosmetics industry, and we continuously strive to set new standards in luxury beauty.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;