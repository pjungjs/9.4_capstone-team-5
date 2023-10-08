import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { UserContext } from '../UserMain.jsx';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import DashboardWelcome from './DashboardWelcome.jsx';
import DashboardAchievements from './DashboardAchievements.jsx';
import DashboardScoreChart from './DashboardScoreChart.jsx';
import DashboardActions from './DashboardActions.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function DashboardMain() {
  const { currentUser } = useContext(UserContext);
  const [userScores, setUserScores] = useState(null);
  const [userActns, setUserActns] = useState(null);
  const [userAchvs, setUserAchvs] = useState(null);
  const [allActions, setAllActions] = useState(null);
  const [allBadges, setAllBadges] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (userScores && userActns && userAchvs) {
      setIsLoading(!isLoading);
    }
  }, [userScores, userActns, userAchvs]);

  return (
    <div className="cust-bg-background h-screen">
      <DashboardWelcome />
      {isLoading ? (
        <div className="flex items-center justify-center pt-4">
          <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          <p className="p-4 text-xl">Loading...</p>
        </div>
      ) : (
        <div className="space-y-4 p-4">
          <DashboardScoreChart userScores={userScores} />
          <DashboardActions userActns={userActns} allActions={allActions} />
          <DashboardAchievements userAchvs={userAchvs} allBadges={allBadges} />
        </div>
      )}
    </div>
  );
}

export default DashboardMain;
