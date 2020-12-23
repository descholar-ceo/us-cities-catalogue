import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <NavLink to="/">Math Magicians</NavLink>
      <div>
        <NavLink to="/">Home</NavLink>
        <span> | </span>
        <NavLink to="/calculator">Calculator</NavLink>
        <span> | </span>
        <NavLink to="/quotes">Quotes</NavLink>
      </div>
    </nav>
  </header>
);

export default NavBar;
