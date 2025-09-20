// src/components/About.js
import React from 'react';

const About = () => {
  const personalInfo = {
    birthday: "21 november 2004",
    education: "HBO-ICT student",
    school: "Haagse Hogeschool",
    status: "Full-stack developer in opleiding",
    networking: "Actief bezig met netwerken en infrastructuur"
  };

  const skills = [
    "Full-stack development",
    "Netwerkbeheer",
    "Cloud computing",
    "API ontwikkeling",
    "Database management",
    "DevOps"
  ];

  const interests = [
    "Netwerkarchitectuur",
    "Cybersecurity",
    "Cloud platformen",
    "Microservices",
    "Containerisatie",
    "Automatisering"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Over Mij</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-indigo-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Persoonlijke Informatie</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-calendar text-indigo-600 w-6"></i>
                  <span className="ml-3 text-gray-700"><strong>Geboortedatum:</strong> {personalInfo.birthday}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-indigo-600 w-6"></i>
                  <span className="ml-3 text-gray-700"><strong>Opleiding:</strong> {personalInfo.education}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-university text-indigo-600 w-6"></i>
                  <span className="ml-3 text-gray-700"><strong>School:</strong> {personalInfo.school}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-briefcase text-indigo-600 w-6"></i>
                  <span className="ml-3 text-gray-700"><strong>Status:</strong> {personalInfo.status}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-network-wired text-indigo-600 w-6"></i>
                  <span className="ml-3 text-gray-700"><strong>Netwerk:</strong> {personalInfo.networking}</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Mijn Passie</h3>
              <p className="text-gray-700 mb-4">
                Als jonge en gepassioneerende ontwikkelaar combineer ik mijn technische vaardigheden met een sterke interesse in netwerktechnologieën. 
                Ik geloof dat de toekomst van IT in de integratie van software en infrastructuur ligt.
              </p>
              <p className="text-gray-700">
                Mijn doel is om bruggen te bouwen tussen development en operations, en om robuuste, schaalbare systemen te creëren die niet alleen 
                functioneel zijn, maar ook veilig en efficiënt.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div>
            <div className="bg-green-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Technische Vaardigheden</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <span className="text-green-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Interesses & Ambities</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                    <i className="fas fa-chevron-right text-blue-600 mr-3"></i>
                    <span className="text-blue-700">{interest}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-800 mb-2">Toekomstige Doelen</h4>
                <p className="text-gray-700 text-sm">
                  Ik streef ernaar om een expert te worden in cloud-native architecturen en netwerkautomatisering. 
                  Mijn droom is om bij te dragen aan innovatieve IT-oplossingen die bedrijven helpen om digitaal te transformeren.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
            "Technologie is niet alleen wat we bouwen, maar ook hoe we het bouwen en voor wie we het bouwen."
          </blockquote>
          <cite className="block mt-4 text-gray-500">- Mijn persoonlijke motto</cite>
        </div>
      </div>
    </section>
  );
};

export default About;