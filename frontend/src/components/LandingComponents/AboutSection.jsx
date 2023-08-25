
import React from 'react';

function AboutSection() {
  return (
    <div className="border-8 border-red-900 py-16">
      <h2 className="mb-4 text-center text-2xl font-bold">About Us</h2>
      <p className="text-center">
        Ecoway is an app focused on promoting sustainability and encouraging
        eco-friendly practices that can have a positive impact on the
        environment and people's daily lives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="text-center">
          <h3 className="mb-2 font-semibold">Our Mission</h3>
          <p>Our mission is to help people reduce their carbon footprint and make a positive impact on the environment.</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 font-semibold">Carbon Footprint Calculator</h3>
          <p>Our vision is to create a community of people who are passionate about sustainability and eco-friendly practices.</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 font-semibold">Our Values</h3>
          <p>Our values are to be transparent, honest, and ethical in all that we do.</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 font-semibold">Our Goals</h3>
          <p>Our goals are to help people reduce their carbon footprint and make a positive impact on the environment.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
