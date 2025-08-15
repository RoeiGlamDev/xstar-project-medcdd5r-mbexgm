const BRAND_NAME = "luxury LRP cosmetics";
const PRIMARY_COLOR = "#FFA500"; // orange
const SECONDARY_COLOR = "#FFFFFF"; // white

/
 * Defines constants and configuration for the luxury LRP cosmetics application.
 * This file includes brand-specific information and styling constants
 * to ensure a cohesive and luxurious user experience.
 */

export const constants = {
    brand: {
        name: BRAND_NAME,
        slogan: "Elevate Your Beauty with Luxury.",
        primaryColor: PRIMARY_COLOR,
        secondaryColor: SECONDARY_COLOR,
    },
    layout: {
        headerHeight: '80px',
        footerHeight: '60px',
        maxWidth: '1200px',
        padding: '20px',
    },
    typography: {
        fontFamily: "'Playfair Display', serif",
        fontSizes: {
            heading: '2.5rem',
            subheading: '1.5rem',
            body: '1rem',
        },
    },
    effects: {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        hoverEffect: 'transform: scale(1.05); transition: transform 0.3s ease;',
    },
};

/
 * Interface for Product to define the structure of luxury LRP cosmetics products.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Example product data for luxury LRP cosmetics.
 * This data can be used to showcase the luxurious offerings of the brand.
 */
export const exampleProducts: Product[] = [
    {
        id: '1',
        name: 'Silk Touch Foundation',
        description: 'A luxurious foundation that glides on smoothly, providing a flawless finish.',
        price: 49.99,
        imageUrl: '/images/silk-touch-foundation.jpg',
        category: 'Face',
    },
    {
        id: '2',
        name: 'Golden Glow Highlighter',
        description: 'Illuminate your skin with our stunning highlighter for a radiant glow.',
        price: 29.99,
        imageUrl: '/images/golden-glow-highlighter.jpg',
        category: 'Face',
    },
    {
        id: '3',
        name: 'Velvet Matte Lipstick',
        description: 'Experience the richness of our velvet matte lipstick, designed for all-day wear.',
        price: 24.99,
        imageUrl: '/images/velvet-matte-lipstick.jpg',
        category: 'Lips',
    },
];