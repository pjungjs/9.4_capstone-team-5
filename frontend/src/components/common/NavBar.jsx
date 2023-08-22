import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white border-gray-100 shadow border-1 py-0">
      <div className="flex items-center justify-between mx-auto">
        <div>
          <Link to="/">
            <img className="h-20 pl-2" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="items-center">
          <ul className="flex font-medium p-4">
            <li className="group relative cursor-pointer px-6">
              <div className="block py-2 px-5 text-gray-900 hover:text-green-600 hover:bg-gray-50">
                Features
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  How does it work?
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  Carbon Footprint Calculator
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  Achievements
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6">
              <div className="block py-2 px-5 text-gray-900 hover:text-green-600 hover:bg-gray-50">
                Community
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  Forum Feed
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6">
              <div className="block py-2 px-5 text-gray-900 hover:text-green-600 hover:bg-gray-50">
                About
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/about"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="my-1 block border-gray-100 py-2 px-4 font-semibold text-sm text-gray-500 hover:text-green-700 hover:bg-green-100"
                >
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="pr-4">
          <button className="bg-green-600 py-2 px-5 text-sm text-white border-white rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
