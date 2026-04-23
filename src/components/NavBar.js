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
    <nav className="fixed top-0 left-0 right-0 z-50 
      bg-gray-900/70 backdrop-blur-md border-b border-white/10 
      p-6 shadow-lg">

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between">
        <button 
          onClick={toggleMobileMenu} 
          className="ml-auto text-gray-300 hover:text-rose-400 transition-colors duration-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7" />
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
                `px-4 py-2 text-lg font-medium rounded-lg transition-all duration-300 hover:-translate-y-1 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>

            {/* Decorative stars */}
            {index < 5 && (
              <span className="w-4 h-[2px] bg-gradient-to-r from-rose-500 to-purple-600 rounded-full">
              </span>
            )}
          </React.Fragment>
        ))}

        {/* Language Toggle - Desktop */}
        <div className="ml-4 flex gap-2 bg-white/5 border border-white/10 rounded-lg p-1 backdrop-blur-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
                language === lang.code
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: '1.3em', height: '1.3em' }}
              />
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 mt-4 transition-all duration-300 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="p-6 space-y-4">
          {[
            { path: '/', icon: '🏠', label: t('nav.home') },
            { path: '/about', icon: '👩‍💼', label: t('nav.about') },
            { path: '/cv', icon: '📄', label: t('nav.cv') },
            { path: '/projects', icon: '💻', label: t('nav.projects') },
            { path: '/hobbies', icon: '🎨', label: t('nav.hobbies') },
            { path: '/contact', icon: '📞', label: t('nav.contact') }
          ].map((item) => (
            <button 
              key={item.path}
              onClick={() => handleNavLinkClick(item.path)} 
              className="block w-full text-left text-lg font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {item.icon} {item.label}
            </button>
          ))}

          {/* Language Toggle - Mobile */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    style={{ width: '1.3em', height: '1.3em' }}
                  />
                  {lang.label}
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

