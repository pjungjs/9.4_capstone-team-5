import { useNavigate } from 'react-router-dom';
import Logo2 from '../../assets/logos/logo2.svg';

function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 py-8 md:flex-row md:space-x-10 md:pb-40 md:pt-0">
      {/* text on the left */}
      <div className="flex flex-col items-center justify-center p-3 text-center md:items-start md:text-left">
        <div className="text-5xl font-bold">
          <p>Ready to make a change for a</p>
          <p className="text-6xl leading-relaxed text-green-500">Greener</p>
          <p>and sustainable future ?</p>
          <p className="mb-2 mt-6 text-xl text-slate-400">
            We only have one planet, but we guess you already knew that.
          </p>
        </div>
        <div className="flex space-x-4 py-4 font-semibold text-white">
          <button
            onClick={() => navigate('/user/dashboard')}
            className="rounded-md bg-green-500 px-4 py-3"
          >
            Take Action
          </button>
          <button
            onClick={() => navigate('/how-it-works')}
            className="rounded-md bg-blue-400 px-4 py-3"
          >
            How does it work?
          </button>
        </div>
      </div>

      {/* logo on the right */}
      <div>
        <img src={Logo2} alt="logo" className="w-fit animate-heartBeat" />
      </div>
    </div>
  );
}

export default LandingHero;
