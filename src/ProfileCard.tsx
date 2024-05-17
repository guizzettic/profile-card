import "./ProfileCard.css";

interface SocialMediaAccounts {
  twitter: string;
  instagram: string;
  github: string;
  linkedIn: string;
}
export interface ProfileCardProps {
  username: string;
  role: string;
  bio: string;
  email: string;
  socialMediaAccounts: SocialMediaAccounts;
  avatar: string;
}
const colors = {
  indigo: "#4338CA",
  nuetral: "#171717",
  gray: "#525252",
};
colors;

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  role,
  bio,
  email,
  socialMediaAccounts,
  avatar,
}) => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <img
          className="avatar"
          src={avatar}
          alt={`${username} profile image`}
        />

        <div className="user-info">
          <p className="name">{username}</p>
          <p className="role">{role}</p>
        </div>

        <div className="bio-container">
          <p className="bio">{bio}</p>
        </div>
      </div>

      <div className="actions-container">
        <a href={email}>
          <div className="contact-button">Contact me</div>
        </a>

        <div className="social-media-container">
          {Object.values(socialMediaAccounts).map(
            (account: string | undefined) => (
              <img
                key={account}
                className="social-media-accounts"
                src={avatar}
                alt={account}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
