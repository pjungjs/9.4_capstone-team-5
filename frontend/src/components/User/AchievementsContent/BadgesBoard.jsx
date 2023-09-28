import axios from 'axios';
import { useContext, useState, useEffect } from 'react';

import Badge from './Badge.jsx';
import { UserContext } from '../UserMain.jsx';

const API = import.meta.env.VITE_BASE_URL;

function BadgesBoard() {
  const { currentUser } = useContext(UserContext);
  const [badgeData, setBadgeData] = useState([]);
  const [filterBy, setFilterBy] = useState('completed');
  // const [isLoading, setIsLoading] = useState(true); 


  // console.log(currentUser.currentUser.user_achvs);
  // console.log(currentUser);

  useEffect(() => {
    axios
      .get(`${API}/badges`)
      .then((res) => {
        console.log(res.data);
        setBadgeData(res.data);
       
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, [ ]);

  // mark badges as achieved
  const filteredBadges = badgeData?.map((badge) => {
    const userAchievedBadge = currentUser.user_achvs?.find(
      (userBadge) => Number(userBadge.badge_id) === badge.badge_id,
    );

    if (userAchievedBadge) {
      badge.achieved = true;
    } else {
      badge.achieved = false;
    }
    return badge;
  });
  // filter badges to show achieved first
  filteredBadges?.sort((badgeA, badgeB) => {
    if (filterBy === 'completed') {
      return badgeA.achieved > badgeB.achieved ? -1 : 1;
    } else if (filterBy === 'incompleted') {
      return badgeA.achieved < badgeB.achieved ? -1 : 1;
    }
  });

  return (
    <div>
      
      <div className="flex flex-col items-center justify-center py-4 md:py-8">
        <p className="mb-2 p-2 text-2xl  font-bold uppercase">All Badges</p>
        <div className="flex items-center">
          <p className="text-md whitespace-nowrap pr-2 font-medium">
            Filter by:
          </p>
          <select
            value={filterBy}
            onChange={(event) => setFilterBy(event.target.value)}
            className="bg-gray-50"
          >
            <option value="completed">Achieved</option>
            <option value="incompleted">Working on</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center ">
          {badgeData &&
            filteredBadges.map((badge) => (
              <Badge key={badge.badge_id} badge={badge} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BadgesBoard;
