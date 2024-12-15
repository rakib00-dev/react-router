import { NavLink, Outlet } from 'react-router-dom';

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  const activeLink = ({ isActive }) => {
    return isActive ? 'bg-black text-white rounded p-1' : 'p-1';
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={activeLink}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
