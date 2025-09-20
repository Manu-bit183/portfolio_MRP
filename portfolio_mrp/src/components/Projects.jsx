// src/components/Projects.js
// src/components/Projects.js
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Project3D from './Project3D';

const Projects = () => {
  const [projects] = useState([
    {
      title: "E-commerce Platform",
      description: "Volledige e-commerce oplossing met React en Symfony",
      image: "https://via.placeholder.com/400x250",
      tech: ["React", "Symfony", "PostgreSQL"],
      githubUrl: "https://github.com/manupal/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Collaboratieve task manager met real-time updates",
      image: "https://via.placeholder.com/400x250",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/manupal/taskmanager"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualisatie dashboard met Python en Java",
      image: "https://via.placeholder.com/400x250",
      tech: ["Python", "Java", "D3.js"],
      githubUrl: "https://github.com/manupal/analytics"
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-100">
                <Project3D />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <FaGithub className="mr-1" /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;