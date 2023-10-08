import { RiFootprintLine } from 'react-icons/ri';
import { SlCheck, SlBadge } from 'react-icons/sl';
import { MdOutlineForum } from 'react-icons/md';

function HowItWorks() {
  const iconStyling = 'h-12 w-12 text-green-500';
  const appFeatures = [
    {
      icon: <RiFootprintLine className={iconStyling} />,
      title: 'Calculate Your Carbon Emission',
      description:
        'By simply tracking your daily activities, you can calculate your carbon footprint. Our smart algorithms consider your location, energy consumption, and lifestyle choices. Receive personalized recommendations to reduce your carbon footprint.',
    },
    {
      icon: <SlCheck className={iconStyling} />,
      title: 'Take Actions',
      description:
        'Discover how small actions can make a big impact, connect with like-minded individuals, and lead the way to a greener future.',
    },
    {
      icon: <SlBadge className={iconStyling} />,
      title: 'Earn Badges',
      description:
        'Ecoway gamifies green living! Challenge yourself, track your progress, and compete with friends. Together, we are creating a more sustainable planet, one eco-friendly step at a time.',
    },
    {
      icon: <MdOutlineForum className={iconStyling} />,
      title: 'Join the Community',
      description:
        'Engage in discussions on sustainability with like-minded individuals, discover eco-friendly practices, and find inspiration to make a positive impact. Join hands with our thriving community and let us nurture a greener world together!',
    },
  ];

  return (
    <section className="cust-bg-background my-8 mb-12">
      <div className="relative flex flex-wrap justify-center px-4">
        <div className="h-fit w-full p-2 py-4 pb-8 md:sticky md:top-10 md:w-1/2 md:p-8">
          <h2 className="font-heading mb-5 text-6xl font-bold leading-tight text-green-500">
            How Does EcoWay Work?
          </h2>
          <p className="cust-text-text text-lg font-medium leading-relaxed">
            Ecoway works by turning sustainability into a fun and rewarding
            journey. Users select challenges ranging from reducing energy
            consumption to adopting eco-friendly habits. As you complete
            challenges, you earn badges and climb the leaderboard. Connect with
            a community of eco-warriors, share your achievements, and inspire
            others.
          </p>
        </div>
        <div className="flex flex-wrap md:w-1/2 md:p-8">
          {appFeatures.map((feature, index) => (
            <div key={index} className="flex w-full flex-wrap">
              <div className="p-2 py-4 md:p-7">{feature.icon}</div>
              <div className="flex-1 p-2 py-4 pl-4 md:p-7">
                <p className="mb-4 text-xl font-semibold leading-normal">
                  {feature.title}
                </p>
                <p className="font-medium leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
