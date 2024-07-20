import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      <ul className="flex justify-center space-x-12">
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
