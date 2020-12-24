import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCityData from '../helpers/cityHelper';
import sampleBg from '../assets/images/washinton-dc-pic.jpg';

const City = ({ city }) => {
  const { city: mCity, state } = city;
  useEffect(() => getCityData(mCity), []);
  return (
    <div className="list-one-city">
      <img src={sampleBg} alt="washington" />
      <Link to={`/details/${mCity}`}>
        <h1>{mCity}</h1>
        <h2>
          State:
          {' '}
          {state}
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
};

export default City;
