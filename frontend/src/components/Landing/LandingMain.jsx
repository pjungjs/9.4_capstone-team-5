import planet from '../../assets/planet1.jpeg';
import recycling from '../../assets/recycle1.jpeg';
import reduceCarbon from '../../assets/reduceCarbon.jpeg';
import carbonFootMoving from '../../assets/carbonFootMoving.gif';
import howTohelp from '../../assets/howTohelp.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LandingMain() {
  const navigate = useNavigate();

  const images = [carbonFootMoving, planet, recycling, reduceCarbon, howTohelp];
  const [currImage, setCurrImage] = useState(0);

  const nextImage = () => {
    setCurrImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-3 md:grid-cols-3 relative"> */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <div className="relative">
            {/* <div className="h-full rounded-xl bg-[url('assets/planet1.jpeg')] bg-cover bg-no-repeat"></div> */}
            {/* <img src={planet} className="w-full rounded-t-xl md:h-full" /> */}

            <img
              src={images[currImage]}
              className="h-96 w-full object-cover rounded-t-xl md:h-full"
              alt={`Planet ${currImage + 1}`}
            />

            <button
              onClick={() => navigate('/login')}
              className="absolute bottom-0 left-0 right-0 w-full rounded-b-xl bg-green-600 p-4 py-2 font-bold text-white hover:border-0 hover:border-green-600 hover:bg-green-700"
            >
              Take Action
            </button>
          </div>


          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 md:hidden">
            <button
              onClick={previousImage}
              className="mr-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="text-2xl text-gray-500 hover:text-gray-700"
            >
              &larr;
            </button>

            <div className="hidden md:col-start-3 md:flex">
              <img
                src={recycling}
                className="transform rounded-xl transition-all hover:scale-90"
                alt="Recycling"
              />
            </div>
          </div>


          <div className="hidden justify-center md:flex">
            <button
              onClick={previousImage}
              className="mr-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="text-2xl text-gray-500 hover:text-gray-700"
            >
              &rarr;
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default LandingMain;
