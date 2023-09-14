import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStytchUser } from '@stytch/react';

import Sidebar from './Sidebar.jsx';
import DashboardMain from './DashboardContent/DashboardMain.jsx';
import Achievements from '../../pages/Achievements.jsx';
import LeaderboardDisplay from './LeaderboardContent/LeaderboardDisplay.jsx';
import MyFootprint from './MyFootprintContent/MyFootprint.jsx';
import DailyQuestions from './DailyQuestionsContent/DailyQuestions.jsx';
import SettingsMain from './SettingsContent/SettingsMain.jsx';
import NotFound from '../../pages/NotFound.jsx';

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
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/users`, currentUser)
      .then((response) => setCurrentUser(response.data))
      .catch((error) => {
        console.error('Error: POST new user || GET existing user', error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="flex overflow-x-hidden">
        <Sidebar currentUserRoute={currentUserRoute} />
        <div className="flex-grow">
          {currentUserRoute === 'dashboard' ? (
            <DashboardMain />
          ) : currentUserRoute === 'achievements' ? (
            <Achievements />
          ) : currentUserRoute === 'leaderboard' ? (
            <LeaderboardDisplay />
          ) : currentUserRoute === 'settings' ? (
            <SettingsMain />
          ) : currentUserRoute === 'myfootprint' ? (
            <MyFootprint />
          ) : currentUserRoute === 'dailyquestions' ? (
            <DailyQuestions />
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </UserContext.Provider>
  );
}
