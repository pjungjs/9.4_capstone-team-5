import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <div className="relative pt-1">
  <div className="mb-2 flex items-center justify-between">
    <div>
      <span className="inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-semibold uppercase text-green-600">
        In Progress
      </span>
    </div>
    <div className="text-center">
    </div>
  </div>
  <div className="relative h-8 w-40 rounded-full bg-gray-200">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: `20%` }}
    transition={{ duration: 0.5 }}
    className="absolute left-0 top-0 h-full rounded-full bg-cyan-500"
    style={{ width: `10%` }}
  ></motion.div>
</div>

      </div>
     
    </div>
  );
}

export default Badge;
