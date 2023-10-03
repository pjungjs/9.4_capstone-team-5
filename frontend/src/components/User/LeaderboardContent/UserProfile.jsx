import React from 'react';
import background from '../../../assets/aboutImages/background.png';
// import { useEffect } from 'react';

function UserProfile({ userProfileData, index }) {

  console.log(userProfileData);
  return (
    <div className="flex w-96 flex-col justify-center gap-4 border-4 rounded-3xl border-blue-300 overflow-hidden  ">
      <div
        className="  rounded-2xl bg-cover bg-center p-4 shadow-md"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div key={userProfileData.id} className="flex text-center">






          <div className="relative my-6 inline-flex w-fit">
            <div
              className="absolute motion-safe:animate-bounce right-0  -translate-y-1/2 translate-x-2/4 font-bold  text-white">
                <p className='p-1 w-10 h-10  rounded-lg text-2xl bg-white text-blue-500 '>{index + 1 }</p>
            </div>
            <div className="h-24 w-24">

          <img
            src={userProfileData.profile_picture_url}
            className="mx-auto mb-4 w-32 rounded-lg"
          />
            </div>
          </div>


          <div className=" ml-12 flex items-center">
            <p className="text-2xl font-semibold">
              {`${userProfileData.first_name} ${userProfileData.last_name}`}
            </p>
          
          </div>
        </div>

        <div className="flex justify-end items-center ">
          <span className="mr-2 rounded-full bg-green-300 px-2.5 py-1.5 text-m font-medium items-center text-green-800 ">
            Green Score:
          </span>
          <p className='text-xl '>{userProfileData.score.score_total}</p>

          {/* <p className="mt-1 text-sm text-gray-500">
            {userProfileData.short_bio}
          </p> */}
        </div>
      </div>
    </div>
  );
}


export default UserProfile;
