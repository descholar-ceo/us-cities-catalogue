import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCityImage from '../helpers/cityHelper';

const City = ({ city }) => {
  const { city: mCity, state: mState } = city;
  const [state, setState] = useState({ cityImg: '' });
  useEffect(async () => {
    const cityImage = await getCityImage(mCity);
    setState({ cityImg: cityImage });
  }, []);
  return (
    <div className="list-one-city">
      <img src={state.cityImg} alt="washington" />
      <Link to={`/details/${mCity}`}>
        <h1>{mCity}</h1>
        <h2>
          State:
          {' '}
          {mState}
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
