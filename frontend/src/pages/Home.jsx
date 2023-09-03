import MainSection from '../components/Landing/LandingMain.jsx';
import AboutSection from '../components/Landing/LandingAbout.jsx';
import TestimonialSection from '../components/Landing/LandingTestimonial.jsx';

function Home() {
  return (
    <div className="m-8 mb-20">
      <MainSection />
      <AboutSection />
      <TestimonialSection />
    </div>
  );
}

export default Home;
