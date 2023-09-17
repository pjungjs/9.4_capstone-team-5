import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserMain';
import DashboardWelcome from './DashboardWelcome.jsx';
import DashboardBadges from './DashboardBadges.jsx';
import DashboardScoreChart from './DashboardScoreChart.jsx';
import DashboardActions from './DashboardActions.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function DashboardMain() {
  const { currentUser } = useContext(UserContext);
  const [userAchvs, setUserAchvs] = useState(null);
  const [userScores, setUserScores] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/achievements/${'auth_id_1'}`) // ${currentUser.user_auth_id}
      .then((response) => setUserAchvs(response.data.user_achvs))
      .catch((error) => console.error('Error: GET user achievements', error));

    axios
      .get(`${BASE_URL}/users/scores/${'auth_id_1'}`) // ${currentUser.user_auth_id}
      .then((response) => setUserScores(response.data))
      .catch((error) => console.error('Error: GET user achievements', error));
  }, [currentUser]);

  return (
    <div className="h-screen">
      <DashboardWelcome />
      <div className="space-y-4 p-4">
        <DashboardBadges userAchvs={userAchvs} />
        <DashboardScoreChart userScores={userScores} />
        <DashboardActions />
      </div>
    </div>
  );
}

export default DashboardMain;
