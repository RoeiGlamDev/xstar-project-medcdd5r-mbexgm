import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ opacity: 1, scale: 1 });
  }, [animationControls]);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FloatingSphere />
        </Suspense>
      </Canvas>
      <motion.div
        className="absolute text-5xl text-orange-600 font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationControls}
        transition={{ duration: 0.5 }}
      >
        Welcome to Luxury LRP Cosmetics
      </motion.h1>
      <motion.div
        className="absolute text-xl text-orange-600 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={animationControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Indulge in our exquisite range of luxury cosmetics designed for the sophisticated you.
      </motion.p>
    </div>
  );
};

const FloatingSphere: React.FC = () => {
  const sphereRef = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default FloatingElements;