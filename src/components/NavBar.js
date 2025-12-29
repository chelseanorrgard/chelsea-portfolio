import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ReactCountryFlag from "react-country-flag";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

const languages = [
  { code: 'en', label: 'EN', countryCode: 'GB' },
  { code: 'fi', label: 'FI', countryCode: 'FI' },
  { code: 'sv', label: 'SV', countryCode: 'SE' }
];

  return (
    <nav className="bg-pink-100/90 backdrop-blur-sm p-6 shadow-md border-b border-pink-200 fixed top-0 left-0 right-0 z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        <button 
          onClick={toggleMobileMenu} 
          className="ml-auto text-gray-700 hover:text-pink-600 focus:outline-none transition-colors duration-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:justify-center items-center space-x-2">
        {[
          { path: '/', label: t('nav.home') },
          { path: '/about', label: t('nav.about') },
          { path: '/cv', label: t('nav.cv') },
          { path: '/projects', label: t('nav.projects') },
          { path: '/hobbies', label: t('nav.hobbies') },
          { path: '/contact', label: t('nav.contact') }
        ].map((item, index) => (
          <React.Fragment key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 text-lg font-medium transition-all duration-300 hover:-translate-y-1 ${
                  isActive
                    ? "text-pink-600 bg-pink-50 rounded-lg"
                    : "text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg"
                }`
              }
            >
              {item.label}
            </NavLink>
            {index < 5 && (
              <span 
                className="text-pink-400 text-xl animate-pulse"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                ⭐
              </span>
            )}
          </React.Fragment>
        ))}

        {/* Language Toggle - Desktop */}
        <div className="ml-4 flex gap-2 bg-white/50 rounded-lg p-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                language === lang.code
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-pink-100'
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: '1.5em', height: '1.5em', marginRight: '0.5em' }}
              />
              {lang.label}
            </button>
          ))}

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-pink-100/95 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 mt-4 transition-all duration-300 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="p-6 space-y-4">
          <button 
            onClick={() => handleNavLinkClick('/')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            🏠 {t('nav.home')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('/about')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            👩‍💼 {t('nav.about')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('/cv')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            📄 {t('nav.cv')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('/projects')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            💻 {t('nav.projects')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('/hobbies')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            🎨 {t('nav.hobbies')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('/contact')} 
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1"
          >
            📞 {t('nav.contact')}
          </button>

          {/* Language Toggle - Mobile */}
          <div className="pt-4 border-t border-pink-200">
              <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-pink-500 text-white shadow-md'
                      : 'bg-white/50 text-gray-700 hover:bg-pink-100'
                  }`}
                >
                <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: '1.5em', height: '1.5em', marginRight: '0.5em' }}
              /> {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
