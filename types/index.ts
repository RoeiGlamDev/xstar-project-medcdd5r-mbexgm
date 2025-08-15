import { Product } from './models/Product';
import { User } from './models/User';

/
 * Represents the types and interfaces used in the luxury LRP cosmetics application.
 * This includes product information, user details, and order processing for the cosmetics industry.
 * 
 * @module types/index
 */

/
 * Interface for a cosmetic product in the luxury LRP cosmetics inventory.
 */
export interface LuxuryLRPProduct {
    id: string; // Unique identifier for the product
    name: string; // Name of the cosmetic product
    description: string; // Description of the product highlighting its luxury features
    price: number; // Price of the product in USD
    quantityInStock: number; // Available stock for the product
    category: 'skincare' | 'makeup' | 'fragrance' | 'accessories'; // Category of the cosmetic product
    images: string[]; // Array of image URLs for the product
    isFeatured: boolean; // Indicates if the product is a featured luxury item
}

/
 * Interface for the user profile in the luxury LRP cosmetics application.
 */
export interface LuxuryLRPUser {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address for user communication
    password: string; // Encrypted password for user authentication
    address: string; // Shipping address for product delivery
    preferredPaymentMethod: 'creditCard' | 'paypal' | 'bankTransfer'; // Preferred payment method of the user
}

/
 * Interface for an order placed by a user at luxury LRP cosmetics.
 */
export interface LuxuryLRPOrder {
    orderId: string; // Unique identifier for the order
    userId: string; // ID of the user who placed the order
    products: LuxuryLRPProduct[]; // Array of products included in the order
    totalAmount: number; // Total amount for the order in USD
    orderDate: Date; // Date when the order was placed
    status: 'pending' | 'shipped' | 'delivered' | 'canceled'; // Current status of the order
}

/
 * Function to calculate the total price of products in an order.
 * 
 * @param products - Array of products included in the order
 * @returns Total price of the products
 */
export function calculateOrderTotal(products: LuxuryLRPProduct[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}