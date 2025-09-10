import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles component
const Particles = ({ count = 5000 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64FFDA"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

// Animated geometries
const AnimatedGeometry = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.5;
      sphereRef.current.rotation.y = time * 0.3;
      sphereRef.current.position.y = Math.sin(time * 2) * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.z = time * 0.4;
      boxRef.current.position.x = Math.cos(time * 1.5) * 1.5;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4;
      torusRef.current.rotation.y = time * 0.6;
      torusRef.current.position.x = Math.sin(time * 1.2) * 1.5;
    }
  });

  return (
    <>
      {/* Central spinning sphere */}
      <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#64FFDA"
          emissive="#64FFDA"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Orbiting box */}
      <Box ref={boxRef} args={[0.3, 0.3, 0.3]} position={[1.5, 0, 0]}>
        <meshStandardMaterial
          color="#FF6B9D"
          emissive="#FF6B9D"
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </Box>
      
      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[0.3, 0.1, 16, 32]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial
          color="#FFE66D"
          emissive="#FFE66D"
          emissiveIntensity={0.1}
          transparent
          opacity={0.7}
        />
      </Torus>
    </>
  );
};

// Loading rings component
const LoadingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 1.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 1;
    }
  });

  return (
    <>
      <Torus ref={ring1Ref} args={[2, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#64FFDA"
          emissive="#64FFDA"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[2.5, 0.03, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FF6B9D"
          emissive="#FF6B9D"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </Torus>
      <Torus ref={ring3Ref} args={[3, 0.02, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FFE66D"
          emissive="#FFE66D"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </Torus>
    </>
  );
};

// Main 3D Scene
const Scene3D = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      
      {/* Point lights for dramatic effect */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#64FFDA" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B9D" />
      
      {/* Animated components */}
      <Particles />
      <AnimatedGeometry />
      <LoadingRings />
    </>
  );
};

// Main 3D Loader Component
interface ThreeDLoaderProps {
  className?: string;
  showText?: boolean;
  text?: string;
}

export const ThreeDLoader: React.FC<ThreeDLoaderProps> = ({ 
  className = "", 
  showText = true,
  text = "Loading..."
}) => {
  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        className="absolute inset-0"
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
      
      {/* Loading text overlay */}
      {showText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white animate-pulse">
              {text}
            </h2>
            <div className="flex space-x-1 justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-mint rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-charcoal/20 pointer-events-none" />
    </div>
  );
};

// Compact version for smaller loading areas
export const Compact3DLoader: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-24 h-24 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#64FFDA" />
        
        <Sphere args={[0.8, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#64FFDA"
            emissive="#64FFDA"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
        
        <Torus args={[1.2, 0.1, 8, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#FF6B9D"
            emissive="#FF6B9D"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Torus>
      </Canvas>
    </div>
  );
};

export default ThreeDLoader;