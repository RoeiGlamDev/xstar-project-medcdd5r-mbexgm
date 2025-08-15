import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
    title = "Elevate Your Beauty", 
    subtitle = "Experience the Luxury of LRP Cosmetics", 
    buttonText = "Shop Now", 
    buttonLink = "/shop" 
}) => {
    return (
        <section className="flex flex-col items-center justify-center bg-white py-20">
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-orange-600 mb-4">
                    {title}
                </h2>
                <p className="text-lg text-gray-700">
                    {subtitle}
                </p>
            </motion.div>
            <motion.div
                href={buttonLink}
                className="mt-5 inline-block px-8 py-3 text-white bg-orange-600 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {buttonText}
            </motion.a>
        </section>
    );
};

export default CTASection;