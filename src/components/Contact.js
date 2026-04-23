import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contacts = [
    { icon: <FaEnvelope size={24} />, label: 'Email', value: 'Email', href: 'mailto:chelseanorrgard@gmail.com' },
    { icon: <FaLinkedin size={24} />, label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/in/chelseanorrgard' },
    { icon: <FaGithub size={24} />, label: 'GitHub', value: 'GitHub', href: 'https://github.com/chelseanorrgard' },
    { icon: <FaInstagram size={24} />, label: 'Instagram', value: 'Instagram', href: 'https://www.instagram.com/ameri.finn' },
    { icon: <FaFacebook size={24} />, label: 'Facebook', value: 'Facebook', href: 'https://www.facebook.com/searenee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-gray-100 mb-6">{t('contact.getInTouch')}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {t('contact.getInTouchText')}
          </p>

          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/40 border border-gray-700 hover:bg-gray-700/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-rose-400">{contact.icon}</div>
                <span className="text-gray-200 font-medium">{contact.value}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

