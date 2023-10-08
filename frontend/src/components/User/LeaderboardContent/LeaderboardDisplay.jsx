import Profiles from '../LeaderboardContent/Profiles.jsx';

function LeaderboardDisplay() {
  return (
    <div className="cust-bg-background mt-5 mb-10 space-y-8">
      <p className="text-center font-bungee text-5xl font-semibold">
        Leaderboard
      </p>
      <Profiles />
    </div>
  );
}

export default LeaderboardDisplay;
