import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg'; // Replace with the path to your photo

const Home = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-4">Welcome to Chelsea Norrgård's Portfolio</h1>
    <div className="flex flex-col md:flex-row items-center mt-4 text-lg text-gray-700 leading-relaxed">
      <img 
        src={ProfilePhoto} 
        alt="Chelsea Norrgård" 
        className="w-56 h-56 rounded-full mb-4 md:mb-0 md:mr-6 shadow-md object-cover"
      />
      <div className="flex-1">
        <p className="mt-4">
          Hello! I'm Chelsea Norrgård, a passionate and dedicated professional with expertise in IT and Nursing. Welcome to my portfolio, where you can explore my diverse skill set, work experiences, and personal interests.
        </p>
        <p className="mt-4">
          Whether you're here to learn about my technical projects, see my nursing achievements, or discover my hobbies like baking and knitting, you've come to the right place.
        </p>
        <p className="mt-4">
          Feel free to navigate through the sections to get a deeper understanding of my journey and the work I love to do. If you wish to connect, head over to the contact section.
        </p>
        <p className="mt-4">
          Thank you for visiting, and I hope you enjoy learning more about my professional and personal endeavors!
        </p>
      </div>
    </div>
  </div>
);

export default Home;
