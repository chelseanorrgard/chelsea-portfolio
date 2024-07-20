import React from 'react';
import NursingResumeSvenska from './NursingResumeSvenska';
import NursingResumeSuomi from './NursingResumeSuomi';

const NursingResume = ({ language }) => {
  if (language === 'Svenska') {
    return <NursingResumeSvenska />;
  } else {
    return <NursingResumeSuomi />;
  }
};

export default NursingResume;
