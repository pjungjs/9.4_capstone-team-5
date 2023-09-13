import axios from 'axios';
import { useState, useEffect } from 'react';
import Badge from './Badge.jsx';

const API = import.meta.env.VITE_BASE_URL;

function BadgesBoard() {
  const [badge, setBadge] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/badges`)
      .then((res) => {
        console.log(res.data);
        setBadge(res.data);
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
          className="mb-3 mr-3 rounded-full border border-blue-600 bg-white px-5 py-2.5 text-center text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          All Badges
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Achieved
        </button>
        <button
          type="button"
          className="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
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

        {badge.map((badge) => (
          <Badge key={badge.badge_id} badge={badge} />
          // <img src={`${badgeImage}${badge.image} `} key={badge.badge_id}/>
        ))}
      </div>
    </div>
  );
}

export default BadgesBoard;
