import recycling from '../../assets/recycle1.jpeg';
import whatIscarbonFootprint from '../../assets/whatIscarbonFootprint.jpeg';
import carbonFootMoving from '../../assets/carbonFootMoving.gif';
import howItWorks from '../../assets/howItWorks.gif';
import howTohelp from '../../assets/howTohelp.png';
import { useNavigate } from 'react-router-dom';
import JoinGif from '../../assets/Join.gif';
import { useState } from 'react';
import Logo2 from '../../assets/logos/logo2.svg';

function LandingMain() {
  const navigate = useNavigate();

  // const images = [
  //   carbonFootMoving,
  //   howItWorks,
  //   whatIscarbonFootprint,
  //   recycling,
  //   howTohelp,
  // ];
  // const [currImage, setCurrImage] = useState(0);

  // const nextImage = () => {
  //   setCurrImage((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const previousImage = () => {
  //   setCurrImage((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1,
  //   );
  // };

  return (
    <div>
      <div className="mx-auto flex w-full flex-wrap items-center px-4 pb-20 font-sans sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        {/* <!-- Column-1 --> */}
        <div className="w-full px-3 lg:w-2/5">
          <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
            <p className="text-3xl font-bold lg:text-5xl">
              Ready to make a change for a
              <br />
              <span
                className="text-6xl leading-relaxed text-green-500"
              >
                Greener
                <br />
              </span>
              <span className="">and sustainable future ?</span>
            </p>

            <p className="visible mx-0 mb-0 mt-3 text-left text-sm leading-relaxed text-slate-400">
              We only have one planet, but we guess you already knew that.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <button
              onClick={() => navigate('/login')}
              className="visible mb-4 block cursor-pointer rounded bg-green-500 px-8 py-4 text-xs font-semibold leading-none tracking-wide text-white sm:mb-0 sm:mr-3 sm:inline-block"
            >
              Take Action
            </button>

            <button className="visible block cursor-pointer bg-blue-400 px-8 py-4 text-xs font-semibold leading-none text-white sm:inline-block">
              How We Work?
            </button>
          </div>
        </div>

        {/* <!-- Column-2 --> */}
        <div className="mb-12 w-full px-3 lg:mb-0 lg:w-3/5">
          {/* <!-- Illustrations Container --> */}

          <img className=" animate-heartBeat   w-full lg:ml-32 " src={Logo2} alt="" />
        </div>
      </div>

      <div
        className="flex h-[700px] w-full flex-col items-center justify-center bg-cover  bg-fixed bg-center"
        style={{ backgroundImage: `url(${carbonFootMoving})` }}
      >
        
        {/* <p className="mb-10 mt-20 text-5xl font-semibold cust-text-text">
          WE ARE ECOWAY
        </p> */}

        <span className="my-20 text-3xl  text-center font-extrabold text-white">
          Gamified Eco-Living to turn sustainability into a game
          <hr className="my-4 cust-bg-primary" />
          Take small actions lead to significant changes 
          <hr className="my-4" />
          <p>Connect with like-minded individuals for a greener world.</p>
        </span>
      </div>
    </div>
  );
}

export default LandingMain;
