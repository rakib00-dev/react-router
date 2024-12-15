import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const params = useParams();

  console.log(params);

  return <div>ProfilePage {params.profileId}</div>;
};

export default ProfilePage;
