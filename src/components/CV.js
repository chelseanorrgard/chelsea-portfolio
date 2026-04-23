import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ITResume from './ITResume';
import NursingResume from './NursingResume';
import ProfileImage from '../assets/Profile.png';

// Import PDFs
import ITenPDF from '../assets/ITen.pdf';
import ITfiPDF from '../assets/ITfi.pdf';
import ITsvPDF from '../assets/ITsv.pdf';
import NenPDF from '../assets/Nen.pdf';
import NfiPDF from '../assets/Nfi.pdf';
import NsvPDF from '../assets/Nsv.pdf';

const CV = () => {
  const [selectedTab, setSelectedTab] = useState('IT');
  const [isVisible, setIsVisible] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderResumeContent = () => {
    return selectedTab === 'IT' ? <ITResume /> : <NursingResume />;
  };

  const getPDFFile = () => {
    const pdfMap = {
      IT: { en: ITenPDF, fi: ITfiPDF, sv: ITsvPDF },
      Nursing: { en: NenPDF, fi: NfiPDF, sv: NsvPDF }
    };
    return pdfMap[selectedTab][language];
  };

  const handleDownload = () => {
    const pdfFile = getPDFFile();
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = `Chelsea_Norrgard_${selectedTab}_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      <div
        className={`max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent">
              {t('cv.curriculum')}
            </span>
            <span className="text-gray-200"> {t('cv.vitae')}</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full"></div>

          <img
            src={ProfileImage}
            alt="Profile"
            className="w-60 h-60 mx-auto rounded-full shadow-xl object-cover border-4 border-rose-600 mt-6"
          />
        </div>

        {/* Resume Type Selector */}
        <div
          className={`rounded-2xl p-8 shadow-xl bg-gradient-to-br from-rose-600 to-purple-700 text-white transition-all duration-1000 max-w-2xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">{t('cv.resumeType')}</h3>
          <p className="text-lg text-center mb-6">{t('cv.resumeTypeDesc')}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedTab('IT')}
              className={`px-6 py-3 rounded-full text-lg transition font-semibold ${
                selectedTab === 'IT'
                  ? 'bg-white text-rose-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {t('cv.primaryResume')}
            </button>

            <button
              onClick={() => setSelectedTab('Nursing')}
              className={`px-6 py-3 rounded-full text-lg transition font-semibold ${
                selectedTab === 'Nursing'
                  ? 'bg-white text-rose-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {t('cv.nursingResume')}
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-1000 text-left ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {renderResumeContent()}
        </div>

        {/* Download PDF Button */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:from-rose-700 hover:to-purple-800 transition-all duration-300 transform hover:-translate-y-1 text-lg font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('cv.downloadPDF')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CV;
