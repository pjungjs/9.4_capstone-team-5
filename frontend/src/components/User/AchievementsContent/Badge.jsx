import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../UserMain.jsx';

function Badge({ badge }) {

  const {currentUser} = useContext(UserContext);
const [barWidth, setBarWidth] = useState(10);
const [isHovered, setIsHovered] = useState(false);


console.log(currentUser)

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
      
      <div className="relative h-8 w-full rounded-full bg-gray-200">
                          <div
                            className="absolute left-0 top-0 h-full rounded-full bg-green-500"
                            style={{ width: `${barWidth}%` }}
                          ></div>
                        </div>

      
        <p className="text-gray-800 text-xl font-semibold text-center">{badge.badge_name}</p>
        {/* <p className="text-sm">{badge.badge_description}</p> */}
     
    </div>
  );
}

export default Badge;
