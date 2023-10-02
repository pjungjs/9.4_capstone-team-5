import React from 'react';
import About1 from '../../assets/aboutImages/about1.png';
import About2 from '../../assets/aboutImages/about2.png';
import About3 from '../../assets/aboutImages/about3.png';


function MainTop() {
  return (
    <div>
      <p className="mb-4 text-center text-6xl text-blue-600 ">THE MISSION</p>

      <div className="m-5 flex flex-wrap justify-around space-x-2 p-4 text-center">
        <div className="w-80">
          <div>
            <p className="mb-6 text-center text-4xl text-blue-600">
              Promoting Sustainability
            </p>
          </div>

          <div className="mb-16 rounded-3xl bg-white p-8 ">
            <p className="text-center text-xl leading-relaxed text-blue-600">
              Advocating for Sustainable Practices to Create a More
              Environmentally-Friendly Future.
            </p>
          </div>

          <div className="">
            <img src={About3} alt="about1-image" />
          </div>
        </div>

        <div className="w-80 ">
          <div className="mb-6 p-3">
            <p className="text-center text-4xl text-blue-600">Education </p>
          </div>
          <div>
            <img src={About2} alt="about image" />
          </div>

          <div className="mt-8 rounded-3xl bg-white p-8">
            <p className="text-center text-xl text-blue-600 leading-relaxed">
              Provide users with valuable information and resources about
              eco-friendly practices, sustainability, and their positive impact
              on the planet.
            </p>
          </div>
        </div>

        <div className="w-80">
          <div className="mb-6 text-center text-4xl text-blue-600">
            <p>Community Building </p>
          </div>
          <div className="mb-8 rounded-3xl bg-white ">
            <p className="p-8 text-center text-xl leading-relaxed text-blue-600">
              Foster a sense of community among users who share similar
              eco-friendly goals and interests. Encourage users to connect,
              share experiences, and support each other.
            </p>
          </div>

          <div>
            <img src={About1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTop;
