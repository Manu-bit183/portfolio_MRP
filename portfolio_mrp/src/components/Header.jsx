// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">MP</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-indigo-600">MR Pal</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/larksin22-afk/Portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              title="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/mr-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              title="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-left text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/larksin22-afk/Portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  title="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/mr-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;