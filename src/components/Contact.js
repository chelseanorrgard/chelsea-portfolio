import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-6">Contact</h1>
    <div className="mt-4 text-xl text-gray-700 leading-relaxed">
      <div className="flex flex-col gap-4">
        <p className="flex items-center">
          <FaEnvelope className="mr-3" size={24} />
          <a href="mailto:chelseanorrgard@gmail.com" className="text-gray-700">
            chelseanorrgard@gmail.com
          </a>
        </p>
        <p className="flex items-center">
          <FaLinkedin className="mr-3" size={24} />
          <a href="https://www.linkedin.com/in/chelseanorrgard" className="text-gray-700">
            LinkedIn
          </a>
        </p>
        <p className="flex items-center">
          <FaGithub className="mr-3" size={24} />
          <a href="https://github.com/chelseanorrgard" className="text-gray-700">
            GitHub
          </a>
        </p>
        <p className="flex items-center">
          <FaInstagram className="mr-3" size={24} />
          <a href="https://www.instagram.com/ameri.finn" className="text-gray-700">
            Instagram
          </a>
        </p>
        <p className="flex items-center">
          <FaFacebook className="mr-3" size={24} />
          <a href="https://www.facebook.com/searenee" className="text-gray-700">
            Facebook
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
