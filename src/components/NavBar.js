import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      {/* Hamburger Button and Menu Text */}
      <div className="md:hidden flex items-center justify-end space-x-4">
        <span className="text-xl font-bold text-gray-700">Menu</span>
        <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center space-x-12">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/hobbies" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Hobbies
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul className={`md:hidden absolute top-16 right-0 bg-pink-100 shadow-md p-4 w-48 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/hobbies" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Hobbies
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-lg text-pink-500" : "text-lg text-gray-700 hover:text-pink-500"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



