import logo from '../../assets/logo1.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStytch, useStytchSession } from '@stytch/react';
import { GrMenu, GrClose } from 'react-icons/gr';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPro, setOpenPro] = useState(false);
  const [openCom, setOpenCom] = useState(false);
  const [openRes, setOpenRes] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const client = useStytch();
  const { session } = useStytchSession();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  function toggleMenu() {
    setOpenPro(false);
    setOpenCom(false);
    setOpenRes(false);
    setOpenMenu(!openMenu);
  }

  async function handleLogout() {
    await client.session.revoke();
    navigate('/');
  }

  return (
    <nav className=" border-b border-gray-100 bg-white py-0 shadow">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-20 pl-2" src={logo} alt="EcoWay logo" />
          </Link>
        </div>

        <div className="flex items-center gap-2 pr-2 md:order-2 md:pr-4">
          {session ? (
            <>
              <button
                className="whitespace-nowrap rounded-full bg-green-600 px-4 py-2.5 text-sm text-white hover:bg-green-700"
                onClick={() => handleLogout()}
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              className="whitespace-nowrap rounded-full bg-green-600 px-4 py-2.5 text-sm text-white hover:bg-green-700"
              onClick={() => navigate('/login')}
            >
              Get Started
            </button>
          )}

          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            onClick={() => toggleMenu()}
          >
            {openMenu ? <GrClose /> : <GrMenu />}
          </button>
        </div>

        <div
          className={`${
            openMenu ? '' : 'hidden'
          } w-full items-center justify-between md:static md:order-1 md:flex md:w-auto`}
        >
          <ul className="mt-2 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 pt-0 font-medium md:mt-0 md:flex-row md:border-0 md:bg-white md:p-0 xl:gap-8">
            <li className="group relative cursor-pointer px-6 pt-2">
              <div
                className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600"
                onClick={() => setOpenPro(!openPro)}
              >
                Product
              </div>
              <div
                className={`${
                  openPro ? '' : 'max-md:hidden'
                } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
              >
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  How it works
                </Link>
                <Link
                  to="/calculator"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  Carbon Footprint Calculator
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  Achievements
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6 pt-2">
              <div
                className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600"
                onClick={() => setOpenCom(!openCom)}
              >
                Community
              </div>
              <div
                className={`${
                  openCom ? '' : 'max-md:hidden'
                } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
              >
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  Forum Feed
                </Link>
              </div>
            </li>

            <li className="group relative cursor-pointer px-6 pt-2">
              <div
                className="block px-5 py-2 text-gray-900 hover:bg-gray-50 hover:text-green-600"
                onClick={() => setOpenRes(!openRes)}
              >
                Resources
              </div>
              <div
                className={`${
                  openRes ? '' : 'max-md:hidden'
                } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
              >
                <Link
                  to="/testimonials"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  Testimonials
                </Link>
                <Link
                  to="/about"
                  className="my-1 block border-gray-100 py-2 pl-8 text-sm font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                >
                  About Us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
