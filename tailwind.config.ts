import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'luxury-orange': '#FF7F50', // Custom orange for luxury LRP cosmetics
        'luxury-white': '#FFFFFF',   // Custom white for luxury LRP cosmetics
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
});

// Types and Interfaces for luxury LRP cosmetics
/
 * Interface representing a cosmetic product.
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the cosmetic product.
 * @property {string} description - Description of the cosmetic product.
 * @property {number} price - Price of the cosmetic product.
 * @property {string} imageUrl - URL of the product image.
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

/
 * Function to get all cosmetic products.
 * @returns {Promise<Product[]>} - Returns a promise that resolves to an array of Product objects.
 */
export const getAllProducts = async (): Promise<Product[]> => {
  // Placeholder for real API call
  return [
    {
      id: '1',
      name: 'Luxury Foundation',
      description: 'A high-end foundation that provides full coverage and a natural finish.',
      price: 49.99,
      imageUrl: 'https://example.com/luxury-foundation.jpg',
    },
    {
      id: '2',
      name: 'Elegant Lipstick',
      description: 'A rich, creamy lipstick that glides on smoothly and lasts all day.',
      price: 29.99,
      imageUrl: 'https://example.com/elegant-lipstick.jpg',
    },
  ];
};