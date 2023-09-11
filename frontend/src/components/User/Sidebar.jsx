import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SlHome,
  SlPieChart,
  SlNotebook,
  SlBadge,
  SlSettings,
  SlQuestion,
  SlArrowRightCircle,
  SlArrowLeftCircle,
} from 'react-icons/sl';
import { MdLeaderboard } from 'react-icons/md';

function Sidebar({ currentUserRoute }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <aside className="sticky left-0 top-0 z-30 border-r border-gray-300 bg-white md:w-48">
      <div className="px-2 py-3">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/user/dashboard"
              className={`${
                currentUserRoute === 'dashboard'
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlHome className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={`${
                currentUserRoute === ''
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlPieChart className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                My Footprint
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={`${
                currentUserRoute === ''
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlNotebook className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Daily Questions
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/user/achievements"
              className={`${
                currentUserRoute === 'achievements'
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlBadge className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Achievements
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/user/leaderboard"
              className={`${
                currentUserRoute === 'leaderboard'
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <MdLeaderboard className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Leaderboard
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/user/settings"
              className={`${
                currentUserRoute === 'settings'
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlSettings className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Settings
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={`${
                currentUserRoute === ''
                  ? 'rounded-xl bg-green-600 text-white hover:bg-green-700'
                  : 'text-gray-900 hover:text-green-600 hover:underline'
              } flex items-center p-2`}
            >
              <SlQuestion className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Help
              </span>
            </Link>
          </li>
          <li>
            <div
              onClick={toggleSidebar}
              className="flex items-center p-2 text-gray-900 hover:text-green-600 hover:underline md:hidden"
            >
              {openSidebar ? (
                <>
                  <SlArrowLeftCircle className="text-xl" />
                  <span className="ml-3">Close Sidebar</span>
                </>
              ) : (
                <SlArrowRightCircle className="text-xl" />
              )}
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;