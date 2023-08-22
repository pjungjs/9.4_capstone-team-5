import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="border-1 border-gray-100 bg-white py-0 shadow">
      <div className="mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-20 pl-2" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="items-center">
          <ul className="flex p-4 font-medium">
            <li className="group relative cursor-pointer px-6">
              <div className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600">
                Features
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  How does it work?
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  Carbon Footprint Calculator
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  Achievements
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6">
              <div className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600">
                Community
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  Forum Feed
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6">
              <div className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600">
                About
              </div>
              <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to="/about"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="my-1 block border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700"
                >
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="pr-4">
          <button className="rounded-lg border-white bg-green-600 px-5 py-2 text-sm text-white hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
