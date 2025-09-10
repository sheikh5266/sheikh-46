import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Mobile detection utility
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Error boundary for WebGL context issues
const WebGLErrorBoundary: React.FC<{ children: React.ReactNode; fallback: React.ReactNode }> = ({ 
  children, 
  fallback 
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleWebGLContextLost = () => {
      console.warn('WebGL context lost, falling back to 2D animation');
      setHasError(true);
    };

    window.addEventListener('webglcontextlost', handleWebGLContextLost);
    return () => window.removeEventListener('webglcontextlost', handleWebGLContextLost);
  }, []);

  if (hasError) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

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

// Enhanced 2D fallback loader for mobile devices
const Enhanced2DLoader: React.FC<{ className?: string; showText?: boolean; text?: string }> = ({ 
  className = "", 
  showText = true,
  text = "Loading..."
}) => {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center ${className}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        <div className="absolute inset-0 bg-gradient-to-r from-mint/5 via-transparent to-accent/5 animate-pulse"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div 
              className={`bg-gradient-to-br from-mint/20 to-accent/20 rounded-full blur-sm`}
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Central loader */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Enhanced spinning loader */}
        <div className="relative">
          <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
            {/* Outer ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="60 40"
              className="animate-spin"
              filter="url(#glow)"
            />
            {/* Middle ring */}
            <circle
              cx="50"
              cy="50"
              r="28"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="40 30"
              className="animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
              filter="url(#glow)"
            />
            {/* Inner ring */}
            <circle
              cx="50"
              cy="50"
              r="16"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 15"
              className="animate-spin"
              style={{ animationDuration: '2s' }}
            />
            {/* Center pulse */}
            <circle
              cx="50"
              cy="50"
              r="6"
              fill="url(#radialGradient)"
              className="animate-pulse"
            />
            
            {/* Enhanced Gradients and Effects */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64FFDA" />
                <stop offset="50%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#FFE66D" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#64FFDA" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE66D" />
                <stop offset="100%" stopColor="#FF6B9D" />
              </linearGradient>
              <radialGradient id="radialGradient">
                <stop offset="0%" stopColor="#64FFDA" stopOpacity="1" />
                <stop offset="100%" stopColor="#64FFDA" stopOpacity="0.3" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
          
          {/* Orbiting particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-mint rounded-full animate-ping"
                style={{
                  left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 35}%`,
                  top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 35}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Loading text */}
        {showText && (
          <div className="text-center space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white animate-pulse">
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
        )}
      </div>
    </div>
  );
};

// Main 3D Loader Component with mobile optimization
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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(isMobileDevice());
    
    // Listen for resize events to update mobile state
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use 2D fallback for mobile devices or small screens
  if (isMobile) {
    return <Enhanced2DLoader className={className} showText={showText} text={text} />;
  }

  return (
    <WebGLErrorBoundary 
      fallback={<Enhanced2DLoader className={className} showText={showText} text={text} />}
    >
      <div className={`relative w-full h-full min-h-[400px] ${className}`}>
        {/* 3D Canvas with error handling */}
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          className="absolute inset-0"
          gl={{ 
            antialias: true, 
            alpha: true,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            // Add context lost listener
            gl.domElement.addEventListener('webglcontextlost', (event) => {
              event.preventDefault();
              console.warn('WebGL context lost');
            });
            
            gl.domElement.addEventListener('webglcontextrestored', () => {
              console.log('WebGL context restored');
            });
          }}
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
    </WebGLErrorBoundary>
  );
};

// Compact version for smaller loading areas with mobile optimization
export const Compact3DLoader: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  if (isMobile) {
    return (
      <div className={`w-24 h-24 flex items-center justify-center ${className}`}>
        <div className="relative">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="url(#compactGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="50 30"
              className="animate-spin"
            />
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="#64FFDA"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="compactGradient">
                <stop offset="0%" stopColor="#64FFDA" />
                <stop offset="100%" stopColor="#FF6B9D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <WebGLErrorBoundary 
      fallback={
        <div className={`w-24 h-24 flex items-center justify-center ${className}`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mint"></div>
        </div>
      }
    >
      <div className={`w-24 h-24 ${className}`}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
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
    </WebGLErrorBoundary>
  );
};

export default ThreeDLoader;