
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useMemo } from 'react';

function Stars() {
  const particles = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    random.inSphere(arr, { radius: 1.5 });
    return arr;
  }, []);

  useFrame((state, delta) => {
    particles.current.rotation.x += delta * 0.05;
    particles.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={particles} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
