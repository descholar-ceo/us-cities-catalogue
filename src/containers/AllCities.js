import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import City from '../components/City';

const AllCities = ({ cities, filter }) => {
  const cityToDisplay = () => {
    if (filter === 'All') {
      return cities;
    }
    const regex = new RegExp(`^${filter}`, 'gi');
    return cities.filter(currCity => currCity.city.match(regex) || currCity.state.match(regex));
  };
  const cityRows = cityToDisplay().map((currCity, index) => <City key={`city-num${index + 1}`} city={currCity} />);
  return (
    <div className="global-container">
      {cityRows}
    </div>
  );
};

AllCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ cities: state.cities, filter: state.filter });

export default connect(mapStateToProps, null)(AllCities);
