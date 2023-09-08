// import { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';

// function ForumTopic () {
//   const { id } = useParams();
//   const location = useLocation();
//   const topics = location.state.topics; // grab entire array

// console.log(location.state);
// console.log(location.state && location.state.topics);


//   const [topic, setTopic] = useState(null);

//   useEffect(() => {
//    // dummy data fetching for a single topic - Replace with actual data fetching
//     // const sampleTopic = {
//     //   id,
//     //   title: 'Tips for Reducing Energy Consumption',
//     //   username: 'User1',
//     //   content: 'Keep your lights off to the extent safely possible, including exterior lights that may be on a timer. Set your thermostat to 78 degrees or higher, health permitting, and turn your air conditioner off when not at home. Move any furniture blocking vents to be sure air is flowing efficiently. Charge your laptop and cell phone before 3 p.m. or after 9 p.m. Hang dry your clothes instead of using your dryer. Unplug energy vampires when not in use, such as televisions, game consoles, and standby coffee makers. Use a fan(s) instead of your air conditioner. Cover your windows to keep sunlight from heating your home. Cook using your stove, microwave, or outside grill instead of your oven. Limit opening your refrigerator and freezer.'
//     // };

//     // Find the topic in the array that matches ID
//     const selectedTopic = topics.find((t) => t.id === parseInt(id));

//     // Handle the case where the topic with the provided ID is not found
//     if (selectedTopic) {
//         setTopic(selectedTopic);
//       } else {
//         console.error(`Topic with ID ${id} not found.`);
//       }
//   }, [id, topics]);  

// //     setTopic(selectedTopic);
// //   }, [id]);

//   if (!topic) {
//     return <div>Loading page...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-semibold">{topic.title}</h1>
//       <p className="text-gray-600">Username: {topic.username}</p>
//       <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//       <p className="mt-4 bg-gray text-lg">{topic.content}</p>
//       </div>
//     </div>
//   );
// };

// ForumTopic.js
import { useState } from 'react';

const ForumTopic = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !username) {
      alert('Please fill out all of the fields (ie: title, content, and username).');
      return;
    }

    const newPost = {
      id: +new Date(),           //Date.now(), incorporate the current timestamp
      title,
      content,
      username,
      likes: 0,
      comments: [],
    };

    onPostSubmit(newPost);

    // Clear form fields
    setTitle('');
    setContent('');
    setUsername('');
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter post content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForumTopic;

