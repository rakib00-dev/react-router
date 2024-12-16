// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <h1>
        <Link to="/">Navbar</Link>
      </h1>
      <h3>
        <Link to="/Hero">Hero</Link>
      </h3>

      <h3>
        <Link to="/Header">Header</Link>
      </h3>

      <h3>
        <Link to="/about">about</Link>
      </h3>
    </div>
  );
};

export default Navbar;
