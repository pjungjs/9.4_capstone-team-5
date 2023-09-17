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
  const navigate = useNavigate();

  const client = useStytch();

  const handleTextChange = (event) => {
    setUpdateUser({ ...updateUser, [event.target.id]: event.target.value });
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
        <div>
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
            rows="4"
            placeholder="Write your short bio here..."
          />
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
