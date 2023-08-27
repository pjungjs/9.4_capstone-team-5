import AboutSection from '../components/LandingComponents/AboutSection';
import LandingMain from '../components/LandingComponents/LandingMain';
import Testimonial from '../components/LandingComponents/Testimonial';

function Home() {
  return (
    <div className=" ">
      <LandingMain />
      <AboutSection />
      <Testimonial/>
    </div>
  );
}

export default Home;
