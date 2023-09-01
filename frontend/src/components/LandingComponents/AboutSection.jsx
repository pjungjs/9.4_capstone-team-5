
import React from 'react';

function AboutSection() {
  return (


<div className="py-16 bg-gray-50 overflow-hidden mx-56 my-8">
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div>
            <span className="text-gray-600 text-lg font-semibold">About Us</span>
            <h2 className="mt-4 text-2xl text-green-500 font-bold md:text-4xl">We Empower positive change through sustainable choices for a greener world<br className="lg:block" hidden/> and a better life.</h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">First feature</h5>
                        <p className="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Second feature</h5>
                        <p className="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                    <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Third feature</h5>
                        <p className="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>

            
        </div>
    </div>
</div>



    // <div className="border-8 border-red-900 py-16">
    //   <h2 className="mb-4 text-center text-2xl font-bold">About Us</h2>
    //   <p className="text-center">
    //     Ecoway is an app focused on promoting sustainability and encouraging
    //     eco-friendly practices that can have a positive impact on the
    //     environment and people's daily lives.
    //   </p>



    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
       
       
       
    //     <div className="text-center">
    //       <h3 className="mb-2 font-semibold">Our Mission</h3>
    //       <p>Our mission is to help people reduce their carbon footprint and make a positive impact on the environment.</p>
    //     </div>
        
        
        
    //     <div className="text-center">
    //       <h3 className="mb-2 font-semibold">Carbon Footprint Calculator</h3>
    //       <p>Our vision is to create a community of people who are passionate about sustainability and eco-friendly practices.</p>
    //     </div>
       
       
       
    //     <div className="text-center ">
    //       <h3 className="mb-2 font-semibold">Our Values</h3>
    //       <p>Our values are to be transparent, honest, and ethical in all that we do.</p>
    //     </div>
        
        
        
    //     <div className="text-center">
    //       <h3 className="mb-2 font-semibold">Our Goals</h3>
    //       <p>Our goals are to help people reduce their carbon footprint and make a positive impact on the environment.</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AboutSection;
