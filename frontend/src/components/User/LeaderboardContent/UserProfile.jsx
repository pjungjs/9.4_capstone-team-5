import React from 'react';
import background from '../../../assets/aboutImages/background.png';
// import { useEffect } from 'react';

function UserProfile({ userProfileData, index }) {
  // console.log(userProfileData);
 

  const userPosition = () => {
    if (index + 1 === 1) {
      return '1st';
    } else if (index + 1 === 2) {
      return '2nd';
    } else if (index + 1 === 3) {
      return '3rd';
    } else {
      return `${index + 1}th`;
    }
  };

  return (
    <div className=" ">
      <div className="relative flex w-96  flex-col justify-end rounded-b-xl pt-6  ">
        <div>
          <div
            className="group relative flex cursor-pointer justify-between rounded-2xl bg-cover bg-center shadow-md before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-green-500 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="relative  space-y-1 p-4">
              <h4 className="text-xl text-blue-500">
                {userProfileData.first_name} {userProfileData.last_name}
              </h4>
              <div className="relative h-6 text-sm text-blue-500">
                <span className="text-2xl transition duration-300 group-hover:invisible group-hover:opacity-0">
                  {userPosition()} Place
                </span>
                <a
                  href=""
                  className=" gap- invisible absolute left-0 top-0 translate-y-3 items-center transition duration-300 group-hover:visible group-hover:translate-y-0"
                >
                  <span className="">Eco-Score: </span>
                  <span className="font-extrabold">
                    {userProfileData.score.score_total}
                  </span>
                </a>
              </div>
            </div>
            <img
              className="absolute bottom-0   right-6 w-[6rem] rounded-2xl transition duration-300 group-hover:scale-[1.4]"
              src={userProfileData.profile_picture_url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

// <div className="flex w-96 flex-col justify-center gap-4 border-4 rounded-3xl border-blue-300 overflow-hidden  ">
//   <div
//     className="  rounded-2xl bg-cover bg-center p-4 shadow-md"
//     style={{ backgroundImage: `url(${background})` }}
//   >
//     <div key={userProfileData.id} className="flex text-center">

//       <div className="relative my-6 inline-flex w-fit">
//         <div
//           className="absolute motion-safe:animate-bounce right-0  -translate-y-1/2 translate-x-2/4 font-bold  text-white">
//             <p className='p-1 w-10 h-10  rounded-lg text-2xl bg-green-50 text-blue-500 '>{index + 1 }</p>
//         </div>
//         <div className="h-24 w-24">

//       <img
//         src={userProfileData.profile_picture_url}
//         className="mx-auto mb-4 w-32 rounded-lg"
//       />
//         </div>
//       </div>

//       <div className=" ml-12 flex items-center">
//         <p className="text-2xl font-semibold">
//           {`${userProfileData.first_name} ${userProfileData.last_name}`}
//         </p>

//       </div>
//     </div>

//     <div className="flex justify-end items-center ">
//       <span className="mr-2 rounded-full bg-green-300 px-2.5 py-1.5 text-m font-medium items-center text-green-800 ">
//         Green Score:
//       </span>
//       <p className='text-xl '>{userProfileData.score.score_total}</p>

//       {/* <p className="mt-1 text-sm text-gray-500">
//         {userProfileData.short_bio}
//       </p> */}
//     </div>
//   </div>
// </div>
