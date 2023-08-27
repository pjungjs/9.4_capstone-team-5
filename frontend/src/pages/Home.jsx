
import AboutSection from '../components/LandingComponents/AboutSection';
import LandingMain from '../components/LandingComponents/LandingMain';
import Testimonial from '../components/LandingComponents/Testimonial';

function Home() {
  return (
    <div className="shrink w-65 h-14">
      <LandingMain />
      <AboutSection />
      <Testimonial/>
    </div>
  );
}

export default Home;
