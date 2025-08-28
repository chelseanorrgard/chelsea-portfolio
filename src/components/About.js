import React, { useState, useEffect } from 'react';
import weddingImage from '../assets/Wedding.jpg';
import lucyImage from '../assets/Lucy.jpg';
import finlandImage from '../assets/Finland.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent"> About </span>
        <span className="text-gray-800"> Me</span>
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
                <h2 className="text-2xl font-bold text-gray-800">My Journey</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                My name is Chelsea Norrgård (nee Harris). Originally from Seattle, Washington, USA, I now permanently reside in Vaasa, Finland.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After graduating from Washington State University with a Bachelor of Art in Fine Arts and a minor in Communications in 2006, I embarked on a career in bureaucratic office environments, including roles at the Department of State and a law firm, where I focused on privacy and legal compliance.
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
                <h2 className="text-2xl font-bold text-gray-800">Education & Growth</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In late 2014, I took a hiatus from corporate life to work at a dog grooming shop while attending community college courses and preparing for a potential move to Finland. By mid-2016, I was accepted into nursing school at Novia University of Applied Sciences in Vaasa, solidifying my decision to relocate. I graduated with a degree as a registered nurse in December 2019.
              </p>
              <p className="text-gray-700 leading-relaxed">
                During my nursing career, I worked primarily in elderly care homes and later with children under the age of 6, focusing on severe progressive illnesses and premature birth complications. This experience was deeply rewarding but highlighted my empathetic nature, leading me to pursue a career change.
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
                <h2 className="text-2xl font-bold text-gray-800">IT Career</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In January 2022, I transitioned to the IT field by enrolling in VAMK's IT program and joined Danfoss for flexible work on the production line. Despite recent changes, I remain focused on enhancing my coding skills and pursuing opportunities in the IT industry.
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
                <h2 className="text-2xl font-bold text-gray-800">Personal Life</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I am happily married to Staffan Norrgård, whom I met during my nursing studies in Finland and married in June 2019. We live together with our chihuahua, Lucy. In September 2022, I obtained Finnish citizenship, affirming my commitment to life in Finland while maintaining dual citizenship with the USA.
              </p>
            </div>
          </div>

          {/* Sidebar with Stats & Images */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Stats */}
            <div className={`bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏠</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-pink-100">Vaasa, Finland</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎓</span>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-pink-100">BA Fine Arts<br />BSc Nursing<br />BEng Information Technology</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌍</span>
                  <div>
                    <p className="font-semibold">Citizenship</p>
                    <p className="text-pink-100">Finland & USA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <p className="font-semibold">Focus</p>
                    <p className="text-pink-100">IT & Web Development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '500ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Strengths</h3>
              <div className="space-y-3">
                {[
                  { skill: 'Problem Solving', level: 90 },
                  { skill: 'Communication', level: 95 },
                  { skill: 'Empathy', level: 98 },
                  { skill: 'Technical Learning', level: 80 },
                  { skill: 'JavaScript', level: 80 },
                  { skill: 'React', level: 75 },
                  { skill: 'Firebase', level: 75 },
                  { skill: 'Python', level: 60 },
                  { skill: 'Integrating APIs', level: 80 },
                  { skill: 'SQL', level: 60 },
                  { skill: 'Linux (Ubuntu and Kali)', level: 80 },
                  { skill: 'Version Control (Git)', level: 95 }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Life in Photos</h2>
            <p className="text-gray-600 text-lg">Moments that matter to me</p>
          </div>
          
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { src: weddingImage, alt: 'Wedding Day', title: 'Wedding Day', description: 'Married to Staffan in June 2019' },
    { src: lucyImage, alt: 'Lucy', title: 'My Chihuahua Lucy', description: 'Our beloved family member' },
    { src: finlandImage, alt: 'Finland', title: 'Beautiful Finland', description: 'My adopted home country' }
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