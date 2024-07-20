import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-4">Contact</h1>
    <div className="mt-4 text-xl text-gray-700 leading-relaxed"> {/* Changed text-lg to text-xl */}
      <p className="mt-4 flex items-center">
        <FaEnvelope className="mr-2" size={24} /> {/* Adjust size */}
        <a href="mailto:chelseanorrgard@gmail.com" className="text-gray-700">
          chelseanorrgard@gmail.com
        </a>
      </p>
      <p className="mt-2 flex items-center">
        <FaLinkedin className="mr-2" size={24} /> {/* Adjust size */}
        <a href="https://www.linkedin.com/in/chelseanorrgard" className="text-gray-700">
          LinkedIn
        </a>
      </p>
      <p className="mt-2 flex items-center">
        <FaGithub className="mr-2" size={24} /> {/* Adjust size */}
        <a href="https://github.com/chelseanorrgard" className="text-gray-700">
          GitHub
        </a>
      </p>
      <p className="mt-2 flex items-center">
        <FaInstagram className="mr-2" size={24} /> {/* Adjust size */}
        <a href="https://www.instagram.com/ameri.finn" className="text-gray-700">
          Instagram
        </a>
      </p>
      <p className="mt-2 flex items-center">
        <FaFacebook className="mr-2" size={24} /> {/* Adjust size */}
        <a href="https://www.facebook.com/searenee" className="text-gray-700">
          Facebook
        </a>
      </p>
    </div>
  </div>
);

export default Contact;
