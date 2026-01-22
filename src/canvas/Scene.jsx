import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EnergyCore } from './EnergyCore';
import { useState } from 'react';

export const Scene = ({ showControls = false, corePosition = [0, 0, 0], coreScale = 1 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      onCreated={(state) => {
        state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <EnergyCore position={corePosition} scale={coreScale} hovered={hovered} />
      {showControls && <OrbitControls enableZoom={false} enablePan={false} />}
    </Canvas>
  );
};
