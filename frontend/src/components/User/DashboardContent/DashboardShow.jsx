import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { UserContext } from '../UserMain.jsx';
import DashboardScoreChart from './DashboardScoreChart.jsx';
import DashboardActions from './DashboardActions.jsx';
import DashboardAchievements from './DashboardAchievements.jsx';
import LoadingIcon from '../../Loading/LoadingIcon.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function DashboardShow() {
  const { currentUser } = useContext(UserContext);
  const [userScores, setUserScores] = useState(null);
  const [userActns, setUserActns] = useState(null);
  const [userAchvs, setUserAchvs] = useState(null);
  const [allActions, setAllActions] = useState(null);
  const [allBadges, setAllBadges] = useState(null);
  const [loadingScores, setLoadingScores] = useState(true);
  const [loadingActions, setLoadingActions] = useState(true);
  const [loadingAchievements, setLoadingAchievements] = useState(true);

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
    if (currentUser.user_scores) {
      setUserScores(currentUser.user_scores);
    }
    if (currentUser.user_actns) {
      setUserActns(currentUser.user_actns);
    }
    if (currentUser.user_achvs) {
      setUserAchvs(currentUser.user_achvs);
    }
  }, [currentUser]);

  useEffect(() => {
    if (userScores && loadingScores) {
      setLoadingScores(!loadingScores);
    }
    if (userActns && loadingActions) {
      setLoadingActions(!loadingActions);
    }
    if (userAchvs && loadingAchievements) {
      setLoadingAchievements(!loadingAchievements);
    }
  }, [userScores, userActns, userAchvs]);

  return (
    <div className="space-y-4 p-4">
      {loadingScores ? (
        <LoadingIcon />
      ) : (
        <DashboardScoreChart userScores={userScores} />
      )}
      {loadingActions ? (
        <LoadingIcon />
      ) : (
        <DashboardActions userActns={userActns} allActions={allActions} />
      )}
      {loadingAchievements ? (
        <LoadingIcon />
      ) : (
        <DashboardAchievements userAchvs={userAchvs} allBadges={allBadges} />
      )}
    </div>
  );
}

export default DashboardShow;
