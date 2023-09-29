import MainSection from '../components/Landing/LandingMain.jsx';
import AboutSection from '../components/Landing/LandingAbout.jsx';
import TestimonialSection from '../components/Landing/LandingTestimonial.jsx';

function Home() {
  return (
    <div className=" bg-green-600">
      <MainSection />
      <AboutSection />
      <TestimonialSection />
    </div>
  );
}

export default Home;
