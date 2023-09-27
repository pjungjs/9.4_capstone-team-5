import UserProfile from './UserProfile';// import { profileMockData } from './mockDB';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_BASE_URL;

function Profiles() {
  const [users, setUsers] = useState([]);
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/users/scores`)
      .then((res) => {
        // console.log(res.data);
        setUserScores(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const usersWithScores = users.map(user => {
    user.score = userScores.find(score => score.user_auth_id === user.user_auth_id);
    return user;
  })

  const usersSortedByScore = usersWithScores.sort((userA, userB) => {
    return userB.score.score_total - userA.score.score_total;
  })

  console.log(usersSortedByScore)

  return (
    
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <div>
        <p className="text-3xl font-semibold mb-4 text-center">Leaderboard</p>

        </div>
        
          {usersSortedByScore.map((user, index) => (
            <div
              key={user.id}
              className="bg-green-100 p-4"
            >
              <UserProfile key={user.id} userProfileData={user} />
            </div>
          ))}
        
      </div>

// {/* <div className="max-w-3xl mx-auto">
// <p className="text-3xl font-semibold mb-4 text-center">Leaderboard</p>
// <div className="space-y-4 bg-red-800">
//   {usersSortedByScore.map((user, index) => (
//     <div
//       key={user.id}
//       className={`bg-green-100  p-4`}
//     >
//       <UserProfile key={user.id} userProfileData={user} />
//     </div>
//   ))}
// </div>
// </div> */}
   



    // <div>
    //   {usersSortedByScore.map((user) => (
    //     <UserProfile
    //       key={user.id}
    //       userProfileData={user}
    //     />
    //   ))}
    // </div>
  );
}

export default Profiles;
