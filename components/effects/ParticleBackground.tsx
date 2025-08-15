import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Sprite[] = [];
    const particleCount = 200;

    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('path/to/your/particleTexture.png'); // Add the path to your particle texture

    for (let i = 0; i < particleCount; i++) {
      const spriteMaterial = new THREE.SpriteMaterial({ map: particleTexture, color: 0xffa500 }); // Orange color
      const particle = new THREE.Sprite(spriteMaterial);
      particle.scale.set(0.1, 0.1, 1);
      particle.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      particles.push(particle);
      scene.add(particle);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(particle => {
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <motion.div
        className="text-5xl font-bold text-white text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Luxury LRP Cosmetics
      </motion.h1>
      <motion.div
        className="text-xl text-white text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience the elegance and allure of high-end cosmetics.
      </motion.p>
    </div>
  );
};

export default ParticleBackground;