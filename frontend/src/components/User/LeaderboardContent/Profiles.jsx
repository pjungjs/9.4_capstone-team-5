import UserProfile from './UserProfile';// import { profileMockData } from './mockDB';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Profiles() {
  const [allUsersInfo, setAllUsersInfo] = useState(null);
  const [allUserScores, setAllUserScores] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users`)
      .then((res) => {
        // console.log(res.data);
        setAllUsersInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios
        .get(`${BASE_URL}/users/scores`)
        .then((res) => {
          // console.log(res.data);
          setAllUserScores(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

 


  const usersWithScores = allUsersInfo?.map(user => {
    user.score = allUserScores?.find(score => 
      score.user_auth_id === user.user_auth_id);
      console.log(user)
   
    return user;
    
  })
// console.log(usersWithScores)  
  const usersSortedByScore = usersWithScores?.sort((userA, userB) => {
    if(userA.score && userB.score) {

      return userB.score.score_total - userA.score.score_total;
    }
  })



  

  return (
    
      <div className="flex flex-col items-center max-w-3xl mx-auto ">
        <div>
        <p className="text-3xl font-semibold mb-4 text-center">Leaderboard</p>

        </div>
        
          {usersSortedByScore && usersSortedByScore.map((user, index) => (
            <div
              key={user.id}
              className="p-4"
            >
              <UserProfile key={user.id} userProfileData={user} index={index}/>
              
            </div>

          ))}
        
      </div>
  );
}

export default Profiles;
