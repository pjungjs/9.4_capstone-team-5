import { useContext, useState } from 'react';
import { UserContext } from '../UserMain.jsx';
import SettingsView from './SettingsView.jsx';
import SettingsEdit from './SettingsEdit.jsx';

function SettingsMain() {
  const { currentUser } = useContext(UserContext);
  const [editInfo, setEditInfo] = useState(false);

  const createdAt = new Date(currentUser.created_at).toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return (
    <div className="mb-20 flex flex-col items-center justify-center uppercase text-gray-700">
      <div className="m-4 whitespace-nowrap">
        <p className="p-2 text-2xl font-bold uppercase">Account Settings</p>
      </div>

      <div className="w-full max-w-2xl space-y-6 px-6 pt-2">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-sm">
            <p className="w-full rounded-lg border border-red-400 px-3 py-2">
              <span className="font-bold">Created at: </span>
              <span className="pl-2 normal-case">{createdAt}</span>
            </p>
            <p className="w-full rounded-lg border border-red-400 px-3 py-2">
              <span className="font-bold">Email: </span>
              <span className="pl-2 normal-case">{currentUser.email}</span>
            </p>
            <p className="text-xs italic text-red-500">
              Created Time & Email cannot be modified
            </p>
          </div>
        </div>

        <div>
          {editInfo ? (
            <SettingsEdit editInfo={editInfo} setEditInfo={setEditInfo} />
          ) : (
            <SettingsView editInfo={editInfo} setEditInfo={setEditInfo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsMain;
