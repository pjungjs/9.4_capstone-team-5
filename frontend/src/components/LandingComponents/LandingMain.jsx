import React from 'react';
import planet from '../../assets/planet1.jpeg';
import recycling from '../../assets/recycle1.jpeg';

function LandingMain() {
  return (
    <div>
      <div className=" mx-56  my-8 grid grid-cols-1  grid-rows-2 gap-3 md:grid-cols-3 ">
        <div className=" md:col-span-2 md:row-span-2 ">
          <img src={planet} className="w-full rounded-t-xl bg-contain" />

          <button className="w-full rounded-b-xl bg-green-800 px-4 py-2 font-bold text-white hover:bg-yellow-700 ">
            Take Action
          </button>
        </div>

        <div className=" border-8 md:col-start-3">
          <h1>How does it work?</h1>
          <p>
            First, you will need to create an account. Then, you will be able to
            track your carbon footprint by entering your daily activities.
            Finally, you will be able to offset your carbon footprint by
            donating to a charity of your choice.{' '}
          </p>
        </div>

<div className="bg-local" style={{backgroundImage: `url(${recycling})`}}>
  </div>


        {/* <div className="hidden md:col-start-3 md:row-start-2 md:flex">
          <img src={recycling} className="rounded-xl" />
        </div> */}
      </div>
    </div>
  );
}

export default LandingMain;
