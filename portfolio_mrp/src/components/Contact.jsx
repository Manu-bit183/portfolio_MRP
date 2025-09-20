// src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
          </form>
          <div className="mt-8 text-center">
            <p className="mb-4">Or reach me directly:</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:larksin22@gmail.com" className="text-gray-600 hover:text-indigo-600">
                <FaEnvelope className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com/in/mr-pal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://github.com/larksin22-afk/Portfolio.git" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;