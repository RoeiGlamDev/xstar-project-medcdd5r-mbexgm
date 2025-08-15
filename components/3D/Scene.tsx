import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(10, 10, 10);
      scene.add(light);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute top-10 left-10 z-10">
        <motion.div
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="mt-4 text-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the elegance of luxury LRP cosmetics. Indulge in our exquisite range of high-end beauty products designed for the discerning individual.
        </motion.p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <Canvas>
        <OrbitControls />
        <Scene title="luxury LRP cosmetics" />
      </Canvas>
    </div>
  );
};

export default App;