import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStytchSession } from '@stytch/react';
import { BiArrowBack } from 'react-icons/bi';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function EditPost() {
  const [postInfo, setPostInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [newCategory, setNewCategory] = useState('');
  const [newContent, setNewContent] = useState('');

  const { slug } = useParams();
  const navigate = useNavigate();

  const { session } = useStytchSession();

  const createdAt = new Date(postInfo?.created_at).toLocaleString('en-US', {
    dateStyle: 'short',
  });

  useEffect(() => {
    if (session) {
      axios
        .get(`${BASE_URL}/posts/${slug}`)
        .then((response) => {
          setPostInfo(response.data);
          setNewCategory(response.data.category);
          setNewContent(response.data.content);
        })
        .catch((error) => console.warn('Error: PUT', error));

      axios
        .get(`${BASE_URL}/users/${session.user_id}`)
        .then((response) => setUserInfo(response.data))
        .catch((error) => console.warn('Error: PUT', error));
    }
  }, [session]);

  const handleDeletePost = () => {
    axios
      .delete(`${BASE_URL}/posts/${slug}`)
      .then(() => navigate('/community-forum'))
      .catch((error) => console.warn('Error: PUT', error));
  };

  const handleEditSavePost = () => {
    const postToUpdate = {
      category: newCategory,
      content: newContent,
    };

    axios
      .put(`${BASE_URL}/posts/${slug}`, postToUpdate)
      .then((response) => {
        setPostInfo(response.data);
        navigate(-1);
      })
      .catch((error) => console.warn('Error: PUT', error));
  };

  return (
    <div className="m-4 mb-16 flex flex-col items-center">
      <div className="md:w-2/3">
        <div>
          <button
            className="flex items-center py-2 hover:text-green-600 hover:underline"
            onClick={() => navigate(-1)}
          >
            <BiArrowBack />
            <span className="pl-2">Go back</span>
          </button>
        </div>
        <div className="items-left flex flex-col space-y-4">
          <div className="cust-divider"></div>

          <div className="m-4">
            {session &&
              postInfo &&
              userInfo &&
              (userInfo.user_auth_id === session.user_id ? (
                <div className="mb-2 flex justify-center space-x-2 py-2 md:space-x-10">
                  <button
                    className="cust-btn rounded-md px-3 py-2 hover:bg-red-500 focus:border-red-500"
                    onClick={() => handleDeletePost()}
                  >
                    Delete Post
                  </button>
                  <button
                    className={`${
                      newCategory !== postInfo.category ||
                      newContent !== postInfo.content
                        ? 'hover:bg-blue-500 focus:border-blue-500'
                        : 'hover:cursor-default hover:bg-inherit hover:text-inherit focus:border-gray-500'
                    } cust-btn rounded-md px-3 py-2`}
                    onClick={() => {
                      if (
                        newCategory !== postInfo.category ||
                        newContent !== postInfo.content
                      ) {
                        handleEditSavePost();
                      }
                    }}
                  >
                    Save Edit
                  </button>
                  <button
                    className="cust-btn rounded-md px-3 py-2 hover:bg-gray-500 focus:border-gray-500"
                    onClick={() => navigate(-1)}
                  >
                    Cancel Edit
                  </button>
                </div>
              ) : (
                ''
              ))}
            {userInfo && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={userInfo.profile_picture_url}
                    referrerPolicy="no-referrer"
                    alt="post owner picture"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col pl-2">
                    <div>{userInfo.username}</div>
                    <div>{createdAt}</div>
                  </div>
                </div>
              </div>
            )}
            {postInfo && (
              <div className="space-y-4">
                <div className="mt-4 text-3xl">{postInfo.title}</div>
                <div className="flex items-center">
                  <div className="pr-2">in</div>
                  <div>
                    <select
                      id="category"
                      value={newCategory}
                      onChange={(event) => setNewCategory(event.target.value)}
                      className={`${
                        newCategory === postInfo.category && 'text-green-600'
                      } block bg-gray-50 p-2`}
                    >
                      <option value="general">General</option>
                      <option value="tips">Tips</option>
                      <option value="question">Question</option>
                      <option value="resources">Resources</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <textarea
                    id="content"
                    rows="15"
                    value={newContent}
                    onChange={(event) => setNewContent(event.target.value)}
                    className={`${
                      newContent === postInfo.content && 'text-green-600'
                    } bg-gray-50`}
                    placeholder="You can't leave this section empty..."
                    required
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          <div className="cust-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
