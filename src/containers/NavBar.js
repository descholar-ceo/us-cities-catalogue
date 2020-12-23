import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SearchForm from '../components/SeacrcForm';

const NavBar = ({ renderedComponent }) => {
  const isFormRendered = renderedComponent === 'all-cities' ? (
    <div className="nav">
      <div>
        <NavLink to="/">
          <FaHome className="home-icon" />
        </NavLink>
      </div>
      <div>
        <SearchForm />
      </div>
    </div>
  ) : '';
  return (
    <div className="header">
      <h3>
        <Link to="/">UsCities</Link>
      </h3>
      {isFormRendered}
    </div>
  );
};

NavBar.propTypes = {
  renderedComponent: PropTypes.string.isRequired,
};

export default NavBar;
