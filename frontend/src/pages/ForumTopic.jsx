import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ForumTopic () {
  const { id } = useParams();
  const location = useLocation();
  const topics = location.state.topics; // grab entire array

console.log(location.state);
console.log(location.state && location.state.topics);


  const [topic, setTopic] = useState(null);

  useEffect(() => {
   // dummy data fetching for a single topic - Replace with actual data fetching
    // const sampleTopic = {
    //   id,
    //   title: 'Tips for Reducing Energy Consumption',
    //   username: 'User1',
    //   content: 'Keep your lights off to the extent safely possible, including exterior lights that may be on a timer. Set your thermostat to 78 degrees or higher, health permitting, and turn your air conditioner off when not at home. Move any furniture blocking vents to be sure air is flowing efficiently. Charge your laptop and cell phone before 3 p.m. or after 9 p.m. Hang dry your clothes instead of using your dryer. Unplug energy vampires when not in use, such as televisions, game consoles, and standby coffee makers. Use a fan(s) instead of your air conditioner. Cover your windows to keep sunlight from heating your home. Cook using your stove, microwave, or outside grill instead of your oven. Limit opening your refrigerator and freezer.'
    // };

    // Find the topic in the array that matches ID
    const selectedTopic = topics.find((t) => t.id === parseInt(id));

    // Handle the case where the topic with the provided ID is not found
    if (selectedTopic) {
        setTopic(selectedTopic);
      } else {
        console.error(`Topic with ID ${id} not found.`);
      }
  }, [id, topics]);  
  
//     setTopic(selectedTopic);
//   }, [id]);

  if (!topic) {
    return <div>Loading page...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">{topic.title}</h1>
      <p className="text-gray-600">Username: {topic.username}</p>
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <p className="mt-4 bg-gray text-lg">{topic.content}</p>
      </div>
    </div>
  );
};

export default ForumTopic;

