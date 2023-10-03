import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStytchSession } from '@stytch/react';
import {
  BiLike,
  BiCommentDetail,
  BiCalendar,
  BiUpArrow,
  BiDownArrow,
} from 'react-icons/bi';
import NewPostModal from './NewPostModal.jsx';
import Post from './Post.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Posts() {
  const [allPosts, setAllPosts] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [whosPosts, setWhosPosts] = useState('all');
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState({
    likes: '',
    comments: '',
    dates: 'up',
  });

  const { session } = useStytchSession();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`)
      .then((response) => setAllPosts(response.data))
      .catch((error) => console.warn('Error: PUT', error));

    axios
      .get(`${BASE_URL}/users`)
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.warn('Error: PUT', error));
  }, []);

  const toggleWhosPosts = (param) => {
    setWhosPosts(param);
  };

  const toggleSortBy = (sortOption) => {
    if (sortBy[sortOption] === '') {
      setSortBy({ likes: '', comments: '', dates: '', [sortOption]: 'up' });
    } else if (sortBy[sortOption] === 'up') {
      setSortBy({ ...sortBy, [sortOption]: 'down' });
    } else if (sortBy[sortOption] === 'down') {
      setSortBy({ ...sortBy, [sortOption]: '' });
    }
  };

  const toggleNewPostModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="mx-2 flex max-w-xl flex-col items-center justify-center md:max-w-3xl">
      {/* new post modal */}
      {openModal && (
        <NewPostModal
          session={session}
          openModal={openModal}
          setOpenModal={setOpenModal}
          allPosts={allPosts}
          setAllPosts={setAllPosts}
        />
      )}

      {/* all posts and my post tab */}
      <div className="flex w-full space-x-5 p-2">
        <button
          className={`${
            whosPosts === 'all' ? 'text-green-600' : 'text-inherit'
          }`}
          onClick={() => toggleWhosPosts('all')}
        >
          All Posts
        </button>
        {session && (
          <button
            className={`${
              whosPosts === 'my' ? 'text-green-600' : 'text-inherit'
            }`}
            onClick={() => toggleWhosPosts('my')}
          >
            My Posts
          </button>
        )}
      </div>

      <div className="cust-divider"></div>

      <div className="mx-2 my-4 flex w-full flex-col items-center justify-center border border-gray-300 p-3">
        <div className="flex w-full items-center justify-between p-2 pt-0 text-sm">
          {/* filter option */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <p className="whitespace-nowrap pr-2">Filter by:</p>
              <select
                value={filterBy}
                onChange={(event) => setFilterBy(event.target.value)}
                className="bg-gray-50 p-1"
              >
                <option value="">select one</option>
                <option value="title">Title</option>
                <option value="username">Username</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* create new post button */}
          {session && (
            <button
              className="cust-btn rounded-md px-2 py-1 font-normal"
              onClick={() => toggleNewPostModal()}
            >
              Create new post
            </button>
          )}
        </div>

        <div className="cust-divider"></div>

        {/* likes, comments, dates sorting icons */}
        <div className="flex w-full flex-col">
          <div className="grid grid-cols-10 gap-2 p-2 text-center text-sm">
            <div className="col-span-6 flex flex-col items-center justify-center md:col-span-7"></div>
            <div className="col-start-7 overflow-hidden md:col-start-8">
              <div
                className="flex items-center justify-center"
                onClick={() => {
                  toggleSortBy('likes');
                }}
              >
                <BiLike className="text-xl text-green-600" />
                {sortBy['likes'] === 'up' ? (
                  <BiUpArrow className="text-sm text-green-600" />
                ) : sortBy['likes'] === 'down' ? (
                  <BiDownArrow className="text-sm text-green-600" />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="col-start-8 overflow-hidden md:col-start-9">
              <div
                className="flex items-center justify-center"
                onClick={() => {
                  toggleSortBy('comments');
                }}
              >
                <BiCommentDetail className="text-xl text-green-600" />
                {sortBy['comments'] === 'up' ? (
                  <BiUpArrow className="text-sm text-green-600" />
                ) : sortBy['comments'] === 'down' ? (
                  <BiDownArrow className="text-sm text-green-600" />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="col-span-2 col-start-9 overflow-hidden md:col-span-1 md:col-start-10">
              <div
                className="flex items-center justify-center"
                onClick={() => {
                  toggleSortBy('dates');
                }}
              >
                <BiCalendar className="text-xl text-green-600" />
                {sortBy['dates'] === 'up' ? (
                  <BiUpArrow className="text-sm text-green-600" />
                ) : sortBy['dates'] === 'down' ? (
                  <BiDownArrow className="text-sm text-green-600" />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="cust-divider"></div>

        {/* post cards */}
        <div className="w-full space-y-2 pt-2">
          {allPosts &&
            allPosts.map((post) => {
              const postUserInfo = allUsers?.find(
                (user) => user.user_auth_id === post.user_auth_id,
              );
              return (
                <Post
                  key={post.id}
                  session={session}
                  post={post}
                  postUserInfo={postUserInfo}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
