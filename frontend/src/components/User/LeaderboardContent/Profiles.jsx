import UserProfile from './UserProfile';
import { profileMockData } from './mockDB';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_BASE_URL;

function Profiles() {
  const [userProfileData, setUserProfileData] = useState([]);
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        // console.log(res.data);
        setUserProfileData(res.data);
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

  //  const sortedProfiles = [...userScores].sort((a, b) => b.score - a.score);
  return (
    <div>
      {userProfileData.map((userProfileData) => (
        <UserProfile
          key={userProfileData.id}
          userProfileData={userProfileData} userScores={userScores}
        />
      ))}
    </div>
  );
}

export default Profiles;
