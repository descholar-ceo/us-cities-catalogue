import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import City from '../components/City';
import { getCitiesAction } from '../redux/actions';

const AllCities = ({ cities, filter }) => {
  let comp;
  if (Object.keys(cities).length === 0) {
    comp = (<h1>Loading...</h1>);
  } else {
    const cityToDisplay = () => {
      if (filter === 'All') {
        return cities;
      }
      const regex = new RegExp(`^${filter}`, 'gi');
      return cities.filter(currCity => currCity.city.match(regex) || currCity.state.match(regex));
    };
    const cityRows = cityToDisplay().map((currCity, index) => (<City key={`city-num${index + 1}`} city={currCity} />));
    comp = cityRows;
  }

  return (
    <div className="global-container">
      {comp}
    </div>
  );
};

AllCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  // getCitiesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ cities: state.cityReducer.cities, filter: state.filter });
// const mapDispatchToProps = dispatch => ({ getCities: () => dispatch(getCitiesAction()) });

export default connect(mapStateToProps, { getCitiesAction })(AllCities);
