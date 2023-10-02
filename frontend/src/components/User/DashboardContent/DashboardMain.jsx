import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { UserContext } from '../UserMain';
import DashboardWelcome from './DashboardWelcome.jsx';
import DashboardAchievements from './DashboardAchievements.jsx';
import DashboardScoreChart from './DashboardScoreChart.jsx';
import DashboardActions from './DashboardActions.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function DashboardMain() {
  const { currentUser } = useContext(UserContext);
  const [userAchvs, setUserAchvs] = useState(null);
  const [userActns, setUserActns] = useState(null);
  const [userScores, setUserScores] = useState(null);
  const [allBadges, setAllBadges] = useState(null);
  const [allActions, setAllActions] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/badges`)
      .then((response) => setAllBadges(response.data))
      .catch((error) => console.error('Error: GET all badges', error));

    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: 'actions' })
      .then((response) => setAllActions(response.items))
      .catch((error) =>
        console.error('Error fetching data from Contentful', error),
      );
  }, []);

  useEffect(() => {
    if (currentUser.user_achvs) {
      setUserAchvs(currentUser.user_achvs);
    }
    if (currentUser.user_actns) {
      setUserActns(currentUser.user_actns);
    }
    if (currentUser.user_scores) {
      setUserScores(currentUser.user_scores);
    }
  }, [currentUser]);

  return (
    <div className="h-screen">
      <DashboardWelcome />
      <div className="space-y-4 p-4">
        <DashboardScoreChart userScores={userScores} />
        <DashboardActions userActns={userActns} allActions={allActions} />
        <DashboardAchievements userAchvs={userAchvs} allBadges={allBadges} />
      </div>
    </div>
  );
}

export default DashboardMain;
