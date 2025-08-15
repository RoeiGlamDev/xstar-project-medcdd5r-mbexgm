import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <h2 className="text-orange-600 text-2xl font-bold mb-2">{title}</h2>
            <p className="text-white text-lg">{description}</p>
        </motion.div>
    );
};

export default Card;