import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NavBar = () => (
  <header>
    <nav>
      <div>
        <FaHome />
        <NavLink to="/">UsCities</NavLink>
      </div>
      <div>
        <form>
          <input type="text" name="searchQuery" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  </header>
);

export default NavBar;
