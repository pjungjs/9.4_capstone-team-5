function Testimonial() {
  return (
    <div>
      <div className="mx-auto text-center lg:max-w-3xl">
        <p className="mb-6 mt-28 text-3xl font-bold ">
          Discover What Others Say About Ecoway
        </p>
        <p className="mb-2 pb-10">
          Our users&apos; voices are the heart of Ecoway. Take a moment to
          explore their inspiring stories and experiences. These testimonials
          showcase the impact of our app on real people, just like you. Their
          stories are a testament to the power of small actions that lead to
          significant change.
        </p>
      </div>

      {/* <!--First Testimonial--> */}
      <div className="mb-10 ml-10 mr-10 grid gap-6 text-center md:grid-cols-3">
        <div>
          <div className="block rounded-lg bg-white shadow-lg">
            <div className="cust-bg-primary h-28 overflow-hidden rounded-t-lg"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
              <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
            </div>
            <div className="p-6">
              <p className="mb-4 text-2xl font-semibold">Maria Smantha</p>
              <p className="text-l cust-text-accent mb-4">Entrepreneur</p>
              <hr />
              <p className="font mt-4">
                &quot;I&apos;ve always wanted to live a greener, more
                eco-conscious lifestyle, but I didn&apos;t know where to start.
                Ecoway changed that for me. This app is a game-changer.
                It&apos;s fun, motivating, and incredibly informative. I&apos;ve
                earned badges for reducing my carbon footprint, recycling more,
                and even biking to work. Ecoway transformed my daily habits,
                making them more sustainable. I&apos;ve linked with like-minded
                individuals and shared tips. Thanks to Ecoway, I&apos;m on my
                journey towards a more eco-friendly life!&quot;
              </p>
            </div>
          </div>
        </div>

        {/* <!--Second Testimonial--> */}
        <div>
          <div className="block rounded-lg bg-white shadow-lg">
            <div className="cust-bg-primary h-28 overflow-hidden rounded-t-lg"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
              <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
            </div>
            <div className="p-6">
              <p className="mb-4 text-2xl font-semibold">Lisa Cudrow</p>
              <p className="text-l cust-text-accent mb-4">Software Developer</p>
              <hr />
              <p className="mt-4">
                &quot;I&apos;ve always been a tech-savvy individual, but I
                wasn&apos;t very eco-conscious. Ecoway changed that. It&apos;s
                not just an app; it&apos;s a community of like-minded people
                working towards a greener future. I&apos;ve earned badges for
                taking public transport, reducing plastic use, and even starting
                a small herb garden. Ecoway&apos;s leaderboard adds a
                competitive edge that keeps me motivated. It&apos;s incredible
                to see my progress and connect with others passionate about
                sustainability.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* <!--Third Testimonial--> */}
        <div>
          <div className="block rounded-lg bg-white shadow-lg">
            <div className="cust-bg-primary h-28 overflow-hidden rounded-t-lg"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white ">
              <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
            </div>
            <div className="p-6">
              <p className="mb-4 text-2xl font-semibold">John Smith</p>
              <p className="text-l cust-text-accent mb-4">Marine Biologist</p>
              <hr />
              <p className="mt-4">
                &quot;Ecoway has been a breath of fresh air for me. As a father,
                I&apos;ve always wanted to set a positive example for my kids
                when it comes to taking care of our planet. Ecoway&apos;s
                gamified approach made it easy and enjoyable. My kids and I have
                embraced eco-friendly challenges together. From reducing energy
                usage to exploring sustainable recipes, Ecoway has made it a
                family adventure. The badges we&apos;ve earned are a source of
                pride. We&apos;re not just making a sustainable future;
                we&apos;re doing it together!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
