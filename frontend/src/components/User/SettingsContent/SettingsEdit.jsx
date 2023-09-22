import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStytch } from '@stytch/react';
import { UserContext } from '../UserMain.jsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function SettingsEdit({ editInfo, setEditInfo }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [updateUser, setUpdateUser] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    username: currentUser.username,
    short_bio: currentUser.short_bio || '',
    profile_picture_url: currentUser.profile_picture_url || '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const client = useStytch();

  const handleTextChange = (event) => {
    setUpdateUser({ ...updateUser, [event.target.id]: event.target.value });
  };

  const handleUpload = (event) => {
    const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    const file = event.target.files[0];
    console.log(file);

    if (!validFileTypes.find((type) => type === file.type)) {
      setErrorMsg('File must be in JPG/PNG format');
      return;
    }

    const form = new FormData();
    form.append('image', file);
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      currentUser.first_name !== updateUser.first_name ||
      currentUser.last_name !== updateUser.last_name
    ) {
      client.user
        .update({
          name: {
            first_name: updateUser.first_name,
            last_name: updateUser.last_name,
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.warn('Error updating User on Stytch', error));
    }

    axios
      .put(`${BASE_URL}/users/${currentUser.user_auth_id}`, updateUser)
      .then((response) => {
        setCurrentUser(response.data);
        navigate(0);
      })
      .catch((error) => console.warn('Error: PUT', error));
  };

  return (
    <form className="space-y-4">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            value={updateUser.first_name}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          >
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            value={updateUser.last_name}
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={updateUser.username}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="short_bio"
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            >
              Short Bio
            </label>
            <textarea
              id="short_bio"
              value={updateUser.short_bio}
              onChange={handleTextChange}
              rows="5"
              placeholder="Write your short bio here..."
            />
          </div>
          <div className="flex w-1/2 flex-col items-end">
            <div className="mb-2 block text-right text-xs font-bold uppercase tracking-wide text-gray-700">
              Profile Picture
            </div>
            {currentUser.profile_picture_url ? (
              <img
                src={currentUser.profile_picture_url}
                alt="profile picture"
                className="h-28 w-28 rounded-lg"
              />
            ) : (
              <div className="text-right normal-case">
                <p>No profile picture found!</p>
                <p>Click on Edit to Upload the picture</p>
              </div>
            )}
            <input
              id="profile_picture"
              type="file"
              onChange={handleUpload}
              hidden
            />
            <button type="button" className="my-4">
              <label
                htmlFor="profile_picture"
                className="rounded-md border-b-4 border-blue-700 bg-blue-500 px-4 py-3 font-bold text-white hover:cursor-pointer hover:border-blue-800 hover:bg-blue-600"
              >
                {currentUser.profile_picture_url ? 'Update' : 'Upload'}
              </label>
            </button>
            <p className="pt-1 text-red-500 underline">{errorMsg}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8">
        <button
          type="button"
          onClick={() => setEditInfo(!editInfo)}
          className="rounded-md border-b-4 border-gray-400 bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:border-gray-500 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md border-b-4 border-green-700 bg-green-600 px-4 py-2 font-bold text-white hover:border-green-800 hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default SettingsEdit;
