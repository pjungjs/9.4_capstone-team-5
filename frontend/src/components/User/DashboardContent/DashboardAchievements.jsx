function DashboardAchievements({ userAchvs, allBadges }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-300 p-4 shadow-md">
      <div className="flex">
        <p>My Achievements:</p>
        {userAchvs && allBadges && (
          <div className="whitespace-nowrap pl-1">
            <span className="text-green-600">{userAchvs.length}</span> /{' '}
            <span className="text-red-600">{allBadges.length}</span>
          </div>
        )}
      </div>
      {userAchvs && (
        <div className="flex flex-wrap py-2">
          {userAchvs.map((achv, index) => (
            <div
              key={index}
              className="m-1 flex w-28 flex-col items-center justify-center border border-gray-300 p-2 hover:shadow-lg"
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
