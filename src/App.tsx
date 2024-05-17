// import { useState } from "react";
import "./App.css";
import ProfileCard, { ProfileCardProps } from "./ProfileCard";
import PROFILE_DATA from "./mockProfileData.json";
import profilePhoto from "./assets/profile.png";

function App() {
  const profileData: ProfileCardProps = PROFILE_DATA[0];
  console.log(profileData);
  return (
    <div className="body-container">
      <ProfileCard
        username={profileData.username}
        role={profileData.role}
        bio={profileData.bio}
        email={profileData.email}
        socialMediaAccounts={profileData.socialMediaAccounts}
        avatar={profilePhoto}
      />
    </div>
  );
}

export default App;

// const [currentProfile, setCurrentProfile] = useState(0);
{
  /* <button
        onClick={() =>
          setCurrentProfile(currentProfile === 0 ? 0 : currentProfile - 1)
        }
      >
        Previous
      </button>
      <button onClick={() => setCurrentProfile(currentProfile + 1)}>
        Next
      </button> */
}
