function DashboardAchievements({ userAchvs, allBadges }) {
  return (
    <div className="flex  flex-col rounded-lg border border-gray-300 p-4 shadow-md">
      <div className="flex text-2xl">
        <p>My Achievements:</p>
        {userAchvs && allBadges && (
          <div className=" whitespace-nowrap pl-1">
            <span className="text-green-600">{userAchvs.length}</span> /{' '}
            <span className="text-red-600">{allBadges.length}</span>
          </div>
        )}
      </div>

      {userAchvs && userAchvs.length > 0 && (
        <div className="flex  flex-wrap py-2">
          {userAchvs.map((achv) => (
            <div
              key={achv.badge_id}
              className="m-1 flex w-28 flex-col items-center justify-center rounded-lg border border-gray-300 bg-gradient-to-r from-green-500 to-teal-500 p-2 hover:shadow-lg"
            >
              <img
                src={achv.badge_img_url}
                alt="badge image"
                className="h-20 w-20"
              />
              <p className="text-center text-sm">{achv.badge_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardAchievements;
