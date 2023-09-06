import { useLocation } from 'react-router-dom';

import Sidebar from './Sidebar.jsx';
import DashboardMain from './DashboardContent/DashboardMain.jsx';
import Achievements from '../../pages/Achievements.jsx';
import LeaderboardDisplay from './LeaderboardContent/LeaderboardDisplay.jsx';
import UserSettings from './UserSettings.jsx';
import NotFound from '../../pages/NotFound.jsx';

function UserMain() {
  const currentUserRoute = useLocation().pathname.slice(6);

  return (
    <div className="flex">
      <Sidebar currentUserRoute={currentUserRoute} />
      <div className="flex-grow">
        {currentUserRoute === 'dashboard' ? (
          <DashboardMain />
        ) : currentUserRoute === 'achievements' ? (
          <Achievements />
        ) : currentUserRoute === 'leaderboard' ? (
          <LeaderboardDisplay />
        ) : currentUserRoute === 'settings' ? (
          <UserSettings />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default UserMain;
