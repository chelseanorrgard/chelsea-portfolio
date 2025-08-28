import React, { useState, useEffect } from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
  {/* Hero Section */}
  <div className="relative pt-24 pb-16 overflow-hidden">
    <div
      className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-800">Welcome to</span>
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            Chelsea Norrgård's Portfolio
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
          IT Professional & Registered Nurse from Vaasa, Finland
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-12"></div>
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
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src={ProfilePhoto}
              alt="Chelsea Norrgård"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full shadow-lg">
              <span className="font-semibold">Available for Work</span>
            </div>
          </div>
        </div>
      </div>


          {/* Content */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ animationDelay: '400ms' }}>
            
            {/* Introduction Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👋</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Hello & Welcome!</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Hello! I'm Chelsea Norrgård, a passionate and dedicated professional with expertise in IT and Nursing. Welcome to my portfolio, where you can explore my diverse skill set, work experiences, and personal interests.
              </p>
            </div>

            {/* What You'll Find Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">What You'll Discover</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you're here to learn about my technical projects, see my nursing achievements, or discover my hobbies like baking and knitting, you've come to the right place.
              </p>
            </div>

            {/* Navigation Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🧭</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Explore My Journey</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Feel free to navigate through the sections to get a deeper understanding of my journey and the work I love to do. If you wish to connect, head over to the contact section.
              </p>
              
              {/* Quick navigation buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/about" className="group bg-pink-50 hover:bg-pink-100 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">👩‍💼</div>
                  <span className="text-sm font-medium text-gray-700">About Me</span>
                </a>
                <a href="/projects" className="group bg-rose-50 hover:bg-rose-100 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💻</div>
                  <span className="text-sm font-medium text-gray-700">Projects</span>
                </a>
                <a href="/cv" className="group bg-pink-50 hover:bg-pink-100 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</div>
                  <span className="text-sm font-medium text-gray-700">Resume</span>
                </a>
                <a href="/hobbies" className="group bg-rose-50 hover:bg-rose-100 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🎨</div>
                  <span className="text-sm font-medium text-gray-700">Hobbies</span>
                </a>
                <a href="/contact" className="group bg-pink-50 hover:bg-pink-100 rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📞</div>
                  <span className="text-sm font-medium text-gray-700">Contact</span>
                </a>
              </div>
            </div>

            {/* Thank You Card */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h2 className="text-2xl font-bold">Thank You for Visiting!</h2>
              </div>
              <p className="text-pink-100 leading-relaxed text-lg">
                Thank you for visiting, and I hope you enjoy learning more about my professional and personal endeavors!
              </p>
            </div>
          </div>
        </div>

        {/* Features/Highlights Section */}
        <div className={`mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '600ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Work With Me?</h2>
            <p className="text-gray-600 text-lg">A unique blend of technical skills and human empathy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Technical Expertise</h3>
              <p className="text-gray-600">Modern web development skills with React, JavaScript, and full-stack capabilities</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Healthcare Background</h3>
              <p className="text-gray-600">Nursing experience brings unique perspective to user-centered design and problem-solving</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Global Perspective</h3>
              <p className="text-gray-600">Multicultural experience from USA to Finland, bringing adaptability and fresh insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;