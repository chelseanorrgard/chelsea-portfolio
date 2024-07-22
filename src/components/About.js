import React from 'react';
import weddingImage from '../assets/Wedding.jpg';
import lucyImage from '../assets/Lucy.jpg';
import finlandImage from '../assets/Finland.jpg';

const About = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-4">About Me</h1>
    <div className="mt-4 text-lg text-gray-700 leading-relaxed">
      <p className="mb-4">My name is Chelsea Norrgård (nee Harris). Originally from Seattle, Washington, USA, I now permanently reside in Vaasa, Finland.</p>

      <p className="mb-4">After graduating from Washington State University with a Bachelor of Art in Fine Arts and a minor in Communications in 2006, I embarked on a career in bureaucratic office environments, including roles at the Department of State and a law firm, where I focused on privacy and legal compliance.</p>

      <p className="mb-4">In late 2014, I took a hiatus from corporate life to work at a dog grooming shop while attending community college courses and preparing for a potential move to Finland. By mid-2016, I was accepted into nursing school at Novia University of Applied Sciences in Vaasa, solidifying my decision to relocate. I graduated with a degree as a registered nurse in December 2019.</p>

      <p className="mb-4">During my nursing career, I worked primarily in elderly care homes and later with children under the age of 6, focusing on severe progressive illnesses and premature birth complications. This experience was deeply rewarding but highlighted my empathetic nature, leading me to pursue a career change.</p>

      <p className="mb-4">In January 2022, I transitioned to the IT field by enrolling in VAMK's IT program and joined Danfoss for flexible work on the production line. Despite recent changes, I remain focused on enhancing my coding skills and pursuing opportunities in the IT industry.</p>

      <p className="mb-4">I am happily married to Staffan Norrgård, whom I met during my nursing studies in Finland and married in June 2019. We live together with our chihuahua, Lucy. In September 2022, I obtained Finnish citizenship, affirming my commitment to life in Finland while maintaining dual citizenship with the USA.</p>

      {/* Images section */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="aspect-w-4 aspect-h-3">
          <img src={weddingImage} alt="Wedding" className="object-cover rounded-lg w-full h-full" />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img src={lucyImage} alt="Lucy" className="object-cover rounded-lg w-full h-full" />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img src={finlandImage} alt="Finland" className="object-cover rounded-lg w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

export default About;

