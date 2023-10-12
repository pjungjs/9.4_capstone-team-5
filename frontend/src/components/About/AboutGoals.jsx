import React from 'react';
import sustainability from '../../assets/aboutImages/sustainability.png';
import education from '../../assets/aboutImages/education.png';
import community from '../../assets/aboutImages/community.png';

function AboutGoals() {
  return (
    <div className="cust-text-text text-center">
      <p className="mb-8 text-5xl font-bold">Our Goals</p>
      <div className="flex flex-wrap justify-around">
        <div className="m-4 max-w-sm rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-green-600">
          <p className="m-6 text-2xl font-bold tracking-tight">
            Promoting Sustainability
          </p>
          <p className="cust-bg-background m-6 rounded-lg border-2 border-green-600 p-3 text-lg">
            Advocating for Sustainable Practices to Create a More
            Environmentally-Friendly Future. Discover how small actions can make
            a big impact.
          </p>
          <img className="p-4" src={sustainability} alt="sustainability" />
        </div>

        <div className="m-4 max-w-sm rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-green-600">
          <p className="m-6 text-2xl font-bold tracking-tight">Education</p>
          <img src={education} alt="education" />
          <p className="cust-bg-background m-6 rounded-lg border-2 border-green-600 p-3 text-lg">
            Provide users with valuable information and resources about
            eco-friendly practices, sustainability, and their positive impact on
            the planet.
          </p>
        </div>

        <div className="m-4 max-w-sm rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-green-600">
          <p className="m-6 text-2xl font-bold tracking-tight">
            Community Building
          </p>
          <p className="cust-bg-background m-6 rounded-lg border-2 border-green-600 p-3 text-lg">
            Foster a sense of community among users who share similar
            eco-friendly goals and interests. Encourage users to connect, share
            experiences, and support each other.
          </p>
          <img className="p-4" src={community} alt="community" />
        </div>
      </div>
    </div>
  );
}

export default AboutGoals;
