import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { filterCity } from '../redux/actions';

const NavBar = ({ getSearchQuery }) => {
  const [state, setState] = useState({ searchQuery: '' });
  const handleSearchQueryChange = event => {
    event.preventDefault();
    setState({ searchQuery: event.target.value });
    getSearchQuery(state.searchQuery);
  };
  const handleSearchQuerySubmit = event => {
    event.preventDefault();
    getSearchQuery(state.searchQuery);
  };
  return (
    <div className="header">
      <h3>
        <Link to="/">UsCities</Link>
      </h3>
      <div className="nav">
        <div>
          <NavLink to="/">
            <FaHome className="home-icon" />
          </NavLink>
        </div>
        <div>
          <form onSubmit={event => handleSearchQuerySubmit(event)}>
            <input
              type="text"
              onChange={event => handleSearchQueryChange(event)}
              value={state.searchQuery}
              placeholder="City or State"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getSearchQuery: searchQuery => dispatch(filterCity(searchQuery)),
});

export default connect(null, mapDispatchToProps)(NavBar);
