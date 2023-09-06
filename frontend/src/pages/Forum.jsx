import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Forum () {
  const [topics, setTopics] = useState([]);
  const [sampleTopics, setSampleTopics] = useState([]); // State to store sample data

  useEffect(() => {
    // dummy data fetching, replace with backend if  incorporating
    const sampleTopics = [
      { id: 1, title: 'Tips for Reducing Energy Consumption', username: 'User1', content: 'At its core, energy conservation means using less energy to lower costs and reduce environmental impact. This can mean using less electricity, gas, or any other form of energy that you get from your utility and pay for. With finite energy resources available on our planet, actively conserving energy when possible is beneficial individually and to our larger energy systems.' },
      { id: 2, title: 'Sustainable Transportation Ideas', username: 'User2', content: 'Sustainable transportation options run on clean fuel, batteries, or both. Alternative fuels can be used in flexible-fuel and dual-fuel vehicles as well as vehicles with advanced technology, such as hybrid power systems and fuel cells. Alternative fuels help conserve fuel and reduce emissions.' },
      { id: 3, title: 'What Will Be The Biggest Environmental Problems of 2024?', username: 'User3', content: 'The U.S. and the entire world face many immediate environmental issues, but some are more pressing and time-sensitive than others. Let’s review the six biggest environmental issues the U.S. faces as we near 2024.' },
      { id: 4, title: 'How To Reduce Your Carbon Footprint - Top Tips', username: 'User4', content: 'Climate change can be overwhelming. The science is complex, and when it comes to future impacts, there are still a lot of unknowns. While real solutions will require action on a global scale, there are choices you can make in your day-to-day life to lessen your personal impact on the environment.' },
      // Add more topics here
    ];

    setTopics(sampleTopics);
    setSampleTopics(sampleTopics);
  }, []);

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Carbon Footprint Forum</h1>

        <div className="mb-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
        type="search"
        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon3" 
        />

    {/* <!--Search button--> */}
    <button
        className="relative z-[2] rounded-r border-2 border-blue-400 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        type="button"
        id="button-addon3"
        data-te-ripple-init>
        Search
    </button>
  </div>
</div>

     {/* // Content  */}
      <div className="flex-auto flex-col space-y-4 items-center justify-center text-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div key={topic.id} className= "bg-gradient-to-r from-green-300 to-blue-300 rounded p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{topic.title}</h2>
            <p className="text-gray-700">Username: {topic.username}</p>
            <p className="mt-2 font-semibold">{topic.content}</p>
            {/* <Link to={`/topic/${topic.id}`} className="text-blue-500 hover:underline"> */}

            <Link to={{
                pathname: `/topic/${topic.id}`,
                state: { topics: sampleTopics }, // Pass the entire dummy data array
                }}
            className="text-blue-500 hover:underline"
            >

            Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
