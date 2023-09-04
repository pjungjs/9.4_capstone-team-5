import Sidebar from './Sidebar.jsx';
import DashboardWelcome from './DashboardContent/DashboardWelcome.jsx';
import DashboardBadges from './DashboardContent/DashboardBadges.jsx';
import DashboardScoreChart from './DashboardContent/DashboardScoreChart.jsx';
import DashboardChallenges from './DashboardContent/DashboardChallenges.jsx';

function UserDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <DashboardWelcome />
        <div className="h-full space-y-4 p-4">
          <DashboardBadges />
          <DashboardScoreChart />
          <DashboardChallenges />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
