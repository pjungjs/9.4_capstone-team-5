import axios from 'axios';
import { useState } from 'react';
import convertToSlug from '../../utils/convertToSlug.js';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function NewPostModal({
  session,
  openModal,
  setOpenModal,
  allPosts,
  setAllPosts,
}) {
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'general',
    content: '',
  });
  const [createPostStatus, setCreatePostStatus] = useState({
    success: false,
    message: '',
  });
  const [imageUpload, setImageUpload] = useState(null);

  function handleTextChange(event) {
    setNewPost({ ...newPost, [event.target.id]: event.target.value });
  }

  function handleSelectChange(event) {
    setNewPost({ ...newPost, [event.target.id]: event.target.value });
  }

  const handleUpload = (event) => {
    const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    const file = event.target.files[0];

    if (validFileTypes.find((type) => type === file.type)) {
      setImageUpload(file);
    } else {
      setCreatePostStatus({
        success: false,
        message: 'File must be in JPG/JPEG/PNG format',
      });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newPostInfo = {
      ...newPost,
      created_at: new Date().toISOString(),
      user_auth_id: session.user_id,
      slug: convertToSlug(newPost.title),
    };

    // Create a New Post and Update "AllPosts" state, then close the modal, if there's no error
    const createNewPost = () => {
      axios
        .post(`${BASE_URL}/posts`, newPostInfo)
        .then((response) => {
          setAllPosts([...allPosts, response.data]);
          setCreatePostStatus({
            success: true,
            message: 'Successfully created a new Post',
          });
          setTimeout(() => {
            setOpenModal(!openModal);
          }, 2000);
        })
        .catch((error) => {
          console.error('Error: PUT', error);
          setCreatePostStatus({
            success: false,
            message: error.response.data.detail || error.message,
          });
        });
    };

    // Upload the image to AWS S3, then Create a New Post, if there's no error
    const uploadImageToS3 = () => {
      const formData = new FormData();
      formData.append('image', imageUpload);

      axios
        .post(`${BASE_URL}/image-cloud/post/${newPostInfo.slug}`, formData)
        .then((response) => {
          newPostInfo.post_picture_url = `https://ecoway.s3.amazonaws.com/${response.data}`;
          createNewPost();
        })
        .catch((error) => {
          console.error('Error: POST', error);
          setCreatePostStatus({
            success: false,
            message: error.message,
          });
        });
    };

    // If there's an uploaded file, Upload the image to AWS S3, if not, just Create a New Post
    if (imageUpload) uploadImageToS3();
    else createNewPost();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="m-2 rounded-lg bg-white">
        <section className="my-2 flex items-center md:my-4">
          <div className="px-2 md:px-6">
            <div>
              <p className="py-1 text-center text-4xl font-extrabold tracking-tight text-green-600">
                New Post
              </p>
              <div className="my-4 px-6 text-center text-xl font-light text-gray-600">
                <p>Share your experience, tips, questions and resources 😄</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg bg-gray-100 p-4 shadow-xl"
            >
              <div>
                <div className="md:flex md:items-center md:space-x-2">
                  <label
                    htmlFor="title"
                    className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 md:mb-0"
                  >
                    Title:
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={newPost.title}
                    onChange={handleTextChange}
                    className="block bg-gray-50"
                    placeholder="Title for your post"
                    required
                  />
                </div>
                <p className="pt-2 text-sm italic text-red-600">
                  * Title must be unique
                </p>
              </div>

              <div className="md:flex md:items-center md:space-x-2">
                <label
                  htmlFor="category"
                  className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 md:mb-0"
                >
                  Select the category:
                </label>
                <select
                  id="category"
                  value={newPost.category}
                  onChange={handleSelectChange}
                  className="block bg-gray-50 p-2.5"
                >
                  <option value="general">General</option>
                  <option value="tips">Tips</option>
                  <option value="question">Question</option>
                  <option value="resources">Resources</option>
                </select>
              </div>

              <div>
                <input
                  id="profile_picture"
                  type="file"
                  onChange={handleUpload}
                  className="text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  Your post content:
                </label>
                <textarea
                  id="content"
                  rows="5"
                  value={newPost.content}
                  onChange={handleTextChange}
                  className="bg-gray-50"
                  placeholder="What would you like to share today?"
                  required
                ></textarea>
              </div>

              <div className="text-center normal-case">
                {createPostStatus.success ? (
                  <p className="text-blue-500">{createPostStatus.message}</p>
                ) : (
                  <p className="text-red-500 underline">
                    {createPostStatus.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(!openModal)}
                  className="cust-btn rounded-full px-5 py-3"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className="cust-btn rounded-full px-5 py-3"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewPostModal;
