import logo from '../../assets/logo2.svg';
import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 bg-white py-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex items-center md:mb-0">
            <img className="h-20" src={logo} alt="Logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              EcoWay
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 pr-2 text-sm sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 font-semibold uppercase text-gray-900">
                Help
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold uppercase text-gray-900">
                About
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a
                    className="hover:underline"
                    href="https://github.com/pjungjs/9.4_capstone-team-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This Project
                  </a>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{' '}
            <Link to="/" className="hover:text-green-600 hover:underline">
              EcoWay
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            <a href="#" className="text-gray-500 hover:text-green-600">
              <BsFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <BsDiscord />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <BsTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <BsGithub />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
