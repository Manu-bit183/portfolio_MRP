// src/components/Skills3D.js
// src/components/Skills3D.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Skills3D = () => {
  const skills = [
    { name: "React", level: 0.9, color: "#61dafb" },
    { name: "Node.js", level: 0.8, color: "#339933" },
    { name: "PHP", level: 0.7, color: "#777bb4" },
    { name: "Python", level: 0.85, color: "#3776ab" },
    { name: "Java", level: 0.75, color: "#ff7f00" },
    { name: "Docker", level: 0.8, color: "#2496ed" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          {skills.map((skill, index) => (
            <Sphere
              key={index}
              args={[skill.level * 0.5, 32, 32]}
              position={[
                (index - skills.length / 2) * 2,
                Math.sin(index) * 0.5,
                0
              ]}
            >
              <meshStandardMaterial color={skill.color} transparent opacity={0.8} />
            </Sphere>
          ))}
          
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Skills3D;