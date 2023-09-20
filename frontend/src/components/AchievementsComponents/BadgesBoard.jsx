

import axios from 'axios';
import { useState, useEffect } from 'react';

import Badge from './Badge.jsx';

const API = import.meta.env.VITE_BASE_URL;

function BadgesBoard() {
  const [badge, setBadge] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      <div className="flex flex-col items-center justify-center py-4 md:py-8">
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
          className="inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          type="button"
          onMouseOver={toggleDropdown} // Add click event handler
        >
          Dropdown hover{' '}
          <svg
            className={`ml-2.5 h-2.5 w-2.5 transform ${
              isDropdownOpen ? 'rotate-180' : '' // Rotate the arrow icon based on the toggle state
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Conditionally render the dropdown content */}
        {isDropdownOpen && (
          <div
            id="dropdownHover"
            className="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Login Badges
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Energy Badges
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Food Badges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Lifestyle Badges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Recycling Badges
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex space-x-2 flex-col">
        {badge.map((badge) => (
          <Badge key={badge.badge_id} badge={badge} />
        ))}
      </div>
    </div>
  );
}

export default BadgesBoard;
