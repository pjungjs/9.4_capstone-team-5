import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../UserMain.jsx';

function Badge({ badge }) {
  const { currentUser } = useContext(UserContext);
  const [badgeProgress, setBadgeProgress] = useState(0);
  console.log(badge);

  useEffect(() => {
    if (badge && currentUser.user_scores) {
      if (currentUser.user_scores[`score_${badge.badge_type}`]) {
        const percentageProgress = Math.floor(
          (currentUser.user_scores[`score_${badge.badge_type}`] * 100) /
            badge.badge_req_points,
        );
        // console.log(percentageProgress, badge.badge_type)
        setBadgeProgress(percentageProgress);
      }
    }
  }, [currentUser.user_scores]);

  return (
    <div className="group m-4 hover:cursor-pointer ">
      <div className="preserve-3d group-hover:rotate-y-180 relative h-60 w-56 bg-white duration-1000">
        <div className="backface-hidden absolute flex h-full w-full flex-col items-center justify-center overflow-auto rounded-lg p-4 shadow-lg">
          <img
            src={badge.badge_img_url}
            alt="badge image"
            className={`${
              badge.achieved ? '' : 'grayscale'
            } relative h-40 w-40`}
          />
          {badgeProgress > 0 && badgeProgress < 100 && (
            <div className="relative m-2 flex w-full items-center justify-center bg-gray-300">
              <p className="z-10 text-xs">{badgeProgress}%</p>
              <div
                className="absolute inset-0 h-full bg-green-500"
                style={{
                  width: `${badgeProgress}%`,
                }}
              ></div>
            </div>
          )}
          <p className=" text-center text-lg font-semibold text-gray-800">
            {badge.badge_name}
          </p>
        </div>

        <div className="backface-hidden rotate-y-180 cust-bg-primary absolute h-full w-full overflow-auto rounded-lg">
          <div className="cust-text-text p-4 text-center flex flex-col space-y-10">
            <p className='text-gray-600'>{badge.badge_description}</p>
              <p>Requires <span className="font-extrabold">{badge.badge_req_points} Points</span>
              
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="">
    //   <div className="perspective group h-[420px] w-[300px] cursor-pointer bg-transparent">
    //     <div className="preserve-3d group-hover:rotate-y-180 relative h-full w-full duration-1000">
    //       <div className="backface-hidden absolute h-full w-full border-2">
    //         <img
    //           src={badge.badge_img_url}
    //           alt="badge image"
    //           className={`${
    //             badge.achieved ? '' : 'grayscale'
    //           } relative h-40 w-40`}
    //         />
    //         {badgeProgress > 0 && badgeProgress < 100 && (
    //           <div className="relative m-2 flex w-full items-center justify-center bg-gray-300">
    //             <p className="z-10 text-xs">{badgeProgress}%</p>
    //             <div
    //               className="absolute inset-0 h-full bg-green-500"
    //               style={{
    //                 width: `${badgeProgress}%`,
    //               }}
    //             ></div>
    //           </div>
    //         )}

    //       </div>

    //       <div className='absolute rotate-y-180 h-full w-full backface-hidden cust-bg-primary overflow-hidden'>
    //         <div className='text-canter flex flex-col items-center justify-center h-full w-full cust-text-text px-2 pb-24'>
    //           <p className='text-3xl font-semibold'>{badge.badge_description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Badge;

{
  /* <div className="group  relative m-4 flex w-56 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg ">
  <div className="flex cust-bg-primary flex-col items-center justify-center ">
    <img
      src={badge.badge_img_url}
      alt="badge image"
      className={`${badge.achieved ? '' : 'grayscale'} relative h-40 w-40`}
    />
    {badgeProgress > 0 && badgeProgress < 100 && (
      <div className="relative m-2 flex w-full items-center justify-center bg-gray-300">
        <p className="z-10 text-xs">{badgeProgress}%</p>
        <div
          className="absolute inset-0 h-full bg-green-500"
          style={{
            width: `${badgeProgress}%`,
          }}
        ></div>
      </div>
    )}
    <p className=" text-center text-lg font-semibold text-gray-800">
      {badge.badge_name}
    </p>
  </div>
  <div className="invisible animate-rotate-y animate-once animate-ease-out animate-duration-[4000ms] text-xl absolute z-20  h-full w-full items-start overflow-scroll rounded-lg bg-green-300 opacity-90  group-hover:visible">
    <p className="p-4 text-center text-gray-600">
      {badge.badge_description}
    </p >
    <p className="p-4 text-center font-extrabold text-gray-600">{badge.badge_req_points} Points</p>
  </div>
</div> */
}

{
  /* <div className="">
  <div className="perspective group h-[420px] w-[300px] cursor-pointer bg-transparent">
    <div className="preserve-3d group-hover:rotate-y-180 relative h-full w-full duration-1000">
      <div className="backface-hidden absolute h-full w-full border-2">
        <img
          src={badge.badge_img_url}
          alt="badge image"
          className={`${
            badge.achieved ? '' : 'grayscale'
          } relative h-40 w-40`}
        />
        {badgeProgress > 0 && badgeProgress < 100 && (
          <div className="relative m-2 flex w-full items-center justify-center bg-gray-300">
            <p className="z-10 text-xs">{badgeProgress}%</p>
            <div
              className="absolute inset-0 h-full bg-green-500"
              style={{
                width: `${badgeProgress}%`,
              }}
            ></div>
          </div>
        )}  
          
      </div>
      
      <div className='absolute rotate-y-180 h-full w-full backface-hidden cust-bg-primary overflow-hidden'>
        <div className='text-canter flex flex-col items-center justify-center h-full w-full cust-text-text px-2 pb-24'>
          <p className='text-3xl font-semibold'>{badge.badge_description}</p>
        </div>
      </div>
    </div>
  </div>
</div> */
}
