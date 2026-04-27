import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: `url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Fgrocery.png&w=1920&q=75')`,
        }}
      >
        {/* Subtle dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-4">
          Groceries Delivered in 90 Minutes
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Get your healthy foods & fresh fruits delivered to your doorsteps from our nearby grocery stores.
        </p>

        {/* The Iconic PickBazar Search Bar */}
        <div className="relative max-w-3xl mx-auto shadow-2xl rounded-md overflow-hidden flex bg-white">
          <div className="flex flex-grow items-center px-4 md:px-6">
            <svg 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search your products from here" 
              className="w-full py-4 md:py-5 px-4 outline-none text-gray-700 text-sm md:text-base"
            />
          </div>
          <button className="bg-[var(--primary-color)] hover:bg-opacity-90 text-white px-6 md:px-10 py-4 md:py-5 font-bold flex items-center transition-all">
            <svg className="h-5 w-5 mr-2 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;