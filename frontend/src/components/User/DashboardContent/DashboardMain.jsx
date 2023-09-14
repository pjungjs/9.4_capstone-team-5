import DashboardWelcome from './DashboardWelcome';
import DashboardBadges from './DashboardBadges';
import DashboardScoreChart from './DashboardScoreChart';
import DashboardChallenges from './DashboardChallenges';

function DashboardMain() {
  return (
    <div className='h-screen'>
      <DashboardWelcome />
      <div className="space-y-4 p-4">
        <DashboardBadges />
        <DashboardScoreChart />
        <DashboardChallenges />
      </div>
    </div>
  );
}

export default DashboardMain;
