// src/components/Project3D.js
// src/components/Project3D.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

const Project3D = () => {
  return (
    <div className="w-full h-64">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          
          <Box args={[1.5, 1.5, 1.5]}>
            <meshStandardMaterial color="#4f46e5" wireframe />
          </Box>
          
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Project3D;