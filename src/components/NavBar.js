import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NavBar = () => (
  <div className="header">
    <div className="nav">
      <div>
        <NavLink to="/">
          <FaHome />
        </NavLink>
      </div>
      <div>
        <form>
          <input type="text" name="searchQuery" placeholder="City or State" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default NavBar;
