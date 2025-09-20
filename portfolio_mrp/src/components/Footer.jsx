// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 MR Pal. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a 
            href="https://github.com/larksin22-afk/Portfolio.git" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-300 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://linkedin.com/in/mr-pal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-300 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://twitter.com/mr_pal_dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-300 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;