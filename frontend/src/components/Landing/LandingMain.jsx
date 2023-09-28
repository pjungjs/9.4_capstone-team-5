import planet from '../../assets/planet1.jpeg';
import recycling from '../../assets/recycle1.jpeg';
import { useNavigate } from 'react-router-dom';
// import JoinVideo from '../../assets/Join.mp4';
import JoinGif from '../../assets/Join.gif'

function LandingMain() {
  const navigate = useNavigate();

  return (

<div className='flex flex-row justify-center '>

<div className='mt-8 w-3/4 h-3/4  '>
  <img src={JoinGif} />
</div>
</div>





    
      // <div className="grid grid-cols-1 grid-rows-2 gap-3 md:grid-cols-3">
      //   <div className="md:col-span-2 md:row-span-2">
      //     {/* <div className="h-full rounded-xl bg-[url('assets/planet1.jpeg')] bg-cover bg-no-repeat"></div> */}
      //     <img src={planet} className="w-full rounded-t-xl md:h-full" />
      //     <button
      //       onClick={() => navigate('/login')}
      //       className="w-full rounded-b-xl bg-green-600 py-2 font-bold text-white hover:border-0 hover:border-green-600 hover:bg-green-700"
      //     >
      //       Take Action
      //     </button>
      //   </div>

      //   <div className="rounded-xl bg-gray-200 md:col-start-3">
      //     <div className="p-4">
      //       <p className="pb-2 text-center text-lg font-bold">
      //         How does it work?
      //       </p>
      //       <p>
      //         First, you will need to create an account. Then, you will be able
      //         to track your carbon footprint by entering your daily activities.
      //         Finally, you will be able to offset your carbon footprint by
      //         donating to a charity of your choice.
      //       </p>
      //     </div>
      //   </div>

      //   <div className="hidden md:col-start-3 md:row-start-2 md:flex">
      //     <img src={recycling} className="rounded-xl" />
      //   </div>
      // </div>
   
  );
}

export default LandingMain;
