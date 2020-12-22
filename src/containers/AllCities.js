import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import City from '../components/City';
import { displayOneCity } from '../redux/actions';

const AllCities = ({ cities }) => {
  const handleSelectOneCity = mCity => displayOneCity(mCity);
  const cityRows = cities.map((currCity, index) => <City selectCity={() => handleSelectOneCity(currCity)} key={`city-num${index + 1}`} city={currCity} />);
  return (
    <div className="global-container">
      {cityRows}
    </div>
  );
};

AllCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ cities: state.cities.cities });

const mapDispatchToProps = dispatch => ({ displayOneCity: city => dispatch(displayOneCity(city)) });

export default connect(mapStateToProps, mapDispatchToProps)(AllCities);
