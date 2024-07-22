import React, { useState } from 'react';
import ITResumeEN from './IT/ITResumeEN';
import ITResumeSV from './IT/ITResumeSV';
import ITResumeFI from './IT/ITResumeFI';
import NursingResumeEN from './Nursing/NursingResumeEN';
import NursingResumeSV from './Nursing/NursingResumeSV';
import NursingResumeFI from './Nursing/NursingResumeFI';

const CV = () => {
  const [selectedTab, setSelectedTab] = useState('IT');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const renderResumeContent = () => {
    if (selectedTab === 'IT') {
      switch (selectedLanguage) {
        case 'EN':
          return <ITResumeEN />;
        case 'SV':
          return <ITResumeSV />;
        case 'FI':
          return <ITResumeFI />;
        default:
          return null;
      }
    } else if (selectedTab === 'Nursing') {
      switch (selectedLanguage) {
        case 'EN':
          return <NursingResumeEN />;
        case 'SV':
          return <NursingResumeSV />;
        case 'FI':
          return <NursingResumeFI />;
        default:
          return null;
      }
    }
  };

  const pinkStarStyle = {
    color: 'pink', // Sets the color of the star to pink
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">Curriculum Vitae</h1>

      {/* Buttons for selecting IT or Nursing */}
      <div className="flex flex-wrap justify-center mb-6 gap-4">
        <button
          onClick={() => setSelectedTab('IT')}
          className={`px-6 py-3 rounded-full text-lg focus:outline-none ${selectedTab === 'IT' ? 'bg-pink-300 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Primary Resume
        </button>
        <button
          onClick={() => setSelectedTab('Nursing')}
          className={`px-6 py-3 rounded-full text-lg focus:outline-none ${selectedTab === 'Nursing' ? 'bg-pink-300 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Nursing Resume
        </button>
      </div>

      {/* Text for selecting preferred language */}
      <div className="mb-6 text-lg text-gray-700 text-center">
        <p className="mb-2">
          Choose your preferred language {' '}
          <span style={pinkStarStyle}>★</span>{' '}
          Valitse haluamasi kieli {' '}
          <span style={pinkStarStyle}>★</span>{' '}
          Välj ditt föredragna språk
        </p>
      </div>

      {/* Buttons for selecting language */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        <button
          onClick={() => setSelectedLanguage('EN')}
          className={`px-4 py-2 rounded-full text-lg focus:outline-none ${selectedLanguage === 'EN' ? 'bg-pink-300 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          English
        </button>
        <button
          onClick={() => setSelectedLanguage('FI')}
          className={`px-4 py-2 rounded-full text-lg focus:outline-none ${selectedLanguage === 'FI' ? 'bg-pink-300 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Suomi
        </button>
        <button
          onClick={() => setSelectedLanguage('SV')}
          className={`px-4 py-2 rounded-full text-lg focus:outline-none ${selectedLanguage === 'SV' ? 'bg-pink-300 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Svenska
        </button>
      </div>

      {/* Render the selected resume content */}
      {renderResumeContent()}
    </div>
  );
};

export default CV;


