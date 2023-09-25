import React from 'react';
import { useState } from 'react';

function Badge({ badge }) {

  

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex flex-col w-60 m-5 items-center rounded-lg bg-white px-8 py-4 shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {isHovered && (
        <div className="absolute flex w-60 h-64 flex-col items-center justify-center rounded-xl transition delay-500 z-10 bg-green-300">
          <p className="mt-2 text-gray-600">
            {badge.badge_description}
          </p>
        </div>
      )}

      <img className={`${badge.achieved ? '': 'grayscale'} w-50 h-50`} src={badge.badge_img_url} alt="badge image" />
      
      

      
        <p className="text-gray-800 text-xl font-semibold text-center">{badge.badge_name}</p>
        {/* <p className="text-sm">{badge.badge_description}</p> */}
     
    </div>
  );
}

export default Badge;
