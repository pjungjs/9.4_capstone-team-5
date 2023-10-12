import LandingHero from '../components/Landing/LandingHero.jsx';
import LandingGif from '../components/Landing/LandingGif.jsx';
import LandingAbout from '../components/Landing/LandingAbout.jsx';
import LandingTestimonial from '../components/Landing/LandingTestimonial.jsx';

function Home() {
  return (
    <div>
      <LandingHero />
      <LandingGif />
      <LandingAbout />
      <LandingTestimonial />
    </div>
  );
}

export default Home;
