import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-pink-100 p-4 shadow-md relative">
      {/* Hamburger Button and Menu Text */}
      <div className="md:hidden flex items-center justify-end space-x-4">
        <span className="text-xl font-bold text-gray-700">Menu</span>
        <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute right-0 top-full mt-2 w-48 bg-pink-100 shadow-lg rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        style={{ zIndex: 1000 }}
      >
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/hobbies" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            Hobbies
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "block px-4 py-2 text-lg text-pink-500" : "block px-4 py-2 text-lg text-gray-700 hover:text-pink-500"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;




