import React from 'react';
import { useState } from 'react';

function Badge({ badge }) {
  //   console.log(badge);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="my-20 max-w-md rounded-lg bg-white px-8 py-4 shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div className="absolute flex h-40 w-40 flex-col items-center justify-center  rounded-xl bg-white transition delay-500">
          <p className="mt-2 text-gray-600">
            {badge.badge_description}
          </p>
        </div>
      )}

      <div className="flex justify-center md:justify-end mt-16">
        <img className=" w-80 " src={badge.badge_img_url} alt="badge image" />
      </div>

      <div className="">
        <p className="text-gray-800 text-3xl font-semibold">{badge.badge_name}</p>
        {/* <p className="text-sm">{badge.badge_description}</p> */}
      </div>
    </div>
  );
}

export default Badge;
