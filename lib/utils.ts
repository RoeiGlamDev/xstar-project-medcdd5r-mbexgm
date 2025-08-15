import { formatCurrency } from './helpers';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Formats the product price to a luxury presentation style
 * @param {number} price - The price of the product
 * @returns {string} - Formatted price string
 */
export function formatPrice(price: number): string {
    return formatCurrency(price, 'USD', { style: 'currency', currencyDisplay: 'symbol' });
}

/
 * Returns a luxury-themed class name for an element
 * @param {string} baseClass - The base class name to customize
 * @param {boolean} isActive - If the element is active, apply luxury effect
 * @returns {string} - Luxury themed class name
 */
export function cn(baseClass: string, isActive: boolean): string {
    return ${baseClass} luxury ${isActive ? 'active' : 'inactive'} transition-3d;
}

/
 * Get a product by ID from the product catalog (mock function)
 * @param {number} id - The ID of the product
 * @returns {Product | null} - The product object or null if not found
 */
export function getProductById(id: number): Product | null {
    const productCatalog: Product[] = [
        {
            id: 1,
            name: 'Luxury Hydrating Serum',
            description: 'A premium hydrating serum infused with vitamins and antioxidants.',
            price: 120.00,
            category: 'Serums',
            imageUrl: '/images/luxury-hydrating-serum.jpg'
        },
        {
            id: 2,
            name: 'Elegance Foundation',
            description: 'Silky smooth foundation that provides a flawless finish.',
            price: 80.00,
            category: 'Foundations',
            imageUrl: '/images/elegance-foundation.jpg'
        }
    ];

    return productCatalog.find(product => product.id === id) || null;
}

/
 * Retrieves all products in a specific category
 * @param {string} category - The category of products to retrieve
 * @returns {Product[]} - An array of products in the specified category
 */
export function getProductsByCategory(category: string): Product[] {
    const productCatalog: Product[] = [
        {
            id: 1,
            name: 'Luxury Hydrating Serum',
            description: 'A premium hydrating serum infused with vitamins and antioxidants.',
            price: 120.00,
            category: 'Serums',
            imageUrl: '/images/luxury-hydrating-serum.jpg'
        },
        {
            id: 2,
            name: 'Elegance Foundation',
            description: 'Silky smooth foundation that provides a flawless finish.',
            price: 80.00,
            category: 'Foundations',
            imageUrl: '/images/elegance-foundation.jpg'
        }
    ];

    return productCatalog.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

/
 * @type {Product[]}
 * Predefined list of all products for luxury LRP cosmetics
 */
export const allProducts: Product[] = [
    {
        id: 1,
        name: 'Luxury Hydrating Serum',
        description: 'A premium hydrating serum infused with vitamins and antioxidants.',
        price: 120.00,
        category: 'Serums',
        imageUrl: '/images/luxury-hydrating-serum.jpg'
    },
    {
        id: 2,
        name: 'Elegance Foundation',
        description: 'Silky smooth foundation that provides a flawless finish.',
        price: 80.00,
        category: 'Foundations',
        imageUrl: '/images/elegance-foundation.jpg'
    }
];