import React, { useState, useEffect } from 'react';
import weddingImage from '../assets/Wedding.jpg';
import lucyImage from '../assets/Lucy.jpg';
import finlandImage from '../assets/Finland.jpg';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
<div className="relative pt-24 pb-8 overflow-hidden">
  <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent"> {t('about.title1')} </span>
        <span className="text-gray-800"> {t('about.title2')}</span>
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Story Cards */}
          <div className="lg:col-span-8 space-y-8">
            {/* Background Card */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{t('about.journey')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.journeyText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.journeyText2')}
              </p>
            </div>

            {/* Education & Career Change Card */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ animationDelay: '400ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{t('about.education')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.educationText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.educationText2')}
              </p>
            </div>

            {/* IT Transition Card */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ animationDelay: '600ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{t('about.itCareer')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.itCareerText')}
              </p>
            </div>

            {/* Personal Life Card */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{t('about.personal')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.personalText')}
              </p>
            </div>
          </div>

          {/* Sidebar with Stats & Images */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Stats */}
            <div className={`bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-6">{t('about.quickFacts')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏠</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{t('about.location')}</p>
                    <p className="text-pink-100">{t('about.locationValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{t('about.educationLabel')}</p>
                    <p className="text-pink-100 text-left"> {t('about.educationValue1')}<br /> {t('about.educationValue2')}<br /> {t('about.educationValue3')} </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{t('about.citizenship')}</p>
                    <p className="text-pink-100">{t('about.citizenshipValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{t('about.focus')}</p>
                    <p className="text-pink-100">{t('about.focusValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '500ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('about.coreStrengths')}</h3>
              <div className="space-y-3">
                {[
                  { skill: t('about.problemSolving'), level: 90 },
                  { skill: t('about.communication'), level: 95 },
                  { skill: t('about.empathy'), level: 98 },
                  { skill: t('about.technicalLearning'), level: 80 },
                  { skill: 'JavaScript', level: 80 },
                  { skill: 'React', level: 75 },
                  { skill: 'Firebase', level: 75 },
                  { skill: 'Python', level: 60 },
                  { skill: t('about.api'), level: 80 },
                  { skill: 'SQL', level: 60 },
                  { skill: t('about.linux'), level: 80 },
                  { skill: t('about.git'), level: 95 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{item.skill}</span>
                      <span className="text-pink-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${item.level}%` : '0%',
                          transitionDelay: `${700 + index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className={`mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1000ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('about.myLife')}</h2>
            <p className="text-gray-600 text-lg">{t('about.myLifeSub')}</p>
          </div>
          
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { src: weddingImage, alt: t('about.wedding'), title: t('about.wedding'), description: t('about.weddingDesc') },
    { src: lucyImage, alt: t('about.lucy'), title: t('about.lucy'), description: t('about.lucyDesc') },
    { src: finlandImage, alt: t('about.finland'), title: t('about.finland'), description: t('about.finlandDesc') }
  ].map((photo, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{photo.title}</h3>
          <p className="text-sm text-gray-200">{photo.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default About;