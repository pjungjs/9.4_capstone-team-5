function DashboardWelcome() {
  const welcomeMessages = [
    'Greetings, climate-conscious user! Your dashboard is your tool for change.',
    'Greetings, eco-conscious friend! Your commitment to sustainability is appreciated.',
    'Greetings, eco-conscious explorer! Your journey towards a greener lifestyle starts right here.',
    'Greetings, user with a climate-conscious mindset! Your dashboard is your instrument of change.',
    'Greetings, eco-enthusiast! Your green journey starts now with our dashboard.',
    'Hello there! Your journey toward a greener lifestyle starts here.',
    'Hello, environmental enthusiast! Let us get started on your carbon reduction journey.',
    'Hello, green advocate! We are here to support your efforts to reduce carbon emissions.',
    'Hello there, planet protector! Your dashboard is ready to help you make a difference.',
    'Hello, eco-champion! We greatly appreciate your commitment to sustainability.',
    'Hello, dedicated environmentalist! We are ready to begin your journey to reduce carbon emissions.',
    'Hello, guardian of the environment! Your commitment to sustainability is admired.',
    'Hello, carbon footprint champion! We are here to guide you towards a greener lifestyle.',
    'Hello, advocate for a green world! We are here to fully support your efforts in carbon reduction.',
    'Hello, protector of our planet! Your dashboard is here, ready to empower you.',
    'Welcome to the Carbon Footprint Dashboard! Let us make a positive impact together.',
    'Welcome to the Carbon Footprint Tracker! Let us create a better planet together.',
    'Welcome to your eco-dashboard, where you can measure your environmental impact.',
    'Welcome to your Carbon Footprint Monitor. Let us take steps towards a sustainable future.',
    'Welcome to the sustainability hub. Let us make every day more eco-friendly.',
    'Welcome to the Carbon Awareness Center. Your path to a smaller footprint starts now.',
    'Welcome to the world of sustainable living! Your dashboard awaits your eco-mission.',
    'Welcome to the Carbon Footprint Tracker! Let us collaborate to create a better planet.',
    'Welcome to your eco-dashboard, where precise measurement of your environmental impact is possible.',
    'Welcome to the Carbon Footprint Monitor. Let us collectively take steps towards a sustainable future.',
    'Welcome to the sustainability hub. Let us collectively strive to make every day more eco-friendly.',
    'Welcome to the Carbon Awareness Center. Your journey toward a smaller footprint starts here.',
    'Welcome to our Carbon Footprint Dashboard! Join us in making a positive impact together.',
    'Welcome aboard! Your daily carbon emissions tracking begins now.',
    'Welcome, change-maker! Together, we will make a positive environmental impact.',
    'Welcome, eco-hero! Your dashboard is your trusty sidekick in the fight against emissions.',
    'Welcome back to your carbon journey! We are here to help you reduce emissions.',
    'Welcome back! We are excited to help you monitor your daily carbon footprint.',
    'Welcome back to our dashboard! We are thrilled to assist you in monitoring your daily carbon footprint.',
    'Prepare to track, measure, and reduce. Welcome to your Carbon Footprint Dashboard!',
    'Join us in the quest for a greener world! Welcome to the Carbon Footprint Dashboard.',
    'It is time to take control of your carbon footprint. Welcome to the dashboard!',
    'It is a new day and a new opportunity to make a difference. Welcome to your dashboard!',
    'Join us in making every day a little greener. Welcome to your Carbon Footprint Dashboard!',
    'Get ready to track, measure, and reduce. Welcome to your Carbon Footprint Dashboard!',
    'A new day brings new opportunities to make a difference. Welcome to your dashboard!',
    'The time has come to gain control over your carbon footprint. Welcome to our dashboard!',
    'We are thrilled to see you here! Let us embark together on your journey to reduce carbon emissions.',
    'Step into a world of eco-awareness. Your journey starts here.',
    'Great to have you here! Let us track and reduce your carbon emissions.',
    'Step into the realm of eco-awareness. Your journey begins right here.',
    'Great to have you with us! Let us embark on this eco-adventure together.',
    'It is great to see you here! Let us embark on your journey to reduce carbon emissions.',
    'It is wonderful to have you here! Together, we will track and reduce your carbon emissions.',
    'You are now on board! Your journey towards tracking daily carbon emissions starts now.',
  ];

  return (
    <div className="rounded-b-lg bg-gradient-to-r from-green-500 to-teal-500">
      <div className="w-full p-5 text-center text-xl font-bold text-gray-800">
        {welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]}
      </div>
    </div>
  );
}

export default DashboardWelcome;
