function DashboardScoreChart({ userScores }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 shadow-md">
      {userScores && (
        <div>My total score: {userScores.score_leaderboard}</div>
      )}
    </div>
  );
}

export default DashboardScoreChart;
