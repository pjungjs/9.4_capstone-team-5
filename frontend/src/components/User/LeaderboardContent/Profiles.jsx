import axios from 'axios';
import { useEffect, useState } from 'react';
import UserProfile from './UserProfile.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Profiles() {
  const [allUsersInfo, setAllUsersInfo] = useState(null);
  const [allUserScores, setAllUserScores] = useState(null);
  const [usersWithScores, setUsersWithScores] = useState(null);
  const [usersSortedByScore, setUsersSortedByScore] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users`)
      .then((res) => setAllUsersInfo(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`${BASE_URL}/users/scores`)
      .then((res) => setAllUserScores(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (allUsersInfo && allUserScores) {
      const foundUserScores = allUsersInfo.map((user) => {
        user.score = allUserScores.find(
          (score) => score.user_auth_id === user.user_auth_id,
        );
        return user;
      });
      setUsersWithScores(foundUserScores);
    }
  }, [allUsersInfo, allUserScores]);

  useEffect(() => {
    if (usersWithScores) {
      const sortedByScores = usersWithScores.sort((userA, userB) => {
        return userB.score.score_total - userA.score.score_total;
      });
      setUsersSortedByScore(sortedByScores);
    }
  }, [usersWithScores]);

  return (

    
      <div className="flex flex-col items-center max-w-3xl rounded-3xl mx-auto pb-5 bg-green-600">
       
        
          {usersSortedByScore && usersSortedByScore.map((user, index) => (
            <div
              key={user.id}
              className="p-4 "
            >
              <UserProfile key={user.id} userProfileData={user} index={index}/>
              
            </div>

          ))}
        

      </div>
      {usersSortedByScore &&
        usersSortedByScore.map((user, index) => (
          <div key={user.id} className="p-4">
            <UserProfile key={user.id} userProfileData={user} index={index} />
          </div>
        ))}
    </div>
  );
}

export default Profiles;
