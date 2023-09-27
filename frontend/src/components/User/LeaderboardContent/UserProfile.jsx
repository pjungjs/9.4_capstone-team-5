import React from 'react';
// import { useEffect } from 'react';

function UserProfile({ userProfileData }) {
  return (
    <div className="flex w-96 flex-col justify-center gap-4 border">
      <div className="rounded-lg bg-white p-4 shadow-md">
        <div key={userProfileData.id} className="flex">
          <img
            src={userProfileData.profile_picture_url}
            className="mb-2 h-24 w-24 rounded-full"
          />
<div className='ml-4 items-center'>

          <p className="text-xl font-semibold">{userProfileData.first_name}</p>
           
          <p className="text-xl font-semibold">{userProfileData.last_name}</p>
</div>
        </div>


        <p className="mt-2 text-2xl font-bold text-indigo-600">
          Green Score: {userProfileData.score.score_total}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {userProfileData.created_at}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
