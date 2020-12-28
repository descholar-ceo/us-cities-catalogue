import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import { useState } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { filterCity } from '../redux/actions';

const NavBar = ({ renderedComponent, getSearchQuery }) => {
  const [state, setState] = useState({ searchQuery: '' });
  const handleSearchQueryChange = event => {
    event.preventDefault();
    setState({ searchQuery: event.target.value });
    getSearchQuery(event.target.value);
  };
  const handleSearchQuerySubmit = event => {
    event.preventDefault();
    getSearchQuery(state.searchQuery);
  };
  const isFormRendered = renderedComponent === 'all-cities' ? (
    <div className="nav">
      <div>
        <SearchForm
          handleSearchQueryChange={handleSearchQueryChange}
          handleSearchQuerySubmit={handleSearchQuerySubmit}
        />
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
  getSearchQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getSearchQuery: searchQuery => dispatch(filterCity(searchQuery)),
});

export default connect(null, mapDispatchToProps)(NavBar);
