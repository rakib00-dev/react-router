import { Link } from 'react-router-dom';

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-2">
      {profiles.map((profile) => (
        <Link key={profile} to={`profiles/${profile}`}>
          Profile {profile} <br />
        </Link>
      ))}
    </div>
  );
};

export default ProfilesPage;
