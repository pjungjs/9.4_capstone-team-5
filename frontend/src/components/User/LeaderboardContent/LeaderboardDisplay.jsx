import Profiles from '../LeaderboardContent/Profiles.jsx';

function LeaderboardDisplay() {
  return (
    <div className="cust-bg-background">
      <div>
        <p className="mb-4 pt-10 text-center font-bungee text-5xl font-semibold">
          Leaderboard
        </p>
      </div>
      <Profiles />
    </div>
  );
}

export default LeaderboardDisplay;
