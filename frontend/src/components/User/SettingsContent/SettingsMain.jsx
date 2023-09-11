import { useContext } from 'react';
import { UserContext } from '../UserMain.jsx';

function SettingsMain() {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  return <div>SettingsMain</div>;
}

export default SettingsMain;
