function DashboardBadges({ userAchvs }) {
  return (
    <div
      className={`${
        userAchvs ? '' : 'flex items-center'
      } rounded-lg border border-gray-300 p-4 shadow-md`}
    >
      My Achievements:
      <div className="flex space-x-2 py-2">
        {userAchvs ? (
          userAchvs.map((achv, index) => (
            <div
              key={index}
              className="border border-gray-400 p-4 hover:shadow-md"
            >
              {achv.badge_name}
            </div>
          ))
        ) : (
          <div className="pl-1"> None</div>
        )}
      </div>
    </div>
  );
}

export default DashboardBadges;
