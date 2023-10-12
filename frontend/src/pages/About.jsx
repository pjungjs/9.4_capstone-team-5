import AboutGoals from '../components/About/AboutGoals.jsx';
import AboutTeam from '../components/About/AboutTeam.jsx';

function About() {
  return (
    <div className="flex flex-col m-4">
      <AboutGoals />
      <AboutTeam />
    </div>
  );
}

export default About;
