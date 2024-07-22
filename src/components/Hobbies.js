import React from 'react';
import Tart from '../assets/Tart.jpg';
import Pie from '../assets/Pie.jpg';
import Conchas from '../assets/Conchas.jpg';
import Shawl from '../assets/Shawl.jpg';
import Bunnies from '../assets/Bunnies.jpg';
import Socks from '../assets/Socks.jpg';
import Yarn from '../assets/Yarn.jpg';
import RavelryLogo from '../assets/RavelryPrimaryLogo2020-Black.svg';

const Hobbies = () => (
  <div className="max-w-screen-lg mx-auto p-6">
    <h1 className="text-4xl font-bold text-pink-500 mb-4">Hobbies</h1>
    <div className="text-lg text-gray-700 leading-relaxed">
      <p className="mt-4 mb-4">
        In my free time, I enjoy various relaxing activities. Among my favorite are Baking/Cooking, Knitting/Crochet, and playing games on my PC.
      </p>

      {/* Baking/Cooking Section */}
      <h2 className="text-3xl font-semibold text-pink-400 mt-6 mb-4">Baking and Cooking</h2>
      <p className="mt-2 mb-4">
        I love spending time in the kitchen, creating delicious treats and experimenting with new recipes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <img src={Tart} alt="Tart" className="w-full h-auto rounded-lg shadow-md" />
        <img src={Pie} alt="Pie" className="w-full h-auto rounded-lg shadow-md" />
        <img src={Conchas} alt="Conchas" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Knitting/Crochet Section */}
      <h2 className="text-3xl font-semibold text-pink-400 mt-6 mb-4">Knitting and Crochet</h2>
      <p className="mt-2 mb-4">
        One of my favorite hobbies is knitting and crochet. I have an extensive yarn stash and many projects in progress at the same time.
      </p>
      <p className="mt-2 mb-4">
        Here's a link to my Ravelry page where you can see more projects:
      </p>
      <div className="mt-2 mb-4 flex justify-center">
        <a href="https://www.ravelry.com/people/chelsea1605" target="_blank" rel="noopener noreferrer">
          <img src={RavelryLogo} alt="Ravelry" className="w-40 h-auto" />
        </a>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <img src={Yarn} alt="Yarn Wall" className="w-1/2 max-w-md h-auto rounded-lg shadow-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <img src={Shawl} alt="Shawl" className="w-full h-auto rounded-lg shadow-md" />
        <img src={Socks} alt="Socks" className="w-full h-auto rounded-lg shadow-md" />
        <img src={Bunnies} alt="Bunnies" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  </div>
);

export default Hobbies;

