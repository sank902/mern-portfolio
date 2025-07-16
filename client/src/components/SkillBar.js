import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SkillOrb = ({ position, color, size = 1 }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.2} 
        metalness={0.8} 
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default SkillOrb;