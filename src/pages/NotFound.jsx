import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h1 style={{ color: 'red', fontSize: 70 }} className="flex flex-col gap-2">
      NotFound this page <Link to={'/'}>Go Back</Link>
    </h1>
  );
};

export default NotFound;
