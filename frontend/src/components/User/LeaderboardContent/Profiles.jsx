import IndividualUser from './IndividualUser';
import { profileMockData } from './mockDB';

function Profiles() {
  return (
    <div>
      
      <IndividualUser profileMockData={profileMockData}/>
      
    </div>
  );
}

export default Profiles;
