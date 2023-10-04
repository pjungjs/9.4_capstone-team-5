import MainTop from '../components/About/mainTop';
import AboutTeam from '../components/About/AboutTeam';
import background from '../assets/aboutImages/background.png';

function About() {
  return (
    <div
      className="flex w-full flex-col  bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <MainTop />
      <AboutTeam />
    </div>
  );
}

export default About;
