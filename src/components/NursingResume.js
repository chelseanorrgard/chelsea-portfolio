import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const NursingResume = () => {
  const { t } = useLanguage();

  const skills = [
    t('resume.nursing.skills.skill1'),
    t('resume.nursing.skills.skill2'),
    t('resume.nursing.skills.skill3'),
    t('resume.nursing.skills.skill4'),
    t('resume.nursing.skills.skill5'),
    t('resume.nursing.skills.skill6'),
    t('resume.nursing.skills.skill7'),
    t('resume.nursing.skills.skill8'),
    t('resume.nursing.skills.skill9'),
    t('resume.nursing.skills.skill10'),
    t('resume.nursing.skills.skill11'),
    t('resume.nursing.skills.skill12'),
    t('resume.nursing.skills.skill13'),
    t('resume.nursing.skills.skill14'),
    t('resume.nursing.skills.skill15'),
    t('resume.nursing.skills.skill16'),
    t('resume.nursing.skills.skill17'),
    t('resume.nursing.skills.skill18'),
    t('resume.nursing.skills.skill19')
  ];

  // Function to chunk the skills array into groups of three
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedSkills = chunkArray(skills, 3);

  return (
    <div className="px-4 py-2">
      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.nursing.skills.title')}</h2>
      <table className="w-full table-fixed mb-4">
        <tbody>
          {chunkedSkills.map((chunk, index) => (
            <tr key={index}>
              {chunk.map((skill, idx) => (
                <td key={idx} className="px-2 py-0">{skill}</td>
              ))}
              {chunk.length < 3 && (
                Array.from({ length: 3 - chunk.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="px-2 py-1"></td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.nursing.experience.title')}</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{t('resume.nursing.experience.inmedi.title')}</h3>
        <p className="italic mb-1">{t('resume.nursing.experience.inmedi.location')}</p>
        <p>{t('resume.nursing.experience.inmedi.description')}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{t('resume.nursing.experience.esperi.title')}</h3>
        <p className="italic mb-1">{t('resume.nursing.experience.esperi.location')}</p>
        <p>{t('resume.nursing.experience.esperi.description')}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{t('resume.nursing.experience.elvira.title')}</h3>
        <p className="italic mb-1">{t('resume.nursing.experience.elvira.location')}</p>
        <p>{t('resume.nursing.experience.elvira.description')}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{t('resume.nursing.experience.hospital.title')}</h3>
        <p className="italic mb-1">{t('resume.nursing.experience.hospital.location')}</p>
        <p>{t('resume.nursing.experience.hospital.description')}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{t('resume.nursing.experience.training.title')}</h3>
        <p className="italic mb-1">{t('resume.nursing.experience.training.location')}</p>
        <p>{t('resume.nursing.experience.training.description')}</p>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.education.title')}</h2>
      
      <h3 className="text-lg font-bold mb-1">{t('resume.education.vamk.title')}</h3>
      <p className="italic mb-1">{t('resume.education.vamk.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.education.vamk.degree')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.education.eduvamia.title')}</h3>
      <p className="italic mb-1">{t('resume.education.eduvamia.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.education.eduvamia.program')}</li>
        <li>{t('resume.education.eduvamia.details')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.education.novia.title')}</h3>
      <p className="italic mb-1">{t('resume.education.novia.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.education.novia.degree')}</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">{t('resume.education.wsu.title')}</h3>
      <p className="italic mb-1">{t('resume.education.wsu.location')}</p>
      <ul className="list-disc list-inside mb-4">
        <li>{t('resume.education.wsu.degree')}</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2 text-pink-500">{t('resume.languages.title')}</h2>
      <ul className="list-disc list-inside">
        <li>{t('resume.languages.english')}</li>
        <li>{t('resume.languages.swedish')}</li>
        <li>{t('resume.languages.finnish')}</li>
      </ul>
    </div>
  );
};

export default NursingResume;