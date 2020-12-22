import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Details = ({ city }) => {
  const { city: mCity } = city;
  return (
    <h1>{mCity}</h1>
  );
};

Details.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string,
    population: PropTypes.string,
    growth_from_2000_to_2013: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    rank: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(Details);
