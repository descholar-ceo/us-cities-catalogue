import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchForm from '../components/SeacrcForm';

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
