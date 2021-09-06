import React from 'react';

const Card = ({ email, name, login, avatar, description }) => (
  <div className="flex flex-col flex-grow bg-card-white p-4 rounded-2xl shadow-white mb-4 lg:mb-0 ">
    <div className="w-20 h-20 rounded-full overflow-hidden object-contain mx-auto mb-8">
      <img src={avatar} alt="avatar" />
    </div>
    <span className="block font-bold mb-2">{name || login}</span>
    <span className="block font-light text-gray-800 mb-2">
      {email || 'hidden email'}
    </span>
    <span className="block font-light text-gray-800">
      {description || 'no description'}
    </span>
  </div>
);

export default Card;
