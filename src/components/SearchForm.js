import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ handleSearchQueryChange, handleSearchQuerySubmit }) => (
  <form onSubmit={event => handleSearchQuerySubmit(event)}>
    <input
      type="text"
      onChange={event => handleSearchQueryChange(event)}
      placeholder="City or State"
    />
    <button type="submit">
      <FaSearch />
    </button>
  </form>
);

SearchForm.propTypes = {
  handleSearchQueryChange: PropTypes.func.isRequired,
  handleSearchQuerySubmit: PropTypes.func.isRequired,
};

export default SearchForm;
