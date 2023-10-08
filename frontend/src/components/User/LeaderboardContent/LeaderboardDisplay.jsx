import Profiles from '../LeaderboardContent/Profiles.jsx';

function LeaderboardDisplay() {
  return (

    <div className='cust-bg-background'> {/* ask jinseok why when i put the leaderboard here */}
     <div>
        <p className="text-5xl font-semibold mb-4 text-center font-bungee pt-10 ">Leaderboard</p>  

        </div>
      <Profiles />  

    </div>
  );
}

export default LeaderboardDisplay;
