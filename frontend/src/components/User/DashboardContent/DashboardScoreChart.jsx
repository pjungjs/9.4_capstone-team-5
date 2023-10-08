function DashboardScoreChart({ userScores }) {
  return (
    <div className=" rounded-lg border border-gray-300 p-4 shadow-md">
      <div className="flex text-2xl">
        <p>My Total Score:</p>
        <div className="pl-1 text-green-600">
          {userScores ? userScores.score_total : 0}
        </div>
      </div>
    </div>
  );
}

export default DashboardScoreChart;
