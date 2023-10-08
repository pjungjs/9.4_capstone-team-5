import React from 'react';
import About1 from '../../assets/aboutImages/about1.png';
import About2 from '../../assets/aboutImages/about2.png';
import About3 from '../../assets/aboutImages/about3.png';

function MainTop() {
  return (
    <div className="cust-text-text">
      <p className="mb-4 text-center text-6xl font-bold ">Goals</p>

      <div className="m-5 flex flex-wrap justify-around space-x-2 p-4 text-center">
        <div className="max-w-sm rounded-3xl border border-gray-200 bg-white  shadow-2xl shadow-green-600">
          <div>
            <p className="mb-2  mt-6 text-2xl font-bold tracking-tight  ">
              Promoting Sustainability
            </p>
          </div>

          <div className="mb-8 p-8 ">
            <p className="cust-bg-background rounded-lg border-4 border-green-600 p-3 text-center text-lg ">
              Advocating for Sustainable Practices to Create a More
              Environmentally-Friendly Future. Discover how small actions can
              make a big impact.
            </p>
          </div>

          <div className="mb-9 ">
            <img className="rounded-t-lg" src={About3} alt="about1-image" />
          </div>
        </div>

        <div className="max-w-sm rounded-3xl border border-gray-200 bg-white  shadow-2xl shadow-green-600 ">
          <div className="p-3">
            <p className="mb-2 mt-3 text-2xl font-bold tracking-tight">
              Education{' '}
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src={About2} alt="about image" />
          </div>

          <div className=" bg-white p-7">
            <p className="cust-bg-background rounded-lg border-4 border-green-600 p-3 text-center text-lg ">
              Provide users with valuable information and resources about
              eco-friendly practices, sustainability, and their positive impact
              on the planet.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-3xl border border-gray-200 bg-white  shadow-2xl shadow-green-600">
          <div className=" mt-6 text-2xl font-bold tracking-tight  ">
            <p>Community Building </p>
          </div>
          <div className=" mt-3  bg-white p-8  ">
            <p className=" cust-bg-background rounded-lg border-4 border-green-600 p-3 text-center text-lg ">
              Foster a sense of community among users who share similar
              eco-friendly goals and interests. Encourage users to connect,
              share experiences, and support each other.
            </p>
          </div>

          <div className="mb-4">
            <img className="rounded-t-lg " src={About1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTop;


