import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStytchSession } from '@stytch/react';
import { BiLike, BiShare, BiCommentDetail, BiArrowBack } from 'react-icons/bi';
import formatTime from '../../utils/formatTime.js';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function PostDetails() {
  const [allUsers, setAllUsers] = useState(null);
  const [postInfo, setPostInfo] = useState(null);
  const [newComment, setNewComment] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();

  const { session } = useStytchSession();

  const createdAt = new Date(postInfo?.created_at).toLocaleString('en-US', {
    dateStyle: 'short',
  });

  const postUserInfo = allUsers?.find((user) => {
    if (user && postInfo) {
      return user.user_auth_id === postInfo.user_auth_id;
    }
  });

  const currentUserLikedPost = postInfo?.post_likes.find((post) => {
    if (post && session) {
      return post.user_id === session.user_id;
    }
  });

  function findUserById(userId) {
    const foundUser = allUsers?.find((user) => {
      if (user && userId) {
        return user.user_auth_id === userId;
      }
    });
    return foundUser;
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${slug}`)
      .then((response) => setPostInfo(response.data))
      .catch((error) => console.warn('Error: PUT', error));

    axios
      .get(`${BASE_URL}/users`)
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.warn('Error: PUT', error));
  }, []);

  function handleCommentSubmit(event) {
    event.preventDefault();
    const newCommentToUpdate = {
      user_id: session.user_id,
      commented_at: new Date().toISOString(),
      content: newComment,
    };

    axios
      .put(`${BASE_URL}/posts/comments/${slug}`, newCommentToUpdate)
      .then((response) => {
        // console.log(response.data);
        setPostInfo(response.data);
      })
      .catch((error) => console.warn('Error: PUT', error));
  }

  function handleLikeButton() {
    const newLikeToUpdate = {
      user_id: session.user_id,
      liked_at: new Date().toISOString(),
    };

    axios
      .put(`${BASE_URL}/posts/likes/${slug}`, newLikeToUpdate)
      .then((response) => {
        // console.log(response.data);
        setPostInfo(response.data);
      })
      .catch((error) => console.warn('Error: PUT', error));
  }

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
            {postUserInfo && (
              <div className="flex items-center">
                <img
                  src={postUserInfo.profile_picture_url}
                  alt="post owner picture"
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col pl-2">
                  <div>{postUserInfo.username}</div>
                  <div>{createdAt}</div>
                </div>
              </div>
            )}
            {postInfo && (
              <div className="space-y-2">
                <div className="mt-4 text-3xl">{postInfo.title}</div>
                <div className="text-green-600">in {postInfo.category}</div>
                <div className="">{postInfo.content}</div>
              </div>
            )}
          </div>

          <div className="cust-divider"></div>

          <div className="m-4 flex flex-col">
            {/* icons: likes, comments and share */}
            <div className="flex space-x-6 pb-3">
              <div
                onClick={() => {
                  if (session) handleLikeButton();
                }}
                className={`${session && 'hover:cursor-pointer'} ${
                  currentUserLikedPost && 'text-green-600'
                } flex items-center`}
              >
                <BiLike className="text-xl" />
                <span className="pl-1">{postInfo?.post_likes.length}</span>
              </div>
              <div className="flex items-center">
                <BiCommentDetail className="text-xl" />{' '}
                <span className="pl-1">{postInfo?.post_comments.length}</span>
              </div>
              {session && (
                <div className="flex items-center hover:cursor-pointer">
                  <BiShare className="scale-x-[-1] text-xl" />
                  <span className="pl-1">Share</span>
                </div>
              )}
            </div>

            {/* display existing comments */}
            {postInfo && postInfo.post_comments.length > 0 ? (
              postInfo.post_comments.map((comment, index) => {
                const commentedUser = findUserById(comment.user_id);
                return (
                  <div key={index} className="my-2 flex flex-col items-start">
                    <div className="flex items-center">
                      {commentedUser?.profile_picture_url && (
                        <img
                          src={commentedUser.profile_picture_url}
                          alt="commented user picture"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <p className="pl-2">{commentedUser?.username}</p>
                      <div className="pl-6">
                        {formatTime(comment.commented_at)}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="m-2 rounded-lg bg-gray-300 p-2">
                        {comment.content}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-4 text-xl underline">No comments yet</div>
            )}

            {/* form: add a new comment */}
            <div>
              {session && (
                <form onSubmit={handleCommentSubmit}>
                  <div>
                    <label
                      htmlFor="newComment"
                      className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      Post a new comment:
                    </label>
                    <textarea
                      id="newComment"
                      rows="5"
                      value={newComment}
                      onChange={(event) => setNewComment(event.target.value)}
                      className="bg-gray-50"
                      placeholder="Share your thoughts here..."
                      required
                    ></textarea>
                  </div>
                  <div className="space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setNewComment('')}
                      className="rounded-md bg-gray-300 px-3 py-2 text-sm text-gray-800 hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
