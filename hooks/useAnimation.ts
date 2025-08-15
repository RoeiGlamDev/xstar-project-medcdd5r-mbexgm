import { useEffect, useRef } from 'react';

/
 * Interface defining animation options for luxury LRP cosmetics.
 */
interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
}

/
 * Custom hook for applying animations to elements in luxury LRP cosmetics.
 * This hook allows for 3D animations and transitions that enhance the luxury feel of the brand.
 * 
 * @param {AnimationOptions} options - Options for customizing the animation.
 * @returns {React.RefObject<HTMLDivElement>} - Ref to attach to the element that needs animation.
 */
export const useAnimation = (options: AnimationOptions = {}): React.RefObject<HTMLDivElement> => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set default animation options
    const { duration = 0.5, delay = 0, easing = 'ease-in-out' } = options;

    // Apply initial styles to create a luxurious feel
    element.style.transition = transform ${duration}s ${easing}, opacity ${duration}s ${easing};
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';

    // Trigger animation on mount
    const timeoutId = setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay * 1000);

    // Clean up timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [options]);

  return elementRef;
};

/
 * Usage example:
 * 
 * import { useAnimation } from './hooks/useAnimation';
 * 
 * const ProductCard = () => {
 *   const ref = useAnimation({ duration: 1, delay: 0.5 });
 * 
 *   return (
 *     <div ref={ref} style={{ backgroundColor: 'white', color: 'orange', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
 *       <h2>Luxury LRP Cosmetics</h2>
 *       <p>Experience the elegance of high-end cosmetics.</p>
 *     </div>
 *   );
 * };
 */