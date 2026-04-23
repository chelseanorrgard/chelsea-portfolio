import React, { useState, useEffect } from 'react';
import Tart from '../assets/Tart.jpg';
import Pie from '../assets/Pie.jpg';
import Conchas from '../assets/Conchas.jpg';
import Shawl from '../assets/Shawl.jpg';
import Bunnies from '../assets/Bunnies.jpg';
import Socks from '../assets/Socks.jpg';
import Yarn from '../assets/Yarn.jpg';
import RavelryLogo from '../assets/RavelryPrimaryLogo2020-Black.svg';
import { useLanguage } from '../context/LanguageContext';

const Hobbies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative text-gray-200">
      {/* Hero Section */}
      <div className="relative pt-24 pb-8 overflow-hidden">
        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent">
                {t('hobbies.title1')}
              </span>
              <span className="text-gray-200"> {t('hobbies.title2')}</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Hobby Cards */}
          <div className="lg:col-span-8 space-y-8">
            {/* Baking/Cooking Card */}
            <div
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🍰</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-100">{t('hobbies.baking')}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('hobbies.bakingText')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[Tart, Pie, Conchas].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Baking"
                    className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(img)}
                  />
                ))}
              </div>
            </div>

            {/* Knitting/Crochet Card */}
            <div
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🧶</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-100">{t('hobbies.knitting')}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('hobbies.knittingText1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('hobbies.knittingText2')}
              </p>
              <div className="mt-2 mb-4 flex justify-center">
                <a
                  href="https://www.ravelry.com/people/chelsea1605"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={RavelryLogo} alt="Ravelry" className="w-40 h-auto invert brightness-200" />
                </a>
              </div>
              <div className="flex justify-center mt-4 mb-4">
                <img
                  src={Yarn}
                  alt="Yarn Wall"
                  className="w-1/2 max-w-md h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(Yarn)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[Shawl, Socks, Bunnies].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Knitting"
                    className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(img)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div
              className={`bg-gradient-to-br from-rose-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-left">
                {t('hobbies.quickFacts')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍰</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-left">
                      {t('hobbies.favoriteTreats')}
                    </p>
                    <p className="text-rose-100 text-left">
                      {t('hobbies.treatsValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧶</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-left">
                      {t('hobbies.knittingProjects')}
                    </p>
                    <p className="text-rose-100 text-left whitespace-pre-line">
                      {t('hobbies.projectsValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎮</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-left">
                      {t('hobbies.gaming')}
                    </p>
                    <p className="text-rose-100 text-left whitespace-pre-line">
                      {t('hobbies.gamingValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎸</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-left">
                      {t('hobbies.music')}
                    </p>
                    <p className="text-rose-100 text-left whitespace-pre-line">
                      {t('hobbies.musicValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-r from-rose-600 to-purple-700 rounded-full shadow-lg flex items-center justify-center hover:from-rose-700 hover:to-purple-800 transition"
              onClick={closeLightbox}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              </svg>
            </button>
            <img
              src={lightboxImage}
              alt="Enlarged"
              className="w-full h-auto rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;

