import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          className="text-orange-500 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="luxury LRP cosmetics Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-10">
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ translateY: -3 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ translateY: -3 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#services"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ translateY: -3 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ translateY: -3 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            className="text-orange-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <motion.div
              href="#about"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ translateY: -3 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#products"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ translateY: -3 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#services"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ translateY: -3 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#contact"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ translateY: -3 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;