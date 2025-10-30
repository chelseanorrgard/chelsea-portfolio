import React, { useState, useEffect } from 'react';

import whereis1 from '../assets/whereis-1.png';
import whereis2 from '../assets/whereis-2.png';
import whereis3 from '../assets/whereis-3.png';
import whereis4 from '../assets/whereis-4.png';

import risk1 from '../assets/risk-1.png';
import risk2 from '../assets/risk-2.png';
import risk3 from '../assets/risk-3.png';
import risk4 from '../assets/risk-4.png';

import knit1 from '../assets/knit-1.png';
import knit2 from '../assets/knit-2.png';
import knit3 from '../assets/knit-3.png';
import knit4 from '../assets/knit-4.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      name: 'WhereIs – Personal Inventory Mobile App',
      tech: ['React Native', 'Expo', 'JavaScript', 'Google Maps API', 'Firebase'],
      description: `Created an Android app that allows users to track personal belongings by storing item names, photos, notes, GPS coordinates, and locations on an interactive map. The app uses Firebase for real-time data storage and photo hosting, ensuring seamless synchronization across devices. Integrated Google Maps API to provide users with a dynamic and intuitive visual representation of their items' locations. Built with React Native and designed for usability with intuitive forms, offline support considerations, and efficient cloud syncing to maintain data integrity.`,
      link: 'https://github.com/chelseanorrgard/WhereIs',
      screenshots: [whereis1, whereis2, whereis3, whereis4],
    },
    {
      name: 'Risk Simulation Game Enhancement',
      tech: ['JavaScript', 'React', 'XLSX', 'HTML/CSS'],
      description: `Led a team project to modernize and expand a basic risk simulation game by refining gameplay logic, redesigning the user interface to improve accessibility, and enhancing overall code quality. As project manager and core contributor, I coordinated task delegation, implemented Excel export features, introduced modular architecture, and integrated new risk logic that incorporated probabilistic behavior over time. Added support for editable risk entries, dynamic UI updates, clearer scoring explanations, and performance logging improvements while keeping the app lightweight and maintainable.`,
      link: 'https://github.com/elifturhann/RiskSimuApp',
      screenshots: [risk1, risk2, risk3, risk4],
    },
    {
      name: 'CryptoKnit – Textile Steganography Portfolio',
      tech: ['React', 'JavaScript', 'HTML/CSS', 'Cryptography', 'Steganography'],
      description: `Developed an interactive web portfolio for my thesis exploring textile steganography with modern and historical cryptography methods. The project demonstrates how secret messages can be encoded in knitting and crochet patterns, combining traditional craft techniques with contemporary encryption algorithms. Built a responsive single-page application to showcase research findings, implementation examples, and visual demonstrations of cryptographic knitting patterns. The portfolio serves as both a technical demonstration and an educational resource on the intersection of fiber arts and information security.`,
      link: 'https://github.com/chelseanorrgard/crypto-knit',
      screenshots: [knit1, knit2, knit3, knit4],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 px-6 pt-24 pb-16">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Project cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0
                  ? 'opacity-0 -translate-x-10'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-pink-200 px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-lg object-contain w-full h-48 cursor-pointer"
                    onClick={() => setModalImg(src)}
                  />
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
              >
                View Project on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 w-12 h-12 bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 flex items-center justify-center transition"
              onClick={() => setModalImg(null)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              </svg>
            </button>

            <img src={modalImg} alt="Enlarged screenshot" className="max-h-[90vh] max-w-[90vw] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
