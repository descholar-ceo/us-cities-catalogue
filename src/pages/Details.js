import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Details = ({ cities, match: { params } }) => {
  const { city: selectedCity } = params;
  const myCity = cities.filter(city => city.city === selectedCity);
  const { city, population } = myCity[0];
  return (
    <div>
      <h1>{city}</h1>
      <h2>{population}</h2>
    </div>
  );
};

Details.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf({
      city: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({ cities: state.cities });

export default connect(mapStateToProps, null)(Details);
