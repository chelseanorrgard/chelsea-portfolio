import React, { useState, useEffect } from 'react';
import ITResumeEN from './IT/ITResumeEN';
import ITResumeSV from './IT/ITResumeSV';
import ITResumeFI from './IT/ITResumeFI';
import NursingResumeEN from './Nursing/NursingResumeEN';
import NursingResumeSV from './Nursing/NursingResumeSV';
import NursingResumeFI from './Nursing/NursingResumeFI';
import ProfileImage from '../assets/Profile.png';

const CV = () => {
  const [selectedTab, setSelectedTab] = useState('IT');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderResumeContent = () => {
    if (selectedTab === 'IT') {
      switch (selectedLanguage) {
        case 'EN': return <ITResumeEN />;
        case 'SV': return <ITResumeSV />;
        case 'FI': return <ITResumeFI />;
        default: return null;
      }
    } else {
      switch (selectedLanguage) {
        case 'EN': return <NursingResumeEN />;
        case 'SV': return <NursingResumeSV />;
        case 'FI': return <NursingResumeFI />;
        default: return null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div
        className={`max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Curriculum
            </span>
            <span className="text-gray-800"> Vitae</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-60 h-60 mx-auto rounded-full shadow-lg object-cover border-4 border-pink-300 mt-6"
          />
        </div>

<div className="flex flex-col lg:flex-row gap-8 justify-center">
  {/* Resume Type Box */}
  <div className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white transition-all duration-1000 max-w-md w-full ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <h3 className="text-2xl font-bold mb-4 text-center">Resume Type</h3>
    <p className="text-lg text-center mb-6">
      Select which resume you'd like to view
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {['IT', 'Nursing'].map(tab => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`px-6 py-3 rounded-full text-lg focus:outline-none transition ${
            selectedTab === tab
              ? 'bg-white text-pink-500 font-bold'
              : 'bg-pink-300 text-white'
          }`}
        >
          {tab === 'IT' ? 'Primary Resume' : 'Nursing Resume'}
        </button>
      ))}
    </div>
  </div>

  {/* Language Box */}
  <div className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white transition-all duration-1000 max-w-md w-full ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}>
    <h3 className="text-2xl font-bold mb-4 text-center">Language &nbsp;⭐&nbsp; Kieli &nbsp;⭐&nbsp; Språk</h3>
    <p className="text-lg text-center mb-6">
      Choose &nbsp;&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;&nbsp; Valitse &nbsp;&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;&nbsp; Välj
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {['EN', 'FI', 'SV'].map(lang => (
        <button
          key={lang}
          onClick={() => setSelectedLanguage(lang)}
          className={`px-4 py-2 rounded-full text-lg focus:outline-none transition ${
            selectedLanguage === lang
              ? 'bg-white text-pink-500 font-bold'
              : 'bg-pink-300 text-white'
          }`}
        >
          {lang === 'EN' ? 'English' : lang === 'FI' ? 'Suomi' : 'Svenska'}
        </button>
      ))}
    </div>
  </div>
</div>


        {/* Resume Content */}
        <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {renderResumeContent()}
        </div>

        {/* Download Button */}
{/*}        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/ChelseaCV.pdf"
            download
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3m-6-9h6" />
            </svg>
            Download CV
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CV;
