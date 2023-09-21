function DashboardScoreChart({ userScores }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 shadow-md">
      <div>My total score: {userScores ? userScores.score_total : 0}</div>
    </div>
  );
}

export default DashboardScoreChart;
