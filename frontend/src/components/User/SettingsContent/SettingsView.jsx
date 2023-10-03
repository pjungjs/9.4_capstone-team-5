import { useContext } from 'react';
import { UserContext } from '../UserMain.jsx';

function SettingsView({ editInfo, setEditInfo }) {
  const { currentUser } = useContext(UserContext);

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
            value={currentUser.first_name}
            readOnly
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
            value={currentUser.last_name}
            readOnly
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
            value={currentUser.username}
            readOnly
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
              value={currentUser.short_bio}
              rows="5"
              placeholder="Describe yourself shortly :) ..."
              readOnly
            />
          </div>
          <div className="flex w-1/2 flex-col items-end">
            <div className="mb-2 block whitespace-nowrap text-right text-xs font-bold uppercase tracking-wide text-gray-700">
              Profile Picture
            </div>
            {currentUser.profile_picture_url ? (
              <img
                src={currentUser.profile_picture_url}
                referrerPolicy="no-referrer"
                alt="profile picture"
                className="h-28 w-28 rounded-lg"
              />
            ) : (
              <div className="text-right normal-case">
                <p>No profile picture found!</p>
                <p>Click on Edit to Upload the picture</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8">
        <button
          type="button"
          onClick={() => setEditInfo(!editInfo)}
          className="rounded-md border-b-4 border-green-700 bg-green-600 px-4 py-2 font-bold text-white hover:border-green-800 hover:bg-green-700"
        >
          Edit
        </button>
      </div>
    </form>
  );
}

export default SettingsView;
