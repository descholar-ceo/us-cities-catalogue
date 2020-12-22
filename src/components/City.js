import PropTypes from 'prop-types';

const City = ({ city }) => {
  const { city: mCity, population } = city;
  return (
    <div>
      <h1>{mCity}</h1>
      <h2>{population}</h2>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired,
};

export default City;
