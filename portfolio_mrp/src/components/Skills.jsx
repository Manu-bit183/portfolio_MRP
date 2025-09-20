// src/components/Skills.js
import React from 'react';
import Skills3D from './Skills3D';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
    { name: "React", icon: "fab fa-react", color: "text-cyan-500" }
  ];

  const backendSkills = [
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-600" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600", level: 82 },
    { name: "Java", icon: "fab fa-java", color: "text-red-500" },
    { name: "Python", icon: "fab fa-python", color: "text-blue-600" }
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-700" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-400" }
  ];

  return (
    <section id="skills" className="relative py-20 bg-white">
      <Skills3D />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-indigo-600">Frontend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="text-center bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
                <i className={`${skill.icon} text-5xl ${skill.color} mb-3`}></i>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-purple-600">Backend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <div key={index} className="text-center bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
                <i className={`${skill.icon} text-5xl ${skill.color} mb-3`}></i>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center text-green-600">Databases & DevOps</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {databaseSkills.map((skill, index) => (
              <div key={index} className="text-center bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
                <i className={`${skill.icon} text-5xl ${skill.color} mb-3`}></i>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;