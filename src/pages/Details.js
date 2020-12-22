import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCity } from '../redux/actions';

const Details = ({ filterOneCity, match: { params } }) => {
  const { city } = params;
  filterOneCity(city);
  return (
    <h1>mCity</h1>
  );
};

Details.propTypes = {
  // city: PropTypes.shape({
  //   city: PropTypes.string,
  //   population: PropTypes.string,
  //   growth_from_2000_to_2013: PropTypes.string,
  //   latitude: PropTypes.number,
  //   longitude: PropTypes.number,
  //   rank: PropTypes.string,
  //   state: PropTypes.string,
  // }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf({
      city: PropTypes.string,
    }),
  }).isRequired,
  filterOneCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ filterOneCity: city => dispatch(filterCity(city)) });

export default connect(null, mapDispatchToProps)(Details);
