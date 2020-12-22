import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sampleBg from '../assets/images/washinton-dc-pic.jpg';

const City = ({ city, selectCity }) => {
  const { city: mCity, population } = city;
  return (
    <div className="list-one-city">
      <img src={sampleBg} alt="washington" />
      <Link onClick={selectCity()} to="/details">
        <h1>{mCity}</h1>
        <h2>
          Population:
          {' '}
          {population}
        </h2>
      </Link>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string,
    population: PropTypes.string,
    growth_from_2000_to_2013: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    rank: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  selectCity: PropTypes.func.isRequired,
};

export default City;
