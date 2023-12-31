import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStytch, useStytchSession, useStytchUser } from '@stytch/react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
import logo1 from '../../assets/logos/logo1.svg';
import logo2 from '../../assets/logos/logo2.svg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function NavBar() {
  const [userInfo, setUserInfo] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  // const [openPro, setOpenPro] = useState(false);
  // const [openCom, setOpenCom] = useState(false);
  // const [openRes, setOpenRes] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const client = useStytch();
  const { session } = useStytchSession();
  const { user } = useStytchUser();

  const updateStyle = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', updateStyle);

  useEffect(() => {
    if (user) {
      axios
        .get(`${BASE_URL}/users/${user.user_id}`)
        .then((response) => setUserInfo(response.data))
        .catch((error) => console.warn('Error: PUT', error));
    }
  }, [user]);

  useEffect(() => {
    setOpenMenu(false);
    setOpenUserMenu(false);
  }, [pathname]);

  function toggleMenu() {
    // setOpenPro(false);
    // setOpenCom(false);
    // setOpenRes(false);
    setOpenMenu(!openMenu);
  }

  function toggleUserMenu() {
    setOpenUserMenu(!openUserMenu);
  }

  async function handleLogout() {
    await client.session.revoke();
    navigate('/');
  }

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`${
          !scrolled
            ? 'bg-transparent'
            : 'border-b border-gray-100 bg-white shadow'
        } w-full py-0 transition duration-300 ease-in-out`}
      >
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div>
            <Link to="/">
              <img
                className={`${!scrolled ? 'h-24 pl-2' : 'h-20 pl-4'}`}
                src={!scrolled ? logo1 : logo2}
                alt="EcoWay logo"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 pr-2 md:order-2 md:pr-4">
            {!session ? (
              <button
                className="text-md whitespace-nowrap rounded-full bg-green-600 px-4 py-2.5 text-white hover:bg-green-700"
                onClick={() => navigate('/login')}
              >
                Join Now
              </button>
            ) : (
              <div className="relative flex flex-col items-end">
                <div>
                  <button
                    className="flex items-center rounded-full focus:ring-4 focus:ring-green-200"
                    onClick={() => toggleUserMenu()}
                  >
                    {userInfo && userInfo.profile_picture_url ? (
                      <img
                        src={userInfo.profile_picture_url}
                        referrerPolicy="no-referrer"
                        alt="profile picture"
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <AiOutlineUser className="rounded-full border-2 border-green-600 p-1 text-5xl text-green-600 hover:bg-green-600 hover:text-white" />
                    )}
                  </button>
                </div>
                <div
                  className={`${openUserMenu ? '' : 'hidden'} ${
                    !scrolled ? 'cust-bg-background' : 'bg-white'
                  } cust-text-text text-md absolute top-14 z-50 divide-y divide-gray-200 rounded-lg border text-right shadow-lg`}
                >
                  <div className="whitespace-nowrap px-4 py-3">
                    {userInfo && (
                      <>
                        <p>
                          {userInfo.first_name} {userInfo.last_name}
                        </p>
                        <p className="max-w-[170px] truncate font-medium">
                          {userInfo.email}
                        </p>
                      </>
                    )}
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/user/dashboard"
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600 hover:underline"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/user/settings"
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600 hover:underline"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <span
                        className="block cursor-pointer px-4 py-2 hover:bg-green-100 hover:text-green-600 hover:underline"
                        onClick={() => handleLogout()}
                      >
                        Log Out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
            } w-full items-center justify-between text-lg md:static md:order-1 md:flex md:w-auto`}
          >
            <ul className="mt-2 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-2 font-medium md:mt-0 md:flex-row md:border-0 md:bg-inherit md:p-0 xl:gap-8">
              <li className="group relative cursor-pointer p-2 lg:px-6">
                <div
                  className="block rounded-lg px-5 py-2 text-gray-900 hover:bg-green-200 hover:text-green-700"
                  onClick={() => {
                    // setOpenPro(!openPro);
                    navigate('/how-it-works');
                  }}
                >
                  How It Works
                </div>
                {/* <div
                  className={`${
                    openPro ? '' : 'max-md:hidden'
                  } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-sm text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
                >
                  <Link
                    to={`${session ? '/user/dailyquestions' : '/login'}`}
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Carbon Footprint Calculator
                  </Link>
                  <Link
                    to="/actions"
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Take Actions
                  </Link>
                  <Link
                    to="/badges"
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Earn Badges
                  </Link>
                </div> */}
              </li>

              <li className="group relative cursor-pointer p-2 lg:px-6">
                <div
                  className="block rounded-lg px-5 py-2 text-gray-900 hover:bg-green-200 hover:text-green-700"
                  onClick={() => {
                    // setOpenCom(!openCom);
                    navigate('/community-forum');
                  }}
                >
                  Community Forum
                </div>
                {/* <div
                  className={`${
                    openCom ? '' : 'max-md:hidden'
                  } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-sm text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
                >
                  <Link
                    to="/forum"
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Forum Feed
                  </Link>
                </div> */}
              </li>

              <li className="group relative cursor-pointer p-2 lg:px-6">
                <div
                  className="block rounded-lg px-5 py-2 text-gray-900 hover:bg-green-200 hover:text-green-700"
                  onClick={() => {
                    // setOpenRes(!openRes);
                    navigate('/about');
                  }}
                >
                  About Us
                </div>
                {/* <div
                  className={`${
                    openRes ? '' : 'max-md:hidden'
                  } z-50 flex w-full flex-col border-2 border-gray-200 bg-gray-100 text-sm text-gray-800 shadow-lg md:invisible md:absolute md:border-0 md:group-hover:visible`}
                >
                  <Link
                    to="/our-goal"
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Our Goal
                  </Link>
                  <Link
                    to="/our-team"
                    className="my-1 block border-gray-100 py-2 pl-8 font-semibold text-gray-500 hover:bg-green-100 hover:text-green-700 md:px-4"
                  >
                    Our Team
                  </Link>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
