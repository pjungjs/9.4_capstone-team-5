
function Testimonial() {
  return (
    <div>

    <div className="mx-auto text-center  lg:max-w-3xl ">
      <p className="mb-6 text-3xl font-bold mt-28 ">Discover What Others Say About Ecoway

</p>
      <p className="mb-2 pb-10">
      Our users' voices are the heart of Ecoway. Take a moment to explore their inspiring stories and experiences. These testimonials showcase the impact of our app on real people, just like you.
      Their stories are a testament to the power of small actions that lead to significant change.
      </p>
    </div>
  
    {/* <!--First Testimonial--> */}
    <div className="grid gap-6 text-center ml-10 mr-10 mb-10 md:grid-cols-3">
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg">
          <div className="h-28 overflow-hidden rounded-t-lg cust-bg-primary"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
          </div>
          <div className="p-6">
            <p className="mb-4 text-2xl font-semibold">Maria Smantha</p>
            <p className="mb-4 text-l cust-text-accent">Entrepreneur</p>
            <hr />
            <p className="mt-4 font">
             
              I've always wanted to live a greener, more eco-conscious lifestyle, but I didn't know where to start. Ecoway changed that for me. This app is a game-changer. It's fun, motivating, and incredibly informative. I've earned badges for reducing my carbon footprint, recycling more, and even biking to work. Ecoway transformed my daily habits, making them more sustainable. I've linked with like-minded individuals and shared tips. Thanks to Ecoway, I'm on my journey towards a more eco-friendly life!"
            </p>
          </div>
        </div>
      </div>
  
      {/* <!--Second Testimonial--> */}
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg">
          <div className="h-28 overflow-hidden rounded-t-lg cust-bg-primary"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
          </div>
          <div className="p-6">
            <p className="mb-4 text-2xl font-semibold">Lisa Cudrow</p>
            <p className="mb-4 text-l cust-text-accent">Software Developer</p>
            <hr />
            <p className="mt-4">
             
            "I've always been a tech-savvy individual, but I wasn't very eco-conscious. Ecoway changed that. It's not just an app; it's a community of like-minded people working towards a greener future. I've earned badges for taking public transport, reducing plastic use, and even starting a small herb garden. Ecoway's leaderboard adds a competitive edge that keeps me motivated. It's incredible to see my progress and connect with others passionate about sustainability. "
            </p>
          </div>
        </div>
      </div>
  
      {/* <!--Third Testimonial--> */}
      <div>
        <div
          className="block rounded-lg bg-white shadow-lg">
          <div className="h-28 overflow-hidden rounded-t-lg cust-bg-primary"></div>
          <div
            className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white ">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
          </div>
          <div className="p-6">
            <p className="mb-4 text-2xl font-semibold">John Smith</p>
            <p className="mb-4 text-l cust-text-accent">Marine Biologist</p>
            <hr />
            <p className="mt-4">
            
              "Ecoway has been a breath of fresh air for me. As a father, I've always wanted to set a positive example for my kids when it comes to taking care of our planet. Ecoway's gamified approach made it easy and enjoyable. My kids and I have embraced eco-friendly challenges together. From reducing energy usage to exploring sustainable recipes, Ecoway has made it a family adventure. The badges we've earned are a source of pride. We're not just making a sustainable future; we're doing it together!""
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Testimonial;
