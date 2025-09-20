// src/components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero3D from './Hero3D';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
      <Hero3D />
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Hi, I'm MR Pal
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-md">
            Full-Stack Developer
          </p>
          <p className="text-lg mb-8 text-gray-200 drop-shadow-sm">
            Crafting end-to-end web solutions with modern technologies
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/larksin22-afk/Portfolio.git" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition shadow-lg"
            >
              <FaGithub className="mr-2 inline" /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/mr-pal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              <FaLinkedin className="mr-2 inline" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Gebruik een eenvoudige afbeelding in plaats van SketchGenerator */}
            <img 
              src="https://picsum.photos/seed/mrpal/400/400" 
              alt="MR Pal" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white/30 shadow-xl backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none"></div>
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              20
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;