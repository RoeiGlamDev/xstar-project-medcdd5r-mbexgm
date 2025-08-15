import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for luxury LRP cosmetics.
 * This hook uses three.js to render high-end interactive 3D elements
 * that reflect the luxury and elegance of the luxury LRP cosmetics brand.
 * 
 * @returns {Object} - An object containing the ref for the 3D container and a method to initialize the scene.
 */
export const use3D = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  /
   * Initializes the 3D scene with luxury LRP cosmetics branding.
   */
  const initScene = () => {
    if (!containerRef.current) return;

    // Set up the scene
    scene = new THREE.Scene();
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Create a luxury LRP cosmetics-themed object (e.g., a cosmetic bottle)
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffA500 }); // Orange
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // Add lighting to enhance the luxury effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight);
    scene.add(pointLight);

    // Start the animation loop
    animate();
  };

  /
   * Animation loop to render the 3D scene.
   */
  const animate = () => {
    requestAnimationFrame(animate);
    if (scene) {
      // Apply rotation for a luxurious effect
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y += 0.01; // Rotate for interaction
        }
      });
      renderer.render(scene, camera);
    }
  };

  useEffect(() => {
    initScene();

    // Cleanup on unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear the container
      }
    };
  }, []);

  return { containerRef };
};