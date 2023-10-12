import DashboardWelcome from './DashboardWelcome.jsx';
import DashboardShow from './DashboardShow.jsx';

function DashboardMain() {
  return (
    <div className="h-screen">
      <DashboardWelcome />
      <DashboardShow />
    </div>
  );
}

export default DashboardMain;
