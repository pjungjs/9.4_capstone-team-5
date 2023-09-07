import React from 'react';

function IndividualUser({ profileMockData }) {
  const sortedProfiles = [...profileMockData].sort((a, b) => b.score - a.score);

  return (
    <div className="flex w-96 flex-col justify-center gap-4 border">
      {sortedProfiles.map((profile, index) => (
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div key={index} className=''>
            <div>
                
              <img
                src={profile.image}
                className="mb-2 h-24 w-24 rounded-full"
              />
              <p className="text-xl font-semibold">{profile.name}</p>
              <p className="text-gray-600">{profile.location}</p>
            </div>

            

            <div>
              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {profile.score}
              </p>
              <p className="mt-1 text-sm text-gray-500">{profile.date}</p>
              {/* <h1>{profile.badges}</h1> */}
              {/* <h1>{profile.streak}</h1> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndividualUser;
