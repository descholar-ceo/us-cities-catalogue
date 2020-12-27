/* eslint-disable import/no-named-as-default */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import SearchForm from '../components/SearchForm';

const NavBar = ({ renderedComponent }) => {
  const isFormRendered = renderedComponent === 'all-cities' ? (
    <div className="nav">
      <div>
        <SearchForm />
      </div>
    </div>
  ) : '';
  return (
    <div className="header">
      <h1>
        <Link to="/">
          <FaHome />
          UsCities
        </Link>
      </h1>
      {isFormRendered}
    </div>
  );
};

NavBar.propTypes = {
  renderedComponent: PropTypes.string.isRequired,
};

export default NavBar;
