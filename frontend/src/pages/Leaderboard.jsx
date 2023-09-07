
import LeaderboardDisplay from "../components/User/LeaderboardContent/LeaderboardDisplay"


function Leaderboard() {


  const handleclick = () => {
    console.log('clicked');
  };

  return (
    <div>
    
       <div>
      <p className="flex justify-center">Leaderboard</p>
        <div className="flex justify-center gap-9 m-3">
          <button
            onClick={handleclick}
            className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
          >
            7 Days
          </button>
          <button
            onClick={handleclick}
            className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
          >
            30 days
          </button>
          <button
            onClick={handleclick}
            className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
          >
            All time
          </button>
        </div>
      </div> 
            <LeaderboardDisplay />

      </div>

  );
  
}

export default Leaderboard;
