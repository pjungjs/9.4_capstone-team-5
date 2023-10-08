import background from '../../../assets/aboutImages/background.png';

function UserProfile({ userProfileData, index }) {
  
  const userPosition = (positionNum) => {
    const suffix = (positionNum === 1) ? 'st' : (positionNum === 2) ? 'nd' : (positionNum === 3) ? 'rd' : 'th';
    return `${positionNum}${suffix}`;
  };

  return (
    <div className="relative w-96 rounded-b-xl">
      <div
        className="group relative flex animate-jump-in cursor-pointer justify-between rounded-2xl bg-cover bg-center shadow-md before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-green-500 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative space-y-1 p-4">
          <p className="text-xl">
            {userProfileData.first_name} {userProfileData.last_name}
          </p>
          <div className="relative h-6 text-sm text-blue-500">
            <span className="text-2xl transition duration-300 group-hover:invisible group-hover:opacity-0">
              {userPosition(index + 1)} Place
            </span>

            <p className="invisible absolute left-0 top-0 translate-y-3 items-center transition duration-300 group-hover:visible group-hover:translate-y-0">
              <span className="">Eco-Score: </span>
              <span className="font-extrabold">
                {userProfileData.score.score_total}
              </span>
            </p>
          </div>
          <img
            className="absolute bottom-0 right-6 w-[6rem] rounded-2xl transition duration-300 group-hover:scale-[1.4]"
            src={userProfileData.profile_picture_url}
            referrerPolicy="no-referrer"
            alt="user's profile picture"
          />
        </div>
        <img
          className="absolute bottom-0 right-6 w-[6rem] rounded-2xl transition duration-300 group-hover:scale-[1.4]"
          src={userProfileData.profile_picture_url}
          referrerPolicy="no-referrer"
          alt="user's profile picture"
        />
      </div>
    </div>
  );
}

export default UserProfile;
