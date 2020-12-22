import PropTypes from 'prop-types';

const Details = ({ city }) => {};

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

export default Details;
