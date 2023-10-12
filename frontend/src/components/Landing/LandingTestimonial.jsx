function Testimonial() {
  const testimonials = [
    {
      name: 'Maria Smantha',
      position: 'Entrepreneur',
      pictureUrl: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      content:
        'I have always wanted to live a greener, more eco-conscious lifestyle, but I did not know where to start. Ecoway changed that for me. This app is a game-changer. It is fun, motivating, and incredibly informative. I have earned badges for reducing my carbon footprint, recycling more, and even biking to work. Ecoway transformed my daily habits, making them more sustainable. I have linked with like-minded individuals and shared tips. Thanks to Ecoway, I am on my journey towards a more eco-friendly life!',
    },
    {
      name: 'Lisa Cudrow',
      position: 'Software Developer',
      pictureUrl: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
      content:
        'I have always been a tech-savvy individual, but I was not very eco-conscious. Ecoway changed that. It is not just an app; it is a community of like-minded people working towards a greener future. I have earned badges for taking public transport, reducing plastic use, and even starting a small herb garden. Ecoway leaderboard adds a competitive edge that keeps me motivated. It is incredible to see my progress and connect with others passionate about sustainability.',
    },
    {
      name: 'John Smith',
      position: 'Marine Biologist',
      pictureUrl: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
      content:
        'Ecoway has been a breath of fresh air for me. As a father, I have always wanted to set a positive example for my kids when it comes to taking care of our planet. Ecoway has gamified approach made it easy and enjoyable. My kids and I have embraced eco-friendly challenges together. From reducing energy usage to exploring sustainable recipes, Ecoway has made it a family adventure. The badges we have earned are a source of pride. We are not just making a sustainable future; we are doing it together!',
    },
  ];

  return (
    <div className="mx-4 my-40 flex flex-col items-center justify-center text-center">
      <div className="my-4 max-w-lg md:max-w-2xl">
        <p className="text-3xl font-bold ">
          Discover What Others Say About Ecoway
        </p>
        <p className="py-8">
          Our users&apos; voices are the heart of Ecoway. Take a moment to
          explore their inspiring stories and experiences. These testimonials
          showcase the impact of our app on real people, just like you. Their
          stories are a testament to the power of small actions that lead to
          significant change.
        </p>
      </div>

      <div className="grid gap-6 md:mx-8 md:grid-cols-3">
        {testimonials.map((person, index) => (
          <div key={index} className="block rounded-lg bg-white shadow-lg max-w-xl">
            <div className="cust-bg-primary h-24 rounded-t-lg"></div>
            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white">
              <img src={person.pictureUrl} alt="profile picture" />
            </div>
            <div className="p-6">
              <p className="mb-4 text-2xl font-semibold">{person.name}</p>
              <p className="cust-text-accent">{person.position}</p>
              <hr className="my-4" />
              <p>{person.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
