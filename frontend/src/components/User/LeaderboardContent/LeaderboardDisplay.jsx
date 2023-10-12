import Profiles from '../LeaderboardContent/Profiles.jsx';

function LeaderboardDisplay() {
  return (
    <div className="mb-10 mt-5 space-y-8">
      <p className="text-center font-bungee text-4xl md:text-5xl font-semibold">
        Leaderboard
      </p>
      <Profiles />
    </div>
  );
}

export default LeaderboardDisplay;
