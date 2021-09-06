import React from 'react';

const Preloader = () => (
  <div className="flex flex-col flex-grow bg-card-white p-4 rounded-2xl shadow-white animate-pulse">
    <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto" />
    <div className="h-4 my-3 bg-gray-300 rounded-md" />
    <div className="h-4 my-3 bg-gray-300 rounded-md" />
    <div className="h-14 bg-gray-300 my-3 rounded-md" />
  </div>
);

export default Preloader;
