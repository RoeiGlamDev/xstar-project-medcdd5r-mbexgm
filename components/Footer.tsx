import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialMediaLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

const Footer: React.FC<FooterProps> = ({ companyInfo, socialMediaLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">luxury LRP cosmetics</h2>
          <p className="mt-2 text-lg">Elevating Your Beauty Experience</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
          </div>
          
          <div className="flex space-x-4">
            <motion.div
              href={socialMediaLinks.facebook}
              className="text-orange-600 hover:text-orange-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Facebook
            </motion.a>
            <motion.div
              href={socialMediaLinks.instagram}
              className="text-orange-600 hover:text-orange-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Instagram
            </motion.a>
            <motion.div
              href={socialMediaLinks.twitter}
              className="text-orange-600 hover:text-orange-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Twitter
            </motion.a>
          </div>
        </div>

        <div className="mt-6 border-t border-orange-200 pt-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;