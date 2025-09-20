// src/components/Hero3D.js
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';

// Animatie component voor de tekst
const AnimatedText = ({ ...props }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      textRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      {...props}
      fontSize={1.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter-bold.woff"
      maxWidth={10}
      lineHeight={1.2}
      textAlign="center"
      outlineWidth={0.02}
      outlineColor="#4f46e5"
      outlineOpacity={1}
    >
      FULL-STACK
    </Text>
  );
};

// Grid achtergrond component
const GridBackground = () => {
  return (
    <group>
      {/* Horizontale lijnen */}
      {Array.from({ length: 20 }, (_, i) => (
        <Box
          key={`h-${i}`}
          args={[20, 0.05, 0.05]}
          position={[0, i - 10, -5]}
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial color="#4f46e5" opacity={0.2} transparent />
        </Box>
      ))}
      
      {/* Verticale lijnen */}
      {Array.from({ length: 20 }, (_, i) => (
        <Box
          key={`v-${i}`}
          args={[0.05, 20, 0.05]}
          position={[i - 10, 0, -5]}
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial color="#4f46e5" opacity={0.2} transparent />
        </Box>
      ))}
    </group>
  );
};

// Drijvende objecten
const FloatingObjects = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <Sphere
          key={i}
          args={[0.3, 32, 32]}
          position={[
            Math.sin(i) * 8,
            Math.cos(i * 0.5) * 3,
            -3 + Math.sin(i * 0.3) * 2
          ]}
        >
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#60a5fa" : "#a78bfa"} 
            transparent 
            opacity={0.6}
          />
        </Sphere>
      ))}
    </>
  );
};

// 3D Scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1}
        intensity={1}
        color="#ffffff"
      />
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={0.5}
        color="#8b5cf6"
      />
      <pointLight 
        position={[0, 10, 0]} 
        intensity={0.8}
        color="#60a5fa"
      />
      
      <GridBackground />
      <FloatingObjects />
      
      <AnimatedText position={[0, 2, 0]} />
      <AnimatedText position={[0, 0, 0]} fontSize={2} color="#fbbf24">
        DEVELOPER
      </AnimatedText>
      <AnimatedText position={[0, -2, 0]} fontSize={1.2} color="#34d399">
        Manu Pal
      </AnimatedText>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Hoofd Hero3D component
const Hero3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Overlay voor betere tekstleesbaarheid */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero3D;