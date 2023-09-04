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

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function toggleMenu() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <aside className="sticky left-0 top-0 z-40 h-screen border-r border-gray-300 md:w-48">
      <div className="px-2 py-3">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/user/dashboard"
              className="flex items-center p-2 text-green-600"
            >
              <SlHome className="text-xl" />
              <span className={`${openSidebar ? '' : 'hidden md:flex'} ml-3`}>
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center p-2 text-gray-900 hover:text-green-600"
            >
              <SlPieChart className="text-xl" />
              <span
                className={`${
                  openSidebar ? '' : 'hidden md:flex'
                } ml-3 hover:underline`}
              >
                My Footprint
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center p-2 text-gray-900 hover:text-green-600"
            >
              <SlNotebook className="text-xl" />
              <span
                className={`${
                  openSidebar ? '' : 'hidden md:flex'
                } ml-3 hover:underline`}
              >
                Daily Questions
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center p-2 text-gray-900 hover:text-green-600"
            >
              <SlBadge className="text-xl" />
              <span
                className={`${
                  openSidebar ? '' : 'hidden md:flex'
                } ml-3 hover:underline`}
              >
                Achievements
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/user/settings"
              className="flex items-center p-2 text-gray-900 hover:text-green-600"
            >
              <SlSettings className="text-xl" />
              <span
                className={`${
                  openSidebar ? '' : 'hidden md:flex'
                } ml-3 hover:underline`}
              >
                Settings
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center p-2 text-gray-900 hover:text-green-600"
            >
              <SlQuestion className="text-xl" />
              <span
                className={`${
                  openSidebar ? '' : 'hidden md:flex'
                } ml-3 hover:underline`}
              >
                Help
              </span>
            </Link>
          </li>
          <li
            onClick={toggleMenu}
            className="flex items-center p-2 text-gray-900 hover:text-green-600 md:hidden"
          >
            {openSidebar ? (
              <>
                <SlArrowLeftCircle className="text-xl" />
                <span className="ml-3 hover:underline">Close Sidebar</span>
              </>
            ) : (
              <SlArrowRightCircle className="text-xl" />
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
