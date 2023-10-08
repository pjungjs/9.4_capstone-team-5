import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../UserMain.jsx';

function Badge({ badge }) {
  const { currentUser } = useContext(UserContext);
  const [badgeProgress, setBadgeProgress] = useState(0);
  console.log(badge
    )

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
    <div className="group relative m-4 flex w-56 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg ">
      <div className="flex flex-col items-center justify-center">
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
        <p className="text-center text-lg font-semibold text-gray-800">
          {badge.badge_name}
        </p>
      </div>
      <div className="invisible text-xl absolute z-20  h-full w-full items-start overflow-scroll rounded-lg bg-green-300 opacity-90  group-hover:visible">
        <p className="p-4 text-center text-gray-600">
          {badge.badge_description}
        </p >
        <p className="p-4 text-center font-extrabold text-gray-600">{badge.badge_req_points} Points</p>
      </div>
    </div>
  );
}

export default Badge;