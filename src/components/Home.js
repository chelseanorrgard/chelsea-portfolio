import React, { useState, useEffect } from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
  {/* Hero Section */}
  <div className="relative pt-24 pb-16 overflow-hidden">
    <div
      className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-200">{t('home.welcome')}</span>
          <br />
          <span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent">
            {t('home.title')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
          {t('home.subtitle')}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full mb-12"></div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-6 pb-20">
    <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
      {/* Profile Image */}
      <div
        className={`lg:col-span-5 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
        style={{ animationDelay: '200ms' }}
      >
        <div className="relative">
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
            <img
              src={ProfilePhoto}
              alt="Chelsea Norrgård"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
              <span className="font-semibold">{t('home.available')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
        style={{ animationDelay: '400ms' }}
      >
        {/* Introduction Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">👋</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">{t('home.hello')}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t('home.helloText')}
          </p>
        </div>

        {/* What You'll Find Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">{t('home.discover')}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t('home.discoverText')}
          </p>
        </div>

        {/* Navigation Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl">🧭</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">{t('home.explore')}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {t('home.exploreText')}
          </p>

          {/* Quick navigation buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/about" className="group bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">👩‍💼</div>
              <span className="text-sm font-medium text-gray-300">{t('nav.about')}</span>
            </a>
            <a href="/projects" className="group bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💻</div>
              <span className="text-sm font-medium text-gray-300">{t('nav.projects')}</span>
            </a>
            <a href="/cv" className="group bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</div>
              <span className="text-sm font-medium text-gray-300">{t('nav.cv')}</span>
            </a>
            <a href="/hobbies" className="group bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🎨</div>
              <span className="text-sm font-medium text-gray-300">{t('nav.hobbies')}</span>
            </a>
            <a href="/contact" className="group bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📞</div>
              <span className="text-sm font-medium text-gray-300">{t('nav.contact')}</span>
            </a>
          </div>
        </div>

        {/* Thank You Card */}
        <div className="bg-gradient-to-r from-rose-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">🙏</span>
            </div>
            <h2 className="text-2xl font-bold">{t('home.thanks')}</h2>
          </div>
          <p className="text-rose-100 leading-relaxed text-lg">
            {t('home.thanksText')}
          </p>
        </div>
      </div>
    </div>

    {/* Features/Highlights Section */}
    <div
      className={`mt-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: '600ms' }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">{t('home.whyWork')}</h2>
        <p className="text-gray-400 text-lg">{t('home.whyWorkSub')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-white">💻</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-100">{t('home.technical')}</h3>
          <p className="text-gray-400">{t('home.technicalDesc')}</p>
        </div>

        <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-white">🏥</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-100">{t('home.healthcare')}</h3>
          <p className="text-gray-400">{t('home.healthcareDesc')}</p>
        </div>

        <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-white">🌍</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-100">{t('home.global')}</h3>
          <p className="text-gray-400">{t('home.globalDesc')}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;
