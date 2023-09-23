import React from 'react';
// import { useEffect } from 'react';


function UserProfile({ userProfileData}) {
  // console.log(userProfileData)
  
  // useEffect(() => {
  //   userScores.map((score) => {

  //   })
  // }, [])

  return (
    <div className="flex w-96 flex-col justify-center gap-4 border">
      {/* {sortedProfiles.map((profile) => (
        
      ))} */}
      <div className="rounded-lg bg-white p-4 shadow-md">
          <div key={userProfileData.id} className="flex">
                
              <div>
                <img
                  src={userProfileData.badge_image_url}
                  className="mb-2 h-24 w-24 rounded-full"
                  />
              </div>

                  <div>
              <p className="text-xl font-semibold">{userProfileData.first_name}</p>
              {/* <p className="text-gray-600">{userProfileData.location}</p> */}
            </div>

            <div>
              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {userProfileData.score.score_total}
              </p>
              <p className="mt-1 text-sm text-gray-500">{userProfileData.created_at}</p>
              {/* <h1>{profile.badges}</h1> */}
              {/* <h1>{profile.streak}</h1> */}
            </div>
          </div>
        </div>
    </div>
  );
}

export default UserProfile;
