import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export const EnergyCore = ({ position = [0, 0, 0], scale = 1, hovered = false }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Icosahedron ref={meshRef} args={[1, 0]}>
        <meshStandardMaterial
          color="#00f2ff"
          emissive="#00f2ff"
          emissiveIntensity={hovered ? 0.8 : 0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Icosahedron>
      <Icosahedron args={[1.2, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
          wireframe
        />
      </Icosahedron>
      <pointLight position={[0, 0, 0]} intensity={hovered ? 2 : 1.5} color="#00f2ff" />
      <pointLight position={[0, 0, 0]} intensity={hovered ? 1.5 : 1} color="#8b5cf6" />
    </group>
  );
};
