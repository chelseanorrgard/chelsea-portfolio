import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ITResume = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.it.objective.title')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.objective.point1')}</li>
        <li>{t('resume.it.objective.point2')}</li>
        <li>{t('resume.it.objective.point3')}</li>
        <li>{t('resume.it.objective.point4')}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.it.skills.title')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.skills.point1')}</li>
        <li>{t('resume.it.skills.point2')}</li>
        <li>{t('resume.it.skills.point3')}</li>
        <li>{t('resume.it.skills.point4')}</li>
        <li>{t('resume.it.skills.point5')}</li>
        <li>{t('resume.it.skills.point6')}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.it.experience.title')}</h2>
      
      <h3 className="text-lg font-bold mb-1">{t('resume.it.experience.danfoss.title')}</h3>
      <p className="italic mb-1">{t('resume.it.experience.danfoss.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.experience.danfoss.point1')}</li>
        <li>{t('resume.it.experience.danfoss.point2')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.experience.inmedi.title')}</h3>
      <p className="italic mb-1">{t('resume.it.experience.inmedi.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.experience.inmedi.point1')}</li>
        <li>{t('resume.it.experience.inmedi.point2')}</li>
        <li>{t('resume.it.experience.inmedi.point3')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.experience.bishop.title')}</h3>
      <p className="italic mb-1">{t('resume.it.experience.bishop.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.experience.bishop.point1')}</li>
        <li>{t('resume.it.experience.bishop.point2')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.experience.state.title')}</h3>
      <p className="italic mb-1">{t('resume.it.experience.state.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.experience.state.point1')}</li>
        <li>{t('resume.it.experience.state.point2')}</li>
        <li>{t('resume.it.experience.state.point3')}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.it.education.title')}</h2>
      
      <h3 className="text-lg font-bold mb-1">{t('resume.it.education.vamk.title')}</h3>
      <p className="italic mb-1">{t('resume.it.education.vamk.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.education.vamk.degree')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.education.eduvamia.title')}</h3>
      <p className="italic mb-1">{t('resume.it.education.eduvamia.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.education.eduvamia.program')}</li>
        <li>{t('resume.it.education.eduvamia.details')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.education.novia.title')}</h3>
      <p className="italic mb-1">{t('resume.it.education.novia.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.education.novia.degree')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.it.education.wsu.title')}</h3>
      <p className="italic mb-1">{t('resume.it.education.wsu.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.it.education.wsu.degree')}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.languages.title')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.languages.english')}</li>
        <li>{t('resume.languages.swedish')}</li>
        <li>{t('resume.languages.finnish')}</li>
      </ul>
    </div>
  );
};

export default ITResume;