import React from 'react';
import { MdConstruction } from 'react-icons/md';

const Projects = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-4">Projects</h1>
    <div className="mt-4 text-lg text-gray-700 leading-relaxed">
      <p className="mt-4">
        Here are some of the projects I've worked on recently.
      </p>
      <div className="flex flex-col items-center mt-6 text-center">
        <MdConstruction className="text-6xl text-pink-500 mb-4" />
        <span className="text-xl md:text-2xl">This section is under construction.</span>
      </div>
    </div>
  </div>
);

export default Projects;


