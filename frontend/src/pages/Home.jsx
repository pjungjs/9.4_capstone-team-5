
import AboutSection from '../components/LandingComponents/AboutSection';
import LandingMain from '../components/LandingComponents/LandingMain';

function Home() {
  return (
    <div className="main-landing flex flex-col">
      <LandingMain />
      <AboutSection />
    </div>
  );
}

export default Home;
