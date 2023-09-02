import React from 'react';
import Badges from './Badges';
import axios from 'axios';
import { useState, useEffect } from 'react';


const API = process.env.REACT_APP_API_URL;


function BadgesBoard() {

const [badges, setBadges] = useState([]);

useEffect(() => {
    axios
        .get(`${API}/achievements`)
        .then((res) => {
            setBadges(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <div>
      <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-blue-600 bg-white px-5 py-2.5 text-center text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          All Badges
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
        >
          Achieved
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
        >
          Bags
        </button>
        {/* <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button> */}
        {/* <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button> */}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {/* <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div> */}

        <Badges />
      </div>
    </div>
  );
}

export default BadgesBoard;
