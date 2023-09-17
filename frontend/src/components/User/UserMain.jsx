import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStytchUser } from '@stytch/react';

import Sidebar from './Sidebar.jsx';
import DashboardMain from './DashboardContent/DashboardMain.jsx';
import MyFootprint from './MyFootprintContent/MyFootprint.jsx';
import DailyQuestions from './DailyQuestionsContent/DailyQuestions.jsx';
import Achievements from '../../pages/Achievements.jsx';
import LeaderboardDisplay from './LeaderboardContent/LeaderboardDisplay.jsx';
import ActionsMain from './ActionsContent/ActionsMain.jsx';
import SettingsMain from './SettingsContent/SettingsMain.jsx';
import NotFound from '../../pages/NotFound.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const UserContext = createContext();

export default function UserMain() {
  const currentUserRoute = useLocation().pathname.slice(6);
  const { user } = useStytchUser();

  const [currentUser, setCurrentUser] = useState({
    created_at: user.created_at,
    user_auth_id: user.user_id,
    first_name: user.name.first_name,
    last_name: user.name.last_name,
    username: user.emails[0].email.split('@')[0],
    email: user.emails[0].email,
    short_bio: '',
    profile_picture_url: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getUser = await axios.get(
          `${BASE_URL}/users/${currentUser.user_auth_id}`,
        );

        if (getUser.data) {
          setCurrentUser(getUser.data);
        } else {
          await createUser();
          await createUserScores();
        }
      } catch (error) {
        console.error('Error: GET existing user', error);
      }
    };

    const createUser = async () => {
      try {
        const postUser = await axios.post(`${BASE_URL}/users`, currentUser);
        setCurrentUser(postUser.data);
      } catch (error) {
        console.error('Error: POST new user', error);
      }
    };

    const createUserScores = async () => {
      try {
        const postScores = await axios.post(
          `${BASE_URL}/users/scores/${currentUser.user_auth_id}`,
        );
        console.log(postScores.data);
      } catch (error) {
        console.error('Error: POST new scores', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="flex overflow-x-hidden">
        <Sidebar currentUserRoute={currentUserRoute} />
        <div className="flex-grow">
          {currentUserRoute === 'dashboard' ? (
            <DashboardMain />
          ) : currentUserRoute === 'myfootprint' ? (
            <MyFootprint />
          ) : currentUserRoute === 'dailyquestions' ? (
            <DailyQuestions />
          ) : currentUserRoute === 'actions' ? (
            <ActionsMain />
          ) : currentUserRoute === 'achievements' ? (
            <Achievements />
          ) : currentUserRoute === 'leaderboard' ? (
            <LeaderboardDisplay />
          ) : currentUserRoute === 'settings' ? (
            <SettingsMain />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </UserContext.Provider>
  );
}
