import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../UserMain.jsx';

function Badge({ badge }) {
  const { currentUser } = useContext(UserContext);
  const [badgeProgress, setBadgeProgress] = useState(0);

  useEffect(() => {
    if (badge && currentUser.user_scores) {
      if (currentUser.user_scores[`score_${badge.badge_type}`]) {
        const percentageProgress = Math.floor(
          (currentUser.user_scores[`score_${badge.badge_type}`] * 100) /
            badge.badge_req_points,
        );
        setBadgeProgress(percentageProgress);
      }
    }
  }, [currentUser.user_scores]);

  return (
    <div className="group m-4 hover:cursor-pointer ">
      <div className="relative h-64 w-56 bg-white duration-1000 preserve-3d group-hover:rotate-y-180">
        <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-auto rounded-lg p-4 shadow-lg backface-hidden">
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
          <p className="text-center text-lg font-semibold text-gray-800">
            {badge.badge_name}
          </p>
        </div>

        <div className="cust-bg-primary absolute h-full w-full overflow-auto rounded-lg rotate-y-180 backface-hidden">
          <div className="cust-text-text flex flex-col space-y-10 p-4 text-center">
            <p className="text-gray-600">{badge.badge_description}</p>
            <p>
              Requires{' '}
              <span className="font-extrabold">
                {badge.badge_req_points} Points
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badge;
