import React from 'react';

function Badge({ badge }) {
//   console.log(badge);

  return (
    <div className=" flex h-40 space-x-10  justify-center rounded-full border border-yellow-700  shadow-2xl outline outline-offset-2 outline-green-700  hover:outline-green-500">
      <div className='flex flex-col items-center mt-5 space-y-1'>
        <div className="">
          <img className=" w-20 " src={badge.image} alt="badge image" />
        </div>

        <div className='flex'>
          <svg
            className="mr-1 h-4 w-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="mr-1 h-4 w-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="h-4 w-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span className="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-green-600 to-lime-400 align-baseline font-bold uppercase leading-none text-white">
          level
        </span>
      </div>

      <div className="flex items-center">

        <div className="">
          <p className="text-base font-semibold tracking-tight text-gray-900">
            {badge.badge_name}
          </p>
          <p className='text-sm'>{badge.badge_description}</p>
        </div>
    
      </div>
    </div>
  );
}
<span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-green-600 to-lime-400 align-baseline font-bold uppercase leading-none text-white">chip lime</span>

export default Badge;
