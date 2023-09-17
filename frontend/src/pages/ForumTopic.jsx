// ForumTopic.jsx
import { useState } from 'react';

const ForumTopic = ({ onPostSubmit, onPostDelete }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!title || !content || !username) {
      alert(
        'Please fill out all of the fields (ie: title, content, and username).',
      );
      return;
    }

    const newPost = {
      id: Date.now(), //Date.now(), incorporate the current timestamp
      title,
      content,
      username,
      likes: 0,
      comments: [],
    };

    // check to see if onPostSubmit is a function -- getting error ?

    if (typeof onPostSubmit === 'function') {
    onPostSubmit(newPost); 

    // Clear form fields
    setTitle('');
    setContent('');
    setUsername('');
  } else {
    console.log('onPostSubmit is not a function');
  }
};

  // delete
  const handleDelete = () => {
    if (typeof onPostDelete === 'function') {
      onPostDelete();
    } else {
      console.log('onPostDelete is not a function');
    }
  };


  return (
    <div>
      <h2 className="mb-2 text-lg font-semi-bold tracking-wide">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="content"
            placeholder="Enter post content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Post
          </button>

          <button
             className="focus:shadow-outline rounded bg-white-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
             type="button"
             onClick={handleDelete}
          >
            ❌
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForumTopic;
