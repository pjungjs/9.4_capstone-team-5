
import { useState } from 'react';
import ForumTopic from '../pages/ForumTopic'; 

const sampleTopics = [
  {
    id: 1,
    title: 'Tips for Reducing Energy Consumption',
    username: 'Sheisthebestepps',
    content:
      'At its core, energy conservation means using less energy to lower costs and reduce environmental impact. This can mean using less electricity, gas, or any other form of energy that you get from your utility and pay for. With finite energy resources available on our planet, actively conserving energy when possible is beneficial individually and to our larger energy systems. Keep your lights off to the extent safely possible, including exterior lights that may be on a timer. Set your thermostat to 78 degrees or higher, health permitting, and turn your air conditioner off when not at home. Move any furniture blocking vents to be sure air is flowing efficiently. Charge your laptop and cell phone before 3 p.m. or after 9 p.m. Hang dry your clothes instead of using your dryer. Unplug energy vampires when not in use, such as televisions, game consoles, and standby coffee makers. Use a fan(s) instead of your air conditioner. Cover your windows to keep sunlight from heating your home. Cook using your stove, microwave, or outside grill instead of your oven. Limit opening your refrigerator and freezer.',
  },
  {
    id: 2,
    title: 'Sustainable Transportation Ideas',
    username: 'Type-towinit',
    content:
      'Sustainable transportation options run on clean fuel, batteries, or both. Alternative fuels can be used in flexible-fuel and dual-fuel vehicles as well as vehicles with advanced technology, such as hybrid power systems and fuel cells. Alternative fuels help conserve fuel and reduce emissions.',
  },
  {
    id: 3,
    title: 'What Will Be The Biggest Environmental Problems of 2024?',
    username: 'WiliAm',
    content:
      'The U.S. and the entire world face many immediate environmental issues, but some are more pressing and time-sensitive than others. Let’s review the six biggest environmental issues the U.S. faces as we near 2024. 1. Fossil Fuels: burning these fuels for energy is the leading cause of climate change 2. Deforestation: the urbanization of forested land has severe consequence. It impacts C02 emissions which contributes to global warming, and impacts wildlife and their habitats and ecosystems. 3. Air Quality 4. Drinking Water: We take drinking water for granted in the U.S., but water-contamination crises have shown to affect Flint, Michigan, Mississippi, Maryland and Hawaii. 5. Waste: the more we consume, the more waste we produce. 6. Natural Resources: natural resource depletion can lead to many issues, including water shortages, oil shortages, loss of forested lands, mineral depletion, and even species extinction.',
  },
  {
    id: 4,
    title: 'How To Reduce Your Carbon Footprint - Top Tips',
    username: 'InPursuit',
    content:
      'Climate change can be overwhelming. The science is complex, and when it comes to future impacts, there are still a lot of unknowns. While real solutions will require action on a global scale, there are choices you can make in your day-to-day life to lessen your personal impact on the environment.',
  },
];

const Forum = () => {
  // Initialize state for storing posts
  const [posts, setPosts] = useState(sampleTopics);
  const [comment, setComment] = useState('');
//   const [showComment, setShowComment] = useState(false);

  const [activeCommentPostId, setActiveCommentPostId] = useState(null);

  // Update the likes count in the state
  const handleLikes = () => {
    setPosts((previousPost) => ({
      ...previousPost,
      likes: previousPost.likes + 1,
    }));
  };

  // Function to handle the submission of a new post
  const handlePostSubmit = (newPost) => {
    newPost.comments = [];
    setPosts([...posts, newPost]);
  };

  // handle comment submission
  const handleComment = (postId) => {
    // setShowComment(true);

    setActiveCommentPostId(postId);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === '') {
      return;
    }

    // update the post's comments array in the state
    // setPosts((previousPost) => ({
    //   ...previousPost,
    //   comments: [...previousPost.comments, comment],
    // }));
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === activeCommentPostId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );



    // clear comment input field
    setComment('');
    setActiveCommentPostId(null); // Reset activeCommentPostId
  };

  // Implement the sharing functionality here
  const handleShare = () => {
    alert('Sharing not implemented in this example.');
  };

  return (
    <div className="container mx-auto p-4">
        <div className="rounded border-top bg-blue-400 p-4 m-4">
      <h1 className="mb-3 text-3xl font-bold tracking-wide">
        EcoWAY Carbon 👣 Footprint Forum
      </h1>
</div>
      {/* ForumTopic component for creating new posts */}
      <ForumTopic onPostSubmit={handlePostSubmit} />
      <div className="mt-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-4 rounded-lg bg-gradient-to-r from-green-300 to-blue-300 p-4 shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <div className="text-gray-700">
              {post.content.split('\n').map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))}
            </div>

            <p className="mt-2 text-gray-500">Posted by {post.username}</p>

            {/* Like, Comment, and Share buttons can be added here */}
            <div className="space-x-2">
              <button
                onClick={handleLikes}
                className="rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Like ({post.likes ? post.likes.length : '0'})
              </button>
              <button
                onClick={() => handleComment(post.id)}  
                className="rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Comment ({post.comments ? post.comments.length : ''})
              </button>
              <button
                onClick={handleShare}
                className="rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Share
              </button>
            </div>

            {activeCommentPostId === post.id && (
              <div>
                <input
                  type="text"
                  placeholder="Write your wisdom (comment) here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={handleCommentSubmit}
                  className='hover:underline" text-blue-500'
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
