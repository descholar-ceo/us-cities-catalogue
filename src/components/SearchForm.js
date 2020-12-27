import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { filterCity } from '../redux/actions';

const SearchForm = ({ getSearchQuery }) => {
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
  return (
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
  );
};

SearchForm.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getSearchQuery: searchQuery => dispatch(filterCity(searchQuery)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
